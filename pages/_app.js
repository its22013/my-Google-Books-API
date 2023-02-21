import '@/styles/globals.css'

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export async function getBooks (query) {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY}`
  )
  const data = await response.json()
  return data
}
