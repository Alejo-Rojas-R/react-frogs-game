import React, { useState } from 'react'
import { Item } from './Item'

export const Items = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const itemsNumber = Array.apply(0, Array(25));

    const validateSelection = () => {
        setSelectedItems([]);
        
    }

    return (
        <div className='items'>
            {itemsNumber.map((item, index) => {
                return <Item key={index} selectedItems={selectedItems} setSelectedItems={setSelectedItems} validateSelection={validateSelection} />
            })
            }
        </div>
    )
}
