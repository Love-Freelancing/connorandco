'use client'

import { useId, useState } from 'react'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

function formatPhone(value: string) {
  let digits = value.replace(/\D/g, '').slice(0, 10)

  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 whitespace-nowrap -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<
    | { type: 'idle' }
    | { type: 'success'; message: string }
    | { type: 'error'; message: string }
  >({ type: 'idle' })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus({ type: 'idle' })
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      budget: formData.get('budget'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        setStatus({
          type: 'error',
          message: data.error || 'Unable to send your inquiry right now.',
        })
        return
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Thanks! Your inquiry was sent successfully.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to send your inquiry right now.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" required />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <TextInput
            label="Company (Optional)"
            name="company"
            autoComplete="organization"
          />
          <TextInput
            label="Phone (Optional)"
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="numeric"
            onInput={(event) => {
              event.currentTarget.value = formatPhone(event.currentTarget.value)
            }}
          />
          <TextInput
            label="Tell us about your tech stack, goals, or the problem you're solving..."
            name="message"
            required
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Subscription (Monthly / Annual)"
                  name="budget"
                  value="subscription"
                  required
                />
                <RadioInput
                  label="Webflow / Landing Page ($3k - $5k)"
                  name="budget"
                  value="webflow"
                />
                <RadioInput
                  label="Custom Web App / MVP ($8k - $15k)"
                  name="budget"
                  value="mvp"
                />
                <RadioInput
                  label="Not sure yet / Let’s chat"
                  name="budget"
                  value="notsure"
                />
              </div>
            </fieldset>
          </div>
        </div>
        {status.type !== 'idle' && (
          <p
            className={`mt-6 text-sm ${
              status.type === 'success' ? 'text-green-700' : 'text-red-700'
            }`}
            role="status"
          >
            {status.message}
          </p>
        )}
        <Button type="submit" className="mt-10" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    </FadeIn>
  )
}
