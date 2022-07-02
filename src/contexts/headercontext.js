import React, { useState } from 'react'


export const HeaderContext=React.createContext();

export const Header_Provider=(props)=>{
    const [hero_intersecting,set_hero_interset]=useState(false)
    return(
        <HeaderContext.Provider value={[hero_intersecting,set_hero_interset]}>
            {props.children}
        </HeaderContext.Provider>
    )
}