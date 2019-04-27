import React, { Component } from 'react';
import Form from './components/Form';
import Books from './components/Books'
import './App.css'

class App extends Component {
  state = {
    books: [],
  }

  getBook = async (e) => {
    const query = e.target.elements.query.value
    console.log(query)
    e.preventDefault()
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`) // can modify number of results by adding &maxResults=5
    const data = await api_call.json()
    this.setState({
      books: data.items
    })
    console.log(this.state.books)
  }

  render () {
    return (
      <div className="container">
        <Form getBook={this.getBook}/>
        <Books books={this.state.books} />
      </div>
      
    )
  }
}

export default App
