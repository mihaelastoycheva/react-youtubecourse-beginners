import React from 'react'

const ColorSquare = ({ colorValue, hexValue, isDarkText }) => {
    return (
        <section
            className='colorSquare'
            style={{ 
                backgroundColor: colorValue,
                color: isDarkText ? "#000" : "FFF"
            }}
        >
            <p>{colorValue ? colorValue : "Empty value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

ColorSquare.defaultProps = {
    colorValue: "Empty Color Value"
}

export default ColorSquare