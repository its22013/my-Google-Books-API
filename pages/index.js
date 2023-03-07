import { useState } from 'react'
import styles from '../styles/search.module.css'
import Image from 'next/image'

function Home () {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState([])

  const searchBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBQgDzqa_Sx6WljANG9wYHFR2-KUZrmDAM`
    )
    const data = await res.json()
    setBooks(data.items || [])
  }
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.container}>
          <h1>本を検索するAPI</h1>
          <h2>by(shuya)</h2>
        </div>
      </div>
      <div className={styles.searchform}>
        <div className={styles.container}>
          <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
          <button onClick={searchBooks}>Search</button>
        </div>
      </div>
      {books.map((book) => (
        <div key={book.id}>
          <div className={styles.container}>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors?.join(', ')}</p>
          </div>
          <p>{book.volumeInfo.description}</p>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt='' />
        </div>
      ))}
      <div>
        <Image
          src='/images/lakaeslogo.jpg'
          alt='My Image3'
          layout='responsive'
          width={100} height={100}
          style={{ display: 'block', margin: 'auto' }}
        />
      </div>
    </div>
  )
}
export default Home
