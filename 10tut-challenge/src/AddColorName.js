import React from 'react'
import colorNames from 'colornames';

const AddColorName = ({ colorValue, setColorValue, setHexValue,
    isDarkText, setIsDarkText }) => {
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
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle text color
            </button>
        </form>
    )
}

export default AddColorName