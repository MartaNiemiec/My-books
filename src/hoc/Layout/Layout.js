import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';  
import Toolbar from "../../components/Toolbar/Toolbar";
import Sidebar from '../../components/Sidebar/Sidebar';
import Books from '../../components/Books/Books';
import request from 'superagent';
// import Backdrop from '../../components/UI/Backdrop/Backdrop';
import BookModal from '../../components/Books/BookList/Book/BookModal/BookModal';


// =========== INITIAL STATE ===========
const initialState = {
  searchfield: '',
  booksData: [],
  isLoading: false,
  initialPage: true,
  openBookModal:true,
  bookModalData: [],
  user: {
    name:'',
    email: '',
    password: '',
    joined: '',
    readBooks: [],
    wishlist: [],
    favourites: []
  }
}

class Layout extends Component {

// =========== STATE ===========
  state = initialState;


// =========== Search Change Handler ===========
  searchChangeHandler = (event) => {
    this.setState({searchfield: event.target.value});
    ;
  }


// =========== Open Modal Handler ===========
  openModalHandler = (bookData, fullAuthors) => {
    this.setState({ openBookModal: true, 
                    bookModalData: [bookData, fullAuthors] });
  }

  
// =========== Close Modal Handler ===========
  closeModalHandler = () => {
    this.setState({ openBookModal: false, 
                    bookModalData: [] });
  }


// =========== Search Book ===========
  searchBook = (event) => {
    event.preventDefault();

    if (this.state.searchfield === '') {
      this.setState({
        isLoading: false,
        initialPage: true})
    } else {
      this.setState({
        isLoading: true,
        initialPage: false})
      request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ 
          q: this.state.searchfield,
          maxResults: 40 })
        .then(data => {        
          this.setState({
            booksData: data.body.items,
            isLoading: false})
          console.log(this.state.booksData);
        })
    } 
  }

// =========== Check if the book is in the user state.(readBooks/wishlist/favourites) ===========
  isInUserState = (bookId, bookList) => this.state.user[bookList].some(book => book.id === bookId);
  

// =========== Toggle Book's icons and user's state ===========
  toggleBookHandler = (bookId, bookList) => { // bookLists-> readBooks/wishlist/favourites
    // create a copy of the user state as user
    const user = {...this.state.user};
  // 1. check if the book is in the user's state
    let isInState = this.isInUserState(bookId, bookList);
  // 2. if it isn't - add the book
    if (isInState === false) {
      this.setState(state => {
        // book info
          const book = state.booksData.filter(book => book.id === bookId)[0];
        // adding a book to the userBookList array (eg. state.user.wishlist)
          const userBookList = [book].concat(state.user[bookList]);
        // setting the updated userBookList array to the user[bookList] 
          user[bookList] = userBookList;
          return {
            user
          }
        })
  // 3. if it is then remove the book
    } else {
      this.setState(state => {
      // create an array without selected book
        const userBookList = state.user[bookList].filter(book =>
          book.id !== bookId)
      // setting the updated userBookList array to the user[bookList] 
        user[bookList] = userBookList;
        return {
          user
        }
      })
    }
  }


// =========== RENDER ===========
  render() {
    const main = {
      display:'flex'
    }

    let modall = this.state.bookModalData.length === 0  
    ? null 
    : <BookModal show={this.state.openBookModal} 
              modalClosed={this.closeModalHandler}
              book={this.state.bookModalData[0]}
              fullAuthors={this.state.bookModalData[1]}>
              </BookModal>;

    return (
      <Auxiliary>
        {modall}
        <Toolbar />
        <main style={ main }>
          <Sidebar/>
          <Books 
            changed={this.searchChangeHandler}
            searchfield={this.state.searchfield}
            searchBook={this.searchBook}
            booksData={this.state.booksData}
            isLoading={this.state.isLoading}
            isInitial={this.state.initialPage}
            isInUserState={this.isInUserState}
            toggleBookHandler={this.toggleBookHandler}
            userReadBooks={this.state.user.readBooks}
            userWishlist={this.state.user.wishlist}
            userFavourites={this.state.user.favourites}
            openModalHandler={this.openModalHandler}/>
        </main>
      </Auxiliary>
    );
  }
}

export default Layout;

// fetch('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=paid-ebooks')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });