import React from 'react'
import AddBookToShelf from './AddBookToShelf';

const BookCard = ({ book,  addToBooks}) => {
  
    return (
            <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" 
                               style={{ width: 128, height: 193
                               , backgroundImage: `url(${ book.imageLinks ? book.imageLinks.thumbnail: "icons/book-placeholder.svg" })`,
                               }}>
                                
                    </div>
                    <AddBookToShelf book={book} addToBooks ={addToBooks}/>


                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )};
        

export default BookCard