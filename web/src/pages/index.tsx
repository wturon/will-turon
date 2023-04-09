import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/me.jpg" alt="Will" width={100} height={100} />
      <h1 className="text-3xl font-bold text-white">Hi, I'm Will! 👋🏻</h1>
    </div>
  )
}
