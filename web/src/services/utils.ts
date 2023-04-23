import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: 'swtpemz4dism',
  accessToken: process.env.CONTENTFUL_API_KEY ?? '',
})
