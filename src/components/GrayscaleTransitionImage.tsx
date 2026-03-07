'use client'

import { useRef } from 'react'
import Image, { type ImageProps } from 'next/image'
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion'

const MotionImage = motion(Image)

export function GrayscaleTransitionImage(
  props: Pick<
    ImageProps,
    'src' | 'quality' | 'className' | 'sizes' | 'priority'
  > & { alt?: string },
) {
  let { alt = '', ...imageProps } = props
  let ref = useRef<React.ElementRef<'div'>>(null)
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%'],
  })
  let grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1])
  let filter = useMotionTemplate`grayscale(${grayscale})`

  return (
    <div ref={ref} className="relative">
      <MotionImage alt={alt} style={{ filter } as any} {...imageProps} />
    </div>
  )
}
