import React from 'react';
import './Books.sass'

const Books = props => (
  <div>
    <div className="books-container">
      { props.books.map((book) => {
        return (
          <div key={book.id} className="preview-card">
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                <a href="#">See More</a>
          </div>
        )
      })
      }
    </div>
  </div>  
)
export default Books