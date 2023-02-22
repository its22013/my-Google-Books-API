import { useState } from 'react'
import styles from '../styles/search.module.css'

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
      <div className={styles.container}>
        <h1>Google Books API Search</h1>
        <h2>by(shuya)</h2>
      </div>
      <div className={styles.container}>
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={searchBooks}>Search</button>
      </div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
          <p>{book.volumeInfo.description}</p>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt='' />
        </div>
      ))}
    </div>
  )
}
export default Home
