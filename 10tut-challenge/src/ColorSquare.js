import React from 'react'

const ColorSquare = ({ colorValue }) => {
    return (
        <section
            className='colorSquare'
            style={{ backgroundColor: colorValue }}
        >
            <p>{colorValue ? colorValue : "Empty value"}</p>
        </section>
    )
}

ColorSquare.defaultProps = {
    colorValue: "Empty Color Value"
}

export default ColorSquare