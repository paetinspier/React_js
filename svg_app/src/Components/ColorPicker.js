import React, {useContext} from 'react'
import { HexColorPicker } from 'react-colorful';
import ColorContext from '../Context/ColorContext';

export default function ColorPicker() {

    const {color, setColor} = useContext(ColorContext);


  return (
    <HexColorPicker color={color} onChange={setColor}/>
  )
}
