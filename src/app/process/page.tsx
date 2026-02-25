import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover & Design" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every successful build starts with a solid foundation. We collaborate
          closely with you to understand your business goals, target audience,
          and technical requirements.
        </p>
        <p>
          Instead of guessing, we translate those insights into high-fidelity
          designs and interactive prototypes using Figma. This ensures we are
          completely aligned on the vision and user experience before a single
          line of code is written.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Technical Scoping</TagListItem>
        <TagListItem>UI/UX Design</TagListItem>
        <TagListItem>Figma Prototypes</TagListItem>
        <TagListItem>Wireframing</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build & Develop" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the designs are approved, we start engineering. For marketing
          websites, we develop lightning-fast, highly animated builds in
          Webflow. For custom web apps and startup MVPs, we write clean,
          scalable code using modern frameworks like Next.js and React.
        </p>
        <p>
          We maintain clear communication throughout the entire build phase.
          You&apos;ll receive regular updates and live staging links, so you can
          watch your digital product come to life in real-time—no black boxes
          or obscured timelines.
        </p>
      </div>

      <Blockquote author={{ name: 'Connor', role: 'Founder, Connor & Co.' }} className="mt-12">
        We operate with complete transparency. You will always know exactly
        where your project stands, from the first design sprint to the final
        deployment.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver & Scale" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we approach the finish line, we conduct rigorous QA testing to
          ensure your site is fast, accessible, and performs beautifully across
          all devices and browsers.
        </p>
        <p>
          We don&apos;t just hand over the keys and disappear. After a successful
          launch, we provide comprehensive training so your team can confidently
          manage the platform. From there, you can take full ownership, or
          transition into one of our dedicated monthly subscriptions for ongoing
          development and feature rollouts.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Rigorous QA testing for performance, accessibility, and responsive
          design across all major devices.
        </ListItem>
        <ListItem title="Infrastructure">
          Optimized hosting setup, secure database configurations, and custom
          domain deployment.
        </ListItem>
        <ListItem title="Support">
          Comprehensive hand-off training and the option for ongoing monthly
          development retainers.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We are committed to building digital products that not only look
          incredible but are engineered to last. These core principles guide
          everything we do at Connor &amp; Co.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Pixel-Perfect">
            We sweat the small stuff. From precise Figma design hand-offs to
            clean, well-documented Next.js code, premium quality is built into
            every layer.
          </GridListItem>
          <GridListItem title="Fast & Focused">
            By utilizing modern tools like Webflow and React, we drastically
            reduce development time and deliver world-class products without
            the traditional agency bloat.
          </GridListItem>
          <GridListItem title="Scalable Solutions">
            We don&apos;t believe in a one-size-fits-all approach. We actively
            choose the right tech stack for your specific business goals and
            current stage of growth.
          </GridListItem>
          <GridListItem title="Transparent">
            No hidden fees, no obscured timelines, and no technical jargon
            designed to confuse you. Just clear, honest communication from day
            one.
          </GridListItem>
          <GridListItem title="True Partners">
            Whether you hire us for a two-week Webflow sprint or a long-term
            development retainer, we treat your business objectives with the
            same care as our own.
          </GridListItem>
          <GridListItem title="Modern Stack">
            The technological landscape moves fast. We stay at the bleeding
            edge of web development so your business benefits from the fastest,
            most secure technology available.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in a streamlined, transparent approach to building digital products from design to deployment.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in a streamlined, transparent approach to building digital
          products. From the initial wireframe to the final deployment, our
          process is designed to move fast without sacrificing quality.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
