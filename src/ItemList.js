import React from 'react'
import LineItem from './LineItem';

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {/* Iterate throught each item */}
            {items.map((item) => (
                <LineItem
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default ItemList