import React, { useState } from 'react'
import { Item } from './Item'

export const Items = ({ points, setPoints }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const itemsNumber = Array.apply(0, Array(36));

    const validateSelection = () => {
        const validateType = selectedItems.every(item => item.getAttribute('data-type') === selectedItems[0].getAttribute('data-type'));
        const validateColor = selectedItems.every(item => item.getAttribute('data-color') === selectedItems[0].getAttribute('data-color'));
        const matchedItems = selectedItems.length;

        if (validateType && validateColor && matchedItems > 2) {
            setPoints(points + matchedItems)
        }

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
