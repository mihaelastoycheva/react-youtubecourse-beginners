import React from 'react'
import colorNames from 'colornames';

const AddColorName = ({ colorValue, setColorValue, setHexValue }) => {
    return (
        <form
            className='addColorName'
            onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
                id='addColorName'
                type='text'
                placeholder='Add color name'
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
        </form>
    )
}

export default AddColorName