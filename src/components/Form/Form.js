import React from 'react'
import './Form.sass'

const Form = props => {
    return (
    <form onSubmit={props.getBook}>
        <input name="query" type="text"/>
        <button type="submit">Search</button>
    </form>
    )
}

export default Form