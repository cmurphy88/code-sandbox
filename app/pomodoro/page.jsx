'use client'

import { useState, useEffect } from 'react'

const PomodoroPage = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [duration, setDuration] = useState(25)
  const [time, setTime] = useState(25 * 60)

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const playAlarm = () => {
    const ctx = new AudioContext()
    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()
    oscillator.connect(gain)
    gain.connect(ctx.destination)
    oscillator.frequency.value = 880
    gain.gain.setValueAtTime(1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5)
    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 1.5)
  }

  const handleDurationChange = (e) => {
    const mins = Math.max(1, Number(e.target.value))
    setDuration(mins)
    setTime(mins * 60)
  }

  const handleRestart = () => {
    setIsRunning(false)
    setTime(duration * 60)
  }

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearInterval(interval)
          setIsRunning(false)
          playAlarm()
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className="flex min-h-screen pt-20 justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold mb-4">Pomodoro Page</h1>
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2 text-xl">
            <label>Minutes:</label>
            <input
              type="number"
              min={1}
              value={duration}
              onChange={handleDurationChange}
              disabled={isRunning}
              className="w-20 rounded border px-2 py-1 text-center dark:bg-zinc-800 dark:border-zinc-600 disabled:opacity-50"
            />
          </div>
          <div className="text-8xl">{`${Math.floor(time / 60)
            .toString()
            .padStart(2, '0')}:${(time % 60)
            .toString()
            .padStart(2, '0')}`}</div>
          <div className="flex gap-2 pt-5">
            <button
              className="bg-green-500 rounded py-1 px-3 text-2xl hover:bg-green-400"
              onClick={handleStart}
            >
              Start
            </button>
            <button
              className="bg-yellow-500 rounded py-1 px-3 text-2xl hover:bg-yellow-400"
              onClick={handlePause}
            >
              Pause
            </button>
            <button
              className="bg-red-500 rounded py-1 px-3 text-2xl hover:bg-red-400"
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PomodoroPage
