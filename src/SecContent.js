import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const SecContent = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "Thats first item"
        },
        {
            id: 2,
            checked: false,
            item: "Thats second item"
        },
        {
            id: 3,
            checked: false,
            item: "Thats third item"
        }

    ])

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item,
            checked: !item.checked
        } : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

    return (
        <main>
            {items.length ? (
                <ul>
                    {/* Iterate throught each item */}
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{marginTop:'2rem'}}>Your list is empty.</p>
            )}
        </main>
    )
}

export default SecContent