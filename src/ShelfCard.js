import React from 'react'
import MoveBookBetweenShelfs from './MoveBookBetweenShelfs'

const ShelfCard = ({books ,updateBooks}) => {
    const shelfTypes =  [
        { value: " Currently Reading ", key: "currentlyReading" },
        { value: " Want To Read ", key: "wantToRead" },
        { value: " Read ", key: "read" },
      ] 

const bookCard = (shelf) => {
    const arrFilter = books.filter(book => book.shelf===shelf)
    if (arrFilter.length  > 0 ){

      return   arrFilter.map( mybook => (
            <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, 
                    
                     backgroundImage: `url(${ mybook.imageLinks ? mybook.imageLinks.thumbnail: "icons/book-placeholder.svg" })`,

                     }}></div>
                 < MoveBookBetweenShelfs mybook={mybook} updateBooks={updateBooks} />
                </div>
                <div className="book-title">{mybook.title}</div>
                <div className="book-authors">{mybook.authors}</div>
            </div>
            </li>
        ))

    }else {
       return (<div> no data is availlable</div>)
    }
}

      
  return (
    <div>
        
            {shelfTypes.map(shelf => (
                <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.value}</h2>
                            <div className="bookshelf-books">
                            <ol className="books-grid">
                                
                               {bookCard(shelf.key)}
                               
                            </ol>
                            </div>
                </div>
            ))}
         
        
    </div>
        
  )
}

export default ShelfCard