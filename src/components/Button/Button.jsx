import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'
const Button = ({types, text, clickHandler}) => {
    return (
        <button className= {types} onClick={() =>{
            
            clickHandler(text)
        }}>
            <span> { text } </span>
        </button>
    )
}

Button.propTypes = {
    types: PropTypes.string,
    text: PropTypes.string.isRequired, 
    clickHandler: PropTypes.func.isRequired
}
export default Button