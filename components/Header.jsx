'use client'

import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex pt-10 justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-row items-center gap-5">
        <Link className="text-2xl pb-5" href={'/'}>
          Code Sandbox
        </Link>
        <Link className="text-2xl pb-5" href={'/pomodoro'}>
          Pomodoro
        </Link>
      </div>
    </div>
  )
}

export default Header
