import React, { createContext, useState } from 'react';

const ColorContext = createContext();

export function ColorProvider({children}){

    const [color, setColor] = useState('#aabbcc')
    const [height, setHeight] = useState(600);
    const [width, setWidth] = useState(1000);

    return(
        <ColorContext.Provider value={{ color, setColor, height, setHeight, width, setWidth }}>{children}</ColorContext.Provider>
    );
}


export default ColorContext;