import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Head>
        <title>Will's personal website</title>
        <meta name="Welcome to Will's personal website" key="desc" />
      </Head>
      <div className="flex items-center gap-8">
        <Image className="rounded-2xl	" src="/me.png" alt="Will" width={200} height={200} />
        <h1 className="text-5xl font-bold text-white">Hi, I'm Will! 👋🏻</h1>
      </div>
    </div>
  )
}
