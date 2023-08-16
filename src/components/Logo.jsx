import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import logo from '@/images/crf/logo.png'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <div></div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <Image src={logo} height={70} width={70} />)
}
