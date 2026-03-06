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
import imageLaptop from '@/images/connorCoding.jpg'
import imageMeeting from '@/images/meeting.png'
import imageWhiteboard from '@/images/strategy.png'
import { RootLayout } from '@/components/RootLayout'
import { createMetadata } from '@/lib/seo'

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
    <Section title="Clarify The Outcome" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Every project starts by defining the result you need. That may be
          extra agency delivery support, a faster launch, or better conversion
          on an important page.
        </p>
        <p>
          From there, we turn the plan into clear messaging, page structure,
          and design direction so the build phase stays focused.
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
    <Section title="Design And Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the direction is approved, we start the build. That may be a
          Webflow marketing site, a Next.js MVP frontend, or a focused
          homepage refresh depending on the scope.
        </p>
        <p>
          You get regular updates, live staging links, and direct
          communication throughout the build. The process stays simple and
          easy to follow.
        </p>
      </div>

      <Blockquote author={{ name: 'Connor', role: 'Founder, Connor & Co.' }} className="mt-12">
        The goal is not to sell you technology for its own sake. The goal is
        to help you launch or improve the right thing.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Launch And Keep Momentum" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Before launch, we test the site to make sure it is fast, accessible,
          and reliable across devices and browsers.
        </p>
        <p>
          After launch, you can take full ownership or continue with ongoing
          support for updates, improvements, and future work.
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
            Strong execution matters. Clean UI, thoughtful hierarchy, and
            polished builds all affect how credible your business feels.
          </GridListItem>
          <GridListItem title="Fast & Focused">
            The process stays lean so you can get to launch or improvement
            faster without unnecessary overhead.
          </GridListItem>
          <GridListItem title="Scalable Solutions">
            The offer stays focused on the result, and the stack follows the
            job. That keeps the solution aligned with your stage and budget.
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

export const metadata = createMetadata({
  title: 'Our Process',
  description:
    'A streamlined, transparent process for agency overflow work, startup launches, and conversion-focused redesigns.',
  path: '/process',
})

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="A process built to reduce buying risk.">
        <p>
          The process is designed to make scope clear, delivery predictable,
          and the final result easy to trust.
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
