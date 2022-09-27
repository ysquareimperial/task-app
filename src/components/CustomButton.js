import React from 'react'
import { Spinner } from 'reactstrap'

function CustomButton(props) {
    return (
        <button className='action_button mt-3' {...props} disabled={props.loading}>{props.loading ? <Spinner size={'sm'} /> : props.buttonText} {props.children}</button>
    )
}

export default CustomButton
