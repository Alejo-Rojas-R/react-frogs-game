import React, { useEffect, useId, useLayoutEffect, useState } from 'react'
import { Lilypads, Frogs, Transparent } from '../helpers/AssetsController'

/* Lilypad single item*/
export const Item = ({ selectedItems, setSelectedItems, validateSelection }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [rotation, setRotation] = useState({});
  const id = useId();

  useEffect(() => {
    setRotation(getRandomRotation());
  }, [])

  useEffect(() => {
    console.log('sdgsdhdfj')
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
    setSelectedClass(selectedItems.includes(id) && '--selected');
  };


  return (
    <div id={id} className={'item item' + selectedClass} >
      <img className='item__top' src={Frogs[0].image} style={rotation} />
      <img className='item__top--transparent' src={Transparent[0].image} onDragEnter={selectingItems} onDragEnd={validateSelection} />
      <img className='item__bottom' src={Lilypads[0].image} style={rotation} />
    </div>
  )
}
