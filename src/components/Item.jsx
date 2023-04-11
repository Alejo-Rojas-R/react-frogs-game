import React, { useEffect, useId, useState } from 'react'
import { Images } from '../helpers/AssetsController'

// Lilypad single item
export const Item = ({ selectedItems, setSelectedItems, validateSelection, keyProp }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [rotation, setRotation] = useState({});
  const [elementType, setElementType] = useState({});

  const id = useId();

  useEffect(() => {
    setItemType();
  }, [])

  useEffect(() => {
    giveSelectedClass();
  }, [validateSelection])

  // Validate selection CSS class to set the setSelectedClass hook
  const giveSelectedClass = () => {
    setSelectedClass(selectedItems.some(item => item.id === id) ? ' item--selected' : '');
  }

  const selectingItems = (e) => {
    const selectedItem = e.target.parentNode;
    const currentItems = selectedItems;

    // Validate if item has already been selected
    if (!currentItems.includes(selectedItem)) {
      currentItems.push(selectedItem)

      setSelectedItems(currentItems);
      giveSelectedClass();
    }
  };

  const setItemType = () => {
    const validImages = ['frog', /*'dragonfly',*/ 'flower'];

    const images = Images.filter(img => validImages.includes(img.type))

    const randomIndex = Math.floor(Math.random() * images.length);

    setElementType(images[randomIndex]);
  }

  const getSingleImage = (type) => {
    return Images.filter(img => img.type === type)[0].image;
  }

  return (
    <div id={id} className={'item' + selectedClass} data-type={elementType.type} data-color={elementType.color} data-key={keyProp}>
      <img className='item__top' src={elementType.image} style={rotation} />
      <img className='item__top--transparent' src={getSingleImage('empty')} onDragEnter={selectingItems} onDragEnd={validateSelection} />
      <img className='item__bottom' src={getSingleImage('lilypad')} style={rotation} />
    </div>
  )
}
