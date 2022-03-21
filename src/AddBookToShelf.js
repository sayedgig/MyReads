import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AddBookToShelf = ({book,addToBooks}) => {
  const push = useNavigate();
    const changeValue = (e) => {
       e.preventDefault();
       const selectedValue = e.target.value
       console.log(selectedValue)
       if (selectedValue !=="none")
       {
        book.shelf=selectedValue
        addToBooks(book)
        push("/books");
       }
      
    }

  return (
    <div className="book-shelf-changer">
            <select onChange={changeValue} >
            <option value="move" disabled>add to shelf...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none"  selected>None</option>
            </select>
     </div>


  )
}

export default AddBookToShelf