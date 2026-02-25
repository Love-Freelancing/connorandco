import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      {/* 
        This rect drives the signature "Studio" fill animation.
        It wipes the color from left to right on hover.
      */}
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      
      {/* The outline of the logomark */}
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      
      <defs>
        {/* 
          The Custom "C & /" Monogram 
          Part 1: The Crescent 'C' (M 12 6...)
          Part 2: The Forward Slash (M 24 6...)
        */}
        <path
          id={`${id}-path`}
          d="M 12 6 A 10 10 0 0 0 12 26 H 16 A 6 6 0 0 1 16 6 Z M 24 6 H 28 L 20 26 H 16 Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 230 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="42"
        y="24"
        fontFamily="sans-serif"
        fontWeight="600"
        fontSize="24"
        letterSpacing="-0.02em"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
      >
        Connor &amp; Co.
      </text>
    </svg>
  )
}