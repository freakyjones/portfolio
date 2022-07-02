import React,{useState, useContext,useEffect, useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import { HeaderContext } from '../contexts/headercontext'
import { ThemeContext } from '../contexts/ThemeContext'
import {motion} from 'framer-motion'
let section_container={backgroundColor:"transparent",height:"10vh",position:"fixed",width:"100%",zIndex:"100",background:"#fff"}
const Header=()=>{
  const [theme,set_theme]=useContext(ThemeContext)

  const [is_toggle,set_is_toggle]=useState(false)

  const [header_intersect,set_header_intersect]=useContext(HeaderContext)

    let ismobile=useMediaQuery({query:`
  (max-width:500px)`})
  let is_mobile_landscape=useMediaQuery({query:`
  (max-width:700px)`})
  let is_tablet=useMediaQuery({query:`
    (max-width:968px)`})
    let is_laptop=useMediaQuery({query:`
    (max-width:1200px)`})
  if(ismobile){
    {header_intersect?section_container={backgroundColor:`${theme.navbar_background}`,height:"10vh",padding:"0 15px",position:"fixed",width:"100%",zIndex:"100",} :section_container={backgroundColor:`transparent`,height:"10vh",padding:"0 15px",position:"fixed",width:"100%",zIndex:"100",}}
    
  } else if(is_mobile_landscape){
    {header_intersect?section_container={backgroundColor:`${theme.navbar_background}`,height:"10vh",padding:"0 20px",position:"fixed",width:"100%",zIndex:"100",} :section_container={backgroundColor:`transparent`,height:"10vh",padding:"0 20px",position:"fixed",width:"100%",zIndex:"100",}}
    
  }else if(is_tablet){
    {header_intersect?section_container={backgroundColor:`${theme.navbar_background}`,height:"10vh",padding:"0 30px",position:"fixed",width:"100%",zIndex:"100",}:section_container={backgroundColor:`transparent`,height:"10vh",padding:"0 30px",position:"fixed",width:"100%",zIndex:"100",}}
     
  }else if(is_laptop){
    {header_intersect?section_container={backgroundColor:`${theme.navbar_background}`,height:"10vh",padding:"0 40px",position:"fixed",width:"100%",zIndex:"100",}:section_container={backgroundColor:`transparent`,height:"10vh",padding:"0 40px",position:"fixed",width:"100%",zIndex:"100",}}
     
  }else{
    {header_intersect?section_container={backgroundColor:`${theme.navbar_background}`,height:"10vh",position:"fixed",width:"100%",zIndex:"100",}:section_container={backgroundColor:`transparent`,height:"10vh",position:"fixed",width:"100%",zIndex:"100",}}
    
  }
  const handletoggle=()=>{
    set_is_toggle(true)
      set_theme({
        background_color:'#000',
        paragraph_color:'#B7ACAC',
        headline_color:"#fff",
        navbar_background:'#fff',
        footer_background:'#3F3F84',
        modal_headline:'#3F3F84',
        modal_paragraph:'#B7ACAC',
        modal_background:'#000'
      })
 
    console.log("hello")
 
  }
  const offtoggle=()=>{
    set_is_toggle(false)
    set_theme({
      background_color:'#fff',
      paragraph_color:'#986136',
      headline_color:'#100DAD',
      navbar_background:'#000',
      footer_background:'#3F3F84',
      modal_headline:'#fff',
      modal_paragraph:'#F9D4D4',
      modal_background:'#3F3F84'
  })
  }
  const header_variants={
     hidden:{
       opacity:0,
       y:-50
     },
     visible:{
       opacity:1,
       y:0,
       transition:{
         duration:1
       }
     }
  }
  const exit_variants={
    hidden:{
      opacity:0,
      
    },
    visible:{
      opacity:1,
  
      transition:{
        duration:1
      }
    }
  }
  let variants;
  if(header_intersect){
     variants=header_variants
  }else{
    variants=exit_variants
  }
    return(
        <motion.header initial='hidden' variants={variants} animate='visible'  style={{...section_container}}>
            <div className="container">
                <div className="main_header" style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"10vh",}}>
                <div className="heading" >
                <h1 style={{fontFamily:"dancing script",color:"#C69875",opacity:"65%"}}>portfolio</h1>
            </div>
            <div className="toggle_button">
              {
                is_toggle?<i class="toggle on big teal icon" onClick={offtoggle}></i>:  <i class="toggle off big teal icon" onClick={handletoggle}></i>
              }
          
            </div>
                </div>
         
            </div>
        
        </motion.header>
    )
}

export default Header;