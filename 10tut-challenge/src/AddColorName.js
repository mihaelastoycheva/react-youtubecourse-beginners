import React from 'react'

const AddColorName = ({ colorValue, setColorValue }) => {
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
                onChange={(e) => setColorValue(e.target.value)}
            />
        </form>
    )
}

export default AddColorName