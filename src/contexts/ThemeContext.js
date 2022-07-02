import React,{createContext, useState} from 'react'


export const ThemeContext=createContext();

export const ThemeProvider=(props)=>{
    const [theme,set_theme]=useState({
        background_color:'#fff',
        paragraph_color:'#986136',
        headline_color:'#100DAD',
        navbar_background:'#000',
        footer_background:'#3F3F84',
        modal_headline:'#fff',
        modal_paragraph:'#C69875',
        modal_background:'#3F3F84'
    })
    return(
        <ThemeContext.Provider value={[theme,set_theme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}


