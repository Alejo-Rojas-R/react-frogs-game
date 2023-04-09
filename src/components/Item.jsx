import React, { useEffect, useId, useLayoutEffect, useState } from 'react'
import { Lilypads, Frogs, Transparent, Images } from '../helpers/AssetsController'

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
    setSelectedClass(selectedItems.includes(id) && '--selected');
  }, [validateSelection])

  const getRandomRotation = () => {
    const angle = Math.random() * 360;
    return { transform: `rotate(${angle}deg)` };
  };


  const selectingItems = (e) => {
    const currentItems = selectedItems;
    currentItems.push(e.target.parentNode.id)

    setSelectedItems(currentItems);
    setSelectedClass(selectedItems.includes(id) && 'item--selected');
  };

  const setItemType = () => {
    const validImages = ['frog', 'dragonfly', 'flower'];

    const images = Images.filter(img => validImages.includes(img.type))

    const randomIndex = Math.floor(Math.random() * images.length);

    setElementType(images[randomIndex]);
  }

  return (
    <div id={id} className={'item ' + selectedClass} data-type={elementType.type}>
      <img className='item__top' src={elementType.image} style={rotation} />
      <img className='item__top--transparent' src={Transparent.image} onDragEnter={selectingItems} onDragEnd={validateSelection} />
      <img className='item__bottom' src={Lilypads[0].image} style={rotation} />
    </div>
  )
}
