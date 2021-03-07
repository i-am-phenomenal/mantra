import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import React from "react";
import axios from 'axios'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect 
} from "react-router-dom";
import BooksList from "./Components/List";
import BookDialog from "./Components/BookDialog";

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      baseUrl:  "http://18.179.108.80:8080/",
      books: [],
      isBookModalOpen: false,
      currentBookId: -1
    }
  }

  updateStateforBooks = (books) => {
    this.setState({books: books});
  }

  getBooks = () => {
    axios.get(this.state.baseUrl + "books/")
    .then((response) => {this.updateStateforBooks(response.data)})
    .catch((error) => alert(error))
  }

  openBookModal = (event, book) => {
    event.preventDefault();
    this.setState({isBookModalOpen: true, currentBookId: book.id});
  }

  componentDidMount() {
    {this.getBooks()}
  }

  updateDialogState = (state) => {
    this.setState({isBookModalOpen: state})
  }

  renderFullScreenDialog = () => {
    if (this.state.isBookModalOpen) {
      return <BookDialog  open = {true} setOpen = {this.updateDialogState} bookId = {this.state.currentBookId} />
    } else {
      return ""
    }
  }

  render() {
    return (
      <div> 
        {this.renderFullScreenDialog()}
        <BooksList books = {this.state.books} onClickHandler= {this.openBookModal} /> 
      </div>
      ) 
  }

}
export default App;
