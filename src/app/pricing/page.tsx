import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SubscriptionPricingCards } from '@/components/SubscriptionPricingCards'
import { createMetadata } from '@/lib/seo'

const faqs = [
  {
    question: 'How do I know which offer is right for me?',
    answer:
      'If you are an agency that needs extra delivery capacity, the Agency Overflow Offer is the best fit. If you are a founder getting ready to launch, choose the Startup Launch Offer. If your site gets traffic but does not convert well, the Conversion Refresh Offer is usually the right place to start.',
  },
  {
    question: 'Do I need a full redesign or just development support?',
    answer:
      'Not always. Some teams need clearer messaging and better page structure more than they need more code. We scope the problem first so you are paying for the shortest path to the result.',
  },
  {
    question: 'Who will I actually be working with?',
    answer:
      "You'll work directly with me, Connor—the founder of Connor & Co. As a Computer Science student at Ohio State and an indie-founder, I treat your codebase with the exact same care and precision as I do my own custom projects. No outsourcing, no junior devs.",
  },
  {
    question: 'What does ongoing support look like after launch?',
    answer:
      'If you need ongoing help after the initial project, Ongoing Partner Support gives you a simple monthly option for updates, improvements, and overflow work. It works well for growing teams and follow-up work that does not justify a full-time hire.',
  },
]

const minimumEngagementPolicy = [
  'Minimum project size: $1,000',
  'No hourly work offered',
  'Minimum subscription: $1,000 per month',
  'All projects require 50% deposit to begin',
]

const addOnServices = [
  'Performance optimization: $500 - $1,500',
  'Advanced animations: $500 - $2,000',
  'Custom admin dashboard: Starting at $1,500',
  'Payment integration (Stripe): $500 - $1,000',
  'Technical documentation: $500+',
  'Expedited timeline: +20% of total project cost',
]

const notIncluded = [
  'Third-party subscription fees',
  'Ongoing hosting costs',
  'Mobile app development',
  '24/7 support',
  'Large-scale backend rebuilds under subscription',
]

const paymentStructure = [
  '50% deposit required to begin',
  '50% due upon completion',
  'Subscriptions billed monthly in advance',
]

export const metadata = createMetadata({
  title: 'Services & Pricing',
  description:
    'Clear offers and transparent pricing for agency overflow support, startup launches, conversion-focused redesigns, and ongoing development help.',
  path: '/pricing',
})

export default function PricingPage() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Services & Pricing"
        title="Choose the offer that matches the problem."
      >
        <p>
          Clear starting points, clear scope, and predictable delivery for
          agency overflow work, founder launches, homepage refreshes, and
          ongoing support after launch.
        </p>
      </PageIntro>

      <SubscriptionPricingCards />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="rounded-3xl p-8 ring-1 ring-neutral-950/10">
            <h2 className="font-display text-2xl font-medium text-neutral-950">
              Engagement Basics
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {minimumEngagementPolicy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="rounded-3xl p-8 ring-1 ring-neutral-950/10">
            <h2 className="font-display text-2xl font-medium text-neutral-950">
              Common Add-Ons
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {addOnServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="rounded-3xl p-8 ring-1 ring-neutral-950/10">
            <h2 className="font-display text-2xl font-medium text-neutral-950">
              Payment Structure
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {paymentStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-neutral-950">Not Included</h3>
            <ul className="mt-3 space-y-3 text-sm text-neutral-700">
              {notIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="rounded-4xl bg-neutral-950 px-8 py-16 sm:px-12 sm:py-20">
          <h2 className="font-display text-3xl font-medium tracking-tight text-balance text-white sm:text-4xl">
            Need overflow capacity without adding headcount?
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-neutral-300">
            The Agency Overflow Offer is for creative teams that need reliable
            white-label Webflow or Next.js production. You manage the client.
            I handle the build work.
          </p>
          <div className="mt-8">
            <Button href="/contact" invert>
              Ask about overflow support
            </Button>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-4xl font-medium tracking-tight text-balance text-neutral-950 sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FadeIn key={faq.question}>
              <article className="rounded-3xl p-8 ring-1 ring-neutral-950/10">
                <h3 className="font-display text-2xl font-semibold text-neutral-950">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base text-neutral-600">{faq.answer}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="mt-24 mb-24 sm:mt-32 sm:mb-32 lg:mt-40 lg:mb-40">
        <FadeIn className="rounded-4xl bg-neutral-950 px-8 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-balance text-white sm:text-5xl">
            Ready to pick the right offer and move?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" invert>
              Start the conversation
            </Button>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
