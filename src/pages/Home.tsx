import axios from 'axios'
import { useEffect, useState } from 'react'

interface AuthorAttributes {
  name: string
  bio: string
  birthday: string
}
interface BookAttributes {
  id: number
  title: string
  descripton: string
  slug: string
  Authors: AuthorAttributes[]
}
const Home = () => {
  const [books, setBooks] = useState<BookAttributes[]>([])
  console.log(books)

  useEffect(() => {
    axios
      .get('http://localhost:3000/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <div className="grid grid-cols-5 w-full mt- border">
        {books?.map((book) => {
          return (
            <div
              key={book.slug}
              className={`border-r border-b mx-auto px-5 h-52 w-full`}
            >
              <div>Title: {book.title}</div>
              <div>Author: {book.Authors[0]?.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
