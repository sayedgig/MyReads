import React , {useState} from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import NoPage from './NoPage'
import AddBook from './AddBook'

   /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

const App = () => {
    const [books, setBooks] = useState([]);


  const addToBooks = (book) => {
      const newBooks = [...books,  book];
      setBooks(newBooks);
  };

  const updateBooks = (book) => {
   
    let difference =  books
        .filter(object1 => { 
            return object1.id !== book.id;
        });
        const newBooks = [...difference,  book];
        setBooks(newBooks);

 };


  return (
    <BrowserRouter>
     {/* <div className="app"> */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="books" element={<ListBooks books={books} updateBooks={updateBooks}  />} />
                    <Route path="search"  element={<AddBook books ={books} addToBooks ={addToBooks} />} /> 
                    <Route path="*" element={<NoPage />} />
                </Route>
               
            </Routes>
    {/* </div> */}
</BrowserRouter>
  )
}

export default App

const Layout = () => {
    return (
      <React.Fragment>


        <nav className ="navbar">
          <ul >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="books">List of books</Link>
            </li>
            <li>
              <Link to="search">Add a book</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </React.Fragment>
    )
  };

  const Home = () => {
    return <div className="list-books-title">
      <h1 >the final assessment project for Udacity's React Fundamentals course.</h1>
      </div>;
  };