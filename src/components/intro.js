import React,{useContext, useReducer, useRef, useState, useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import { ThemeContext } from '../contexts/ThemeContext'
import {motion} from 'framer-motion'
let heading={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
let section_container={padding:"150px 0 0 0",background:"#000"}
let para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"70rem",width:"100%",color:"#986136",fontSize:"1.2rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.5"}

const headline_variants={
  hidden:{
    opacity:0,
    x:-100
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:1
    }
  }
}
const paragraph_variants={
  hidden:{
    opacity:0,
    y:40
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:1
    }
  }
}
const Intro=()=>{
  const [theme,set_theme]=useContext(ThemeContext)
  const [element,set_element]=useState(null)
  const [is_intersect,set_is_intersect]=useState(null)
  const options={threshold:0.2}
  const observer=useRef(new IntersectionObserver((entry)=>{
   entry.forEach(entries=>{
     console.log(entries)
     if(entries.isIntersecting){
        set_is_intersect(true)
     }
   })
  },options))
  let ismobile=useMediaQuery({query:`
  (max-width:500px)`})
  let is_mobile_landscape=useMediaQuery({query:`
  (max-width:700px)`})
  let is_tablet=useMediaQuery({query:`
  (max-width:968px)`})
  let is_laptop=useMediaQuery({query:`
  (max-width:1200px)`})
  const height_1000=useMediaQuery({
    query:`(max-height:1200px)`
  })
  if(ismobile){
    section_container={padding:"50px 15px 0 15px",background:`${theme.background_color}`}
    heading={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"center"}
    para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"50rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"0.9rem",margin:"1rem auto 0 auto",textAlign:"center",lineHeight:"2"}
  }else if(is_mobile_landscape){
    section_container={padding:"50px 20px 0 20px",background:`${theme.background_color}`}
    para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"50rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"0.9rem",margin:"1rem auto 0 auto",textAlign:"left",lineHeight:"2"}
    heading={fontSize:"1.8rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
  }else if(is_tablet){
    section_container={padding:"50px 30px 0 30px",background:`${theme.background_color}`}
    para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"40rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"1rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"2"}
    heading={fontSize:"2rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
  }else if(is_laptop){
    section_container={padding:"50px 40px 0 40px",background:`${theme.background_color}`}
    para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"45rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"1.1rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"2"}
    heading={fontSize:"2.5rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
  }else {
    if(height_1000){
      heading={fontSize:"2.5rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
      section_container={padding:"150px 0 0 0",background:`${theme.background_color}`}
      para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"70rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"1.2rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.5"}
    }else{
      heading={fontSize:"4rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
      section_container={padding:"150px 0 0 0",background:`${theme.background_color}`}
      para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"90rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"1.5rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.5"}
    }

  }
  useEffect(()=>{
   const current_observer=observer.current;
   const current_element=element;
   if(current_element){
     current_observer.observe(element)
   }
   return ()=>{
     if(current_element){
      current_observer.unobserve(element)
     }
     
   }
  },[element])
    return(
   <section id="intro" ref={set_element} style={{...section_container}}>
            <div className="container">
              <div className="intro_main">
                 <div className="intro_header" >
               {is_intersect?<div><motion.h2 variants={headline_variants} initial='hidden' animate='visible' style={{...heading}}>#who am i</motion.h2>
                   <motion.p  variants={paragraph_variants} initial='hidden' animate='visible'  style={{...para}}>Contrary to popular belief, Hi, I’m Abhilash. I'm a frontend developer with over 2 years of  experiences in wide range of ui & ux design.
                   <br/>
                   <br/> 
                   I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
                   <br/> 
                   <br/> 
Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them. </motion.p></div>:null} 
                 </div>
              </div>
            </div>
        </section>
    )
}

export default Intro;