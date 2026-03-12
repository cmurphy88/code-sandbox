import LinkButton from '@/components/LinkButton'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center">
          <p className="text-3xl pb-5 font-serif">Quick Links</p>
          <LinkButton href={'/pomodoro'} title={'Pomodoro Timer'} />
          <LinkButton href={'/todist'} title={'Todoist'} />
        </div>
      </main>
    </div>
  )
}
