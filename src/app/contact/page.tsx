import Link from 'next/link'

import { Border } from '@/components/Border'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'
import { createMetadata } from '@/lib/seo'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        We operate asynchronously to partner with fast-moving startups and
        agencies worldwide. However, if you&apos;re in the Columbus area, we&apos;re
        always happy to grab a coffee and talk tech.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Direct Inquiries', 'connor@connorco.dev'],
            ['Agency Partnerships', 'connor@connorco.dev'],
          ].map(([label, email]) => (
            <div key={`${label}-${email}`}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = createMetadata({
  title: 'Contact Us',
  description:
    'Share whether you need agency overflow support, a startup launch, or a conversion-focused redesign. We will reply within 24 hours.',
  path: '/contact',
})

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact us" title="Tell me which offer fits your situation.">
        <p>
          Tell me whether you need agency overflow support, a startup launch,
          a conversion refresh, or ongoing help after launch. I&apos;ll reply
          within 24 hours with the best next step.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
