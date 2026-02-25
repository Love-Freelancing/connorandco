'use client'

import { useState } from 'react'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function FooterNewsletterForm() {
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

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.get('email') }),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        setStatus({
          type: 'error',
          message: data.error || 'Unable to subscribe right now.',
        })
        return
      }

      form.reset()
      setStatus({
        type: 'success',
        message: 'Thanks! You are subscribed to the blog.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to subscribe right now.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="max-w-sm" onSubmit={handleSubmit}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Subscribe to the blog
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Get the latest insights on Next.js development, Webflow design, and
        building scalable digital products.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          required
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            disabled={isSubmitting}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-60"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
      {status.type !== 'idle' && (
        <p
          className={`mt-4 text-sm ${
            status.type === 'success' ? 'text-green-700' : 'text-red-700'
          }`}
          role="status"
        >
          {status.message}
        </p>
      )}
    </form>
  )
}