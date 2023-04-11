import React, { useEffect, useRef, useState } from 'react'
import { Item } from './Item'

export const Items = ({ points, setPoints }) => {
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const itemsRef = useRef([])
    const amount = 7 * 7;

    useEffect(() => {
        setItems(generateItems(amount));
    }, [selectedItems])

    useEffect(() => {
        itemsRef.current = items;
    }, [items])

    // Generate list of items based on the amount 
    const generateItems = (amount) => {
        const itemsNumber = Array.apply(0, Array(amount));

        const itemsList = itemsNumber.map((item, i) =>
            <Item key={i} selectedItems={selectedItems} setSelectedItems={setSelectedItems} validateSelection={validateSelection} keyProp={i} />
        );

        return itemsList;
    }

    // Validate items selected to be matched
    const validateSelection = () => {
        // Validate all items have the same color and type, these are set in the data attributes
        const validateType = selectedItems.every(item => item.getAttribute('data-type') === selectedItems[0].getAttribute('data-type'));
        const validateColor = selectedItems.every(item => item.getAttribute('data-color') === selectedItems[0].getAttribute('data-color'));

        // Validate results and if more than 2 items were selected
        if (validateType && validateColor && selectedItems.length > 2) {
            setPoints(points + selectedItems.length);

            // Compare between the itemsRef (all items shown on screen) and the selected ones from selectedItems and filter by its ids the ones that were selected
            const filteredElements = itemsRef.current.filter((item) => !selectedItems.map(item => item.getAttribute('data-key')).includes(item.key));

            setItems(filteredElements);
        }

        setSelectedItems([]);
    }

    // Set grid for the items based on the amount it's set
    const itemsGrid = {
        gridTemplateColumns: `repeat(${Math.sqrt(amount)}, 1fr)`,
        gridTemplateRows: `repeat(${Math.sqrt(amount)}, 1fr)`
    };

    return (
        <div className='items' style={itemsGrid}>
            {items}
        </div>
    )
}
