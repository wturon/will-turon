import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Head>
        <title>Will's personal website</title>
        <meta name="Welcome to Will's personal website" key="desc" />
      </Head>
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-white">About</h1>
        <h1 className="text-5xl font-bold text-white">Work</h1>
        <h1 className="text-5xl font-bold text-white" onClick={() => router.push('/photos')}>
          Photos
        </h1>
      </div>
    </div>
  )
}
