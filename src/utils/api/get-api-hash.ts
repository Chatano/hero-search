import md5 from 'md5'

const publicApiKey = process.env.API_PUBLIC_KEY
const privateApiKey = process.env.API_PRIVATE_KEY

export const getApiHash = () => {
  const timeStamp = new Date().getTime()

  if (!publicApiKey || !privateApiKey) {
    throw new Error(
      'Public or Private API key is missing in environment variables.',
    )
  }

  const hash = md5(timeStamp + privateApiKey + publicApiKey)

  return { hash, timeStamp, publicApiKey }
}
