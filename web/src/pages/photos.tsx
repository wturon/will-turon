import { getGalleryPhotos } from '@/services/photos'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'

type Props = {
  text: string
}
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await getGalleryPhotos()
  console.log('RES', res[0].fields)

  return {
    props: { photos: res },
  }
}
export default function Home(props: any) {
  console.log('PROPS', props)

  return (
    <div className="flex h-full flex-col items-center justify-center">
      {props.photos.map((photo: any) => (
        <Image
          src={'https:' + photo.fields.photo.fields.file.url}
          height={photo.fields.photo.fields.file.details.image.height}
          width={photo.fields.photo.fields.file.details.image.width}
          alt={photo.fields.photo.fields.file.fileName}
        />
      ))}
    </div>
  )
}
