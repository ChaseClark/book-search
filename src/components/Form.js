import React from 'react'

const Form = props => {
    return (
    <form className="form-inline justify-content-center mt-3" onSubmit={props.getBook}>
        <input className="form-control mr-3" name="query" type="text"/>
        <button type="submit" className="btn btn-primary">Search</button>
    </form>
    )
}

export default Form