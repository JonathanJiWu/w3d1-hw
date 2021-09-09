import React from 'react'

const Bath = (props) => {
    return (
        <div className='both' id={`bath-${props.size}`}>
            <h3>Bath {props.size}</h3>
        </div>
    )
}

export default Bath
