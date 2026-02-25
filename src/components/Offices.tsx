import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Your HQ" invert={invert}>
          Columbus
          <br />
          Ohio State University area
          <br />
          EST Timezone
        </Office>
      </li>
      <li>
        <Office name="Your Reach" invert={invert}>
          Remote
          <br />
          Working with startups & agencies
          <br />
          Available worldwide
        </Office>
      </li>
    </ul>
  )
}
