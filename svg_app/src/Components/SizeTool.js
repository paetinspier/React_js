import React, { useContext } from 'react'
import Slider from '@mui/material/Slider';
import {Stack} from '@mui/material';
import ColorContext from '../Context/ColorContext';

export default function SizeTool() {
    const {height, setHeight} = useContext(ColorContext);
    const {width, setWidth} = useContext(ColorContext);

    const handleHeightChange = (event, newValue) => {
        setHeight(newValue);
        
    };
    const handleWidthChange = (event, newValue) => {
        setWidth(newValue);
        
      };


  return (
    <div>
        <Stack spacing={2} direction='row' alignItems='center'>
            <Slider value={height} onChange={handleHeightChange} min={200} max={600}/>
            <Slider value={width} onChange={handleWidthChange} min={200} max={1000}/>
        </Stack>
    </div>
  )
}
