import axios from "axios";
import { useEffect, useState } from "react";

interface BookAttributes {
  id: number;
  title: string;
  descripton: string;
  slug: string;
}
const Home = () => {
  const [books, setBooks] = useState<BookAttributes[]>([]);
  console.log(books);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {books?.map((book) => {
        return <div key={book.slug}>{book.title}</div>;
      })}
    </div>
  );
};

export default Home;
