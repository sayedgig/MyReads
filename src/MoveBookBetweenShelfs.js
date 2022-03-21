import React,{useState} from 'react'

const MoveBookBetweenShelfs = ({mybook,updateBooks}) => {
  const changeValue = (e) => {
    e.preventDefault();
    const selectedValue = e.target.value
    // console.log(selectedValue)
    // console.log( mybook)
    mybook.shelf=selectedValue
     updateBooks(mybook)
     
    
   
 }

 const shelfTypes =  [
  { value: " Currently Reading ", key: "currentlyReading" },
  { value: " Want To Read ", key: "wantToRead" },
  { value: " Read ", key: "read" },
] 
 
  return (
    <div className="book-shelf-changer">
            <select onChange={changeValue} >
            <option value="move" disabled>Move to...</option>
            {shelfTypes.map(type => {
              // console.log(mybook.shelf)
              //console.log(type.key)
              if (mybook.shelf==type.key) {
                return (
                  <option value={type.key} selected >{type.value}</option>
                )
              }else{
                return (
                  <option value={type.key}  >{type.value}</option>
                )
              }
            
          }) }
        

            {/* <option value="currentlyReading"  >Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option> */}
            <option value="none">None</option>
            </select>
   </div>
  )
}

export default MoveBookBetweenShelfs