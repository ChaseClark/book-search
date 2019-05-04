import React from 'react'
import './Books.sass'
import imgNotFound from './imgNotFound.png'

const Books = props => (
    <div className="books-container">
      { props.books.map((book) => {
        return (
          <div key={book.id} className="preview-card">
                <img src={(typeof book.volumeInfo.imageLinks === 'undefined') ? imgNotFound : book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                <a href={book.volumeInfo.canonicalVolumeLink}>See More</a>
          </div>
        )
      })
      }
    </div>  
)
export default Books