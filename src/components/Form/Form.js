import React from 'react'
import './Form.sass'

const Form = props => {
    return (
    <form onSubmit={props.getBook}>
        <input autoFocus={true} name="query" type="text"/>
        <button type="submit">Search</button>
    </form>
    )
}

export default Form