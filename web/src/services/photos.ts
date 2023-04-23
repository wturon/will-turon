import { contentfulClient } from './utils'

// Retrieve the list of blog posts from Contentful
export const getGalleryPhotos = async () => {
  const response = await contentfulClient.getEntries({
    content_type: 'photo',
  })

  return response.items
}
