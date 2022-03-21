import React  from 'react'
import { useNavigate } from "react-router-dom";
import ShelfCard from './ShelfCard';

const ListBooks = ({books,updateBooks}) => {
  const push = useNavigate();
  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
    <ShelfCard  books={books} updateBooks={updateBooks}/>

    </div>
    <div className="open-search">
      <a onClick={() => push('/search')}>Add a book</a>
    </div>
  </div>

     
  )
}

export default ListBooks