'use client'

import { useMemo, useState } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

type BillingCycle = 'monthly' | 'quarterly' | 'yearly'

const billingOptions: Array<{
  key: BillingCycle
  label: string
  price: string
  note: string
}> = [
  {
    key: 'monthly',
    label: 'Monthly',
    price: '$1,000+ / month',
    note: 'Minimum subscription level',
  },
  {
    key: 'quarterly',
    label: 'Quarterly',
    price: '$3,000+ / quarter',
    note: 'Same scope, paid quarterly',
  },
  {
    key: 'yearly',
    label: 'Yearly',
    price: '$12,000+ / year',
    note: 'Same scope, paid yearly',
  },
]

const plans = [
  {
    key: 'agency-overflow-offer',
    target: 'Creative agencies and studios with delivery pressure',
    price: 'Starting at $1,500',
    title: 'Agency Overflow Offer',
    description:
      'White-label Webflow and Next.js production for agencies that need a reliable development partner.',
    includes: [
      'White-label execution under your brand',
      'Webflow builds and Next.js frontends',
      'Clear communication and handoff',
      'Staging links and dependable deadlines',
      'Typical range: $1,500 - $5,000+',
    ],
    buttonLabel: 'Discuss agency support',
    buttonHref: '/contact',
  },
  {
    key: 'startup-launch-offer',
    target: 'Founders who need credibility and speed without full-time hires',
    title: 'Startup Launch Offer',
    price: 'Starting at $3,500',
    description:
      'Fast design and development for founders who need a credible website or MVP frontend.',
    includes: [
      'Messaging and interface design',
      'Marketing site or MVP frontend build',
      'Next.js development with room to scale',
      'Integrations needed for launch',
      'Typical range: $3,500 - $12,000+',
    ],
    buttonLabel: 'Plan your launch',
    buttonHref: '/contact',
  },
  {
    key: 'conversion-refresh-offer',
    target: 'Teams fixing underperforming homepages and landing pages',
    price: 'Starting at $2,000',
    title: 'Conversion Refresh Offer',
    description:
      'Homepage and landing page redesigns focused on clarity, speed, and conversion.',
    includes: [
      'Messaging and UX audit',
      'Design refresh for trust and clarity',
      'Performance and page speed improvements',
      'Design changes based on conversion goals',
    ],
    buttonLabel: 'Refresh your page',
    buttonHref: '/contact',
  },
  {
    key: 'ongoing-partner-support',
    target: 'Teams that want a steady follow-on partner after launch',
    price: 'Minimum $1,000 / month',
    title: 'Ongoing Partner Support',
    description:
      'Flexible monthly support for post-launch improvements, overflow work, and ongoing updates.',
    includes: [
      'Tier 1 — Core Support ($1,000/month)',
      'Tier 2 — Growth Partner ($2,000/month)',
      'Webflow updates, bug fixes, and feature work',
      '48-72 hour turnaround for small tasks',
      'Pause anytime with no long-term lock-in contracts',
    ],
    buttonLabel: 'Ask about support',
    buttonHref: '/contact',
  },
]

export function SubscriptionPricingCards() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly')

  const selectedBilling = useMemo(
    () => billingOptions.find((option) => option.key === billingCycle)!,
    [billingCycle],
  )

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="mb-10 flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-neutral-300 p-1">
          {billingOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setBillingCycle(option.key)}
              className={
                option.key === billingCycle
                  ? 'rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white'
                  : 'rounded-full px-4 py-2 text-sm font-semibold text-neutral-600 hover:text-neutral-950'
              }
            >
              {option.label}
            </button>
          ))}
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {plans.map((plan) => {
          const isSubscription = plan.key === 'development-subscription'
          const price = isSubscription ? selectedBilling.price : plan.price
          const note = isSubscription ? selectedBilling.note : null

          return (
            <FadeIn key={plan.title} className="flex h-full">
              <article className="flex h-full w-full flex-col rounded-3xl p-8 ring-1 ring-neutral-950/10">
                <header>
                  <h2 className="font-display text-2xl font-medium text-neutral-950">
                    {plan.title}
                  </h2>
                  <span className="my-3 block text-2xl font-semibold text-neutral-950">
                    {price}
                  </span>
                  {note && <p className="text-sm text-neutral-600">{note}</p>}
                  <p className="mt-2 text-sm text-neutral-600">Best fit: {plan.target}</p>
                  <p className="mt-4 text-base text-neutral-600">{plan.description}</p>
                </header>

                <div className="mt-6 space-y-4">
                  <hr className="border-dashed border-neutral-300" />
                  <h3 className="text-sm font-semibold text-neutral-950">
                    What&apos;s included:
                  </h3>
                  <ul role="list" className="space-y-3 text-sm text-neutral-700">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-x-2">
                        <svg
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 flex-none fill-neutral-950"
                        >
                          <path d="M13.78 3.22a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 1.06-1.06l2.97 2.97 6.47-6.47a.75.75 0 0 1 1.06 0Z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 mt-auto">
                  <Button href={plan.buttonHref} className="w-full justify-center">
                    {plan.buttonLabel}
                  </Button>
                </div>
              </article>
            </FadeIn>
          )
        })}
      </FadeInStagger>
    </Container>
  )
}
