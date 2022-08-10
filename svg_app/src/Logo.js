import React, { useContext } from 'react';
import ColorContext from './Context/ColorContext';

export default function Logo(props) {
    const {color} = useContext(ColorContext);
    const {width} = useContext(ColorContext);
    const {height} = useContext(ColorContext);

    const saveSvgAsPng = require('save-svg-as-png');

    const imageOptions = {
        scale: 1,
        encoderOptions: 1,
    }

    const handleClick = () => {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('theSvg'), 'background.png', imageOptions);
    }

  return (
    <div>
        <svg id={'theSvg'} width={width} height={height} {...props}>
            <rect  width='100%' height="100%" style={{fill: color, strokeWidth: 3, stroke: 'rgb(0,0,0)'}}/>
        </svg>

        <div>
            <button onClick={handleClick}>DOWNLOAD</button>
        </div>
    </div>
  )
}
