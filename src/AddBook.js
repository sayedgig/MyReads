import React , {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import BookCard from './BookCard';
import * as BooksAPI from './BooksAPI'


const AddBook = ({books , addToBooks} ) => {


  const saved = localStorage.getItem("query");
  const initialValue=  saved || "react";


  const push = useNavigate();
  const [query, setQuery] = useState(initialValue);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await BooksAPI.search(query.length>0 ? query : '*');
       if (Array.isArray(result) ) {
        let difference =  result
        .filter(object1 => { return !books.some(object2 => {
            return object1.id === object2.id;
          });
        });
        setData(difference);
       }
       
      console.log(books);
        
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [query]);

const handleChange = (event) => {
  setQuery(event.target.value)
  localStorage.setItem("query", event.target.value)
    
    }
  
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <a className="close-search" onClick={() => push('/books')}>Close</a>
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input 
        type="text" 
        placeholder="Search by title or author"
        value={query}
        onChange={handleChange}
        />
      </div>
    </div>
    <div className="search-books-results">
     

      { isError ? 
            (<div>Something went wrong ...</div>) 
            : 
                 isLoading ? 
                    (<div><h1>Loading ...</h1></div>) 
                    : Array.isArray(data) ? 
                    (
                    <ol className="books-grid">
                         
                          {data.map((book) => (
                                <BookCard book={book}  addToBooks={addToBooks} />
                          ))}
                        
                      </ol>) 
                     : (<div className="noData"><h1>No Data is availlable</h1></div>)
                    }
    </div>
  </div>
  )
}

export default AddBook