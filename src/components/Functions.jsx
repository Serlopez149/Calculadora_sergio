import React from 'react'
import Proptypes from 'prop-types'
import Button from './Button/Button'


const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-log-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
)

Functions.propTypes = {
    onContentClear: Proptypes.func.isRequired, 
    onDelete: Proptypes.func.isRequired
}

export default Functions