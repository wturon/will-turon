import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex items-center gap-8">
        <Image className="rounded-2xl	" src="/me.jpg" alt="Will" width={200} height={200} />
        <h1 className="text-5xl font-bold text-white">Hi, I'm Will! 👋🏻</h1>
      </div>
    </div>
  )
}
