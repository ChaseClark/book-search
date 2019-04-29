import React from 'react'

const Form = props => {
    return (
    <form className="" onSubmit={props.getBook}>
        <input className="" name="query" type="text"/>
        <button type="submit" className="">Search</button>
    </form>
    )
}

export default Form