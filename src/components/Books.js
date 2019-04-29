import React from 'react';

const Books = props => (
  <div>
    <div className="">
      { props.books.map((book) => {
        return (
          <div key={book.id} className="">
            <div className="" style={{maxWidth: '150px',}}>
              <div className="" style={{padding: 0,}}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="card-img-top"/>
                <h5 className="">{book.volumeInfo.title}</h5>
                <a href="#" className="">See More</a>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  </div>  
)
export default Books