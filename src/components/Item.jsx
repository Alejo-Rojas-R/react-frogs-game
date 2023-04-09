import React, { useEffect, useId, useLayoutEffect, useState } from 'react'
import { Images } from '../helpers/AssetsController'

/* Lilypad single item*/
export const Item = ({ selectedItems, setSelectedItems, validateSelection }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [rotation, setRotation] = useState({});
  const [elementType, setElementType] = useState({});

  const id = useId();

  useEffect(() => {
    setItemType();
    /*
    const validImages = ['frog', 'dragonfly'];

    if (validImages.includes(elementType.type)) {
      setRotation(getRandomRotation());
    }
    */
  }, [])

  useEffect(() => {
    giveSelectedClass();
  }, [validateSelection])

  /* Validate selection CSS class to set the setSelectedClass hook */
  const giveSelectedClass = () => {
    setSelectedClass(selectedItems.some(item => item.id === id) && 'item--selected');
  }


  const getRandomRotation = () => {
    const angle = Math.random() * 360;
    return { transform: `rotate(${angle}deg)` };
  };

  const selectingItems = (e) => {
    const currentItems = selectedItems;
    currentItems.push(e.target.parentNode)

    setSelectedItems(currentItems);
    giveSelectedClass();
  };

  const setItemType = () => {
    const validImages = ['frog', 'dragonfly', 'flower'];

    const images = Images.filter(img => validImages.includes(img.type))

    const randomIndex = Math.floor(Math.random() * images.length);

    setElementType(images[randomIndex]);
  }

  const getSingleImage = (type) => {
    return Images.filter(img => img.type === type)[0].image;
  }

  return (
    <div id={id} className={'item ' + selectedClass} data-type={elementType.type}>
      <img className='item__top' src={elementType.image} style={rotation} />
      <img className='item__top--transparent' src={getSingleImage('empty')} onDragEnter={selectingItems} onDragEnd={validateSelection} />
      <img className='item__bottom' src={getSingleImage('lilypad')} style={rotation} />
    </div>
  )
}
