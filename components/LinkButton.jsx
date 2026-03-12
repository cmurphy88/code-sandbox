'use client'

import Link from 'next/link'

const LinkButton = ({ href, title }) => {
  return (
    <Link
      className="text-white text-4xl font-bold py-2 px-4 rounded underline hover:opacity-80 cursor-pointer hover:underline-offset-3"
      href={href}
    >
      {title}
    </Link>
  )
}

export default LinkButton
