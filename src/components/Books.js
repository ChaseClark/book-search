import React from 'react';

const Books = props => (
  <div className="container">
    <div className="row">
      { props.books.map((book) => {
        return (
          // lets make this a bootstrap card
          <div key={book.id} className="col-md-4">
            <h3>{book.volumeInfo.title}</h3>
          </div>
        )
      })
      }
    </div>
  </div>  
)
export default Books