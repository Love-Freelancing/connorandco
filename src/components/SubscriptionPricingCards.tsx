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
    price: '$2,500 / mo',
    note: 'Pause or cancel anytime',
  },
  {
    key: 'quarterly',
    label: 'Quarterly',
    price: '$6,750 / quarter',
    note: 'Save 10%',
  },
  {
    key: 'yearly',
    label: 'Yearly (Save 15%)',
    price: '$25,000 / year',
    note: 'Get 2 months free',
  },
]

const plans = [
  {
    key: 'marketing-website',
    target: 'Local SMBs and Startup Marketing Sites',
    price: 'Starting at $3,000',
    title: 'Marketing Website',
    description:
      'A high-converting, lightning-fast website designed to turn visitors into customers.',
    includes: [
      'Custom UI/UX Design (Figma)',
      'Webflow Development & Animations',
      'Responsive across all devices',
      'CMS Setup (for blogs/case studies)',
      'Basic SEO Optimization',
      'Delivered in 2-3 weeks',
    ],
    buttonLabel: 'Start a Sprint',
    buttonHref: '/contact',
  },
  {
    key: 'dedicated-partner',
    target: 'Fast-moving startups and agencies',
    title: 'Dedicated Partner',
    description:
      'Your fractional design and development department. Pause or cancel anytime.',
    includes: [
      'Unlimited task requests',
      'One active task at a time',
      'Figma, Webflow, & Next.js support',
      'Unlimited revisions',
      'Average 48-72 hour delivery',
      'No lock-in contracts',
    ],
    buttonLabel: 'Subscribe Now',
    buttonHref: '/contact',
  },
  {
    key: 'custom-web-app',
    target: 'Funded startups and SaaS founders',
    price: 'Starting at $8,000',
    title: 'Custom Web App',
    description:
      'A powerful, scalable web application engineered with modern frameworks.',
    includes: [
      'Complex frontend UI/UX (Figma)',
      'Next.js & React Development',
      'Database Integration (Prisma/Supabase)',
      'User Authentication',
      'API integrations',
      'Delivered in 4-8 weeks',
    ],
    buttonLabel: 'Discuss your app',
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
      <FadeIn className="flex justify-center">
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

      <FadeInStagger className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {plans.map((plan) => {
          const isSubscription = plan.key === 'dedicated-partner'
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
                  <p className="mt-2 text-sm text-neutral-600">Target: {plan.target}</p>
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
