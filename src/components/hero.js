import React,{useState,useRef,useEffect, useContext} from 'react'
import {useMediaQuery} from 'react-responsive'
import background from '../img/background.jpg'
import {HeaderContext} from '../contexts/headercontext'
import {motion} from 'framer-motion'
let heading_style={fontSize:"3rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"12em",lineHeight:"1"}
let button_style={marginTop:"5rem",width:"9rem",height:"2rem",fontSize:"1rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%"}
let section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}
const Hero=()=>{
  const buttonref=useRef()
  const [element,set_element]=useState(null)
  const [header_intersect,set_header_intersect]=useContext(HeaderContext)
  const options={  rootMargin:'-200px 0px 0px 0px'}
  const observer=useRef(new IntersectionObserver((entry)=>{
    entry.forEach((entries)=>{
       if(!entries.isIntersecting){
         set_header_intersect(true)
       }else{
         console.log('hero enter')
         set_header_intersect(false)
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
  const height_600=useMediaQuery({
    query:`(max-height:600px)`
  })
  const height_1000=useMediaQuery({
    query:`(max-height:1000px)`
  })
  if(ismobile){
    if(height_600){
      heading_style={fontSize:"1.6rem",color:"#fff",textTransform:"capitalize",width:"100%",lineHeight:"1.3",position:"absolute",top:"42%",left:"29%",textAlign:"center"}
      button_style={position:"absolute",top:"62%",left:"29%",width:"100%",maxWidth:"7rem",height:"1.7rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px"}
      section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",padding:"0 15px",backgroundAttachment:'fixed'}
    }else{
      heading_style={fontSize:"1.6rem",color:"#fff",textTransform:"capitalize",maxWidth:"13em",lineHeight:"1.3",position:"absolute",top:"40%",textAlign:"center",left:"12%"}
      button_style={position:"absolute",top:"58%",left:"35%",width:"100%",maxWidth:"7.5rem",height:"1.8rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px"}
      section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",padding:"0 15px",backgroundAttachment:'fixed'}
    }
   
  }else if(is_mobile_landscape){
    if(height_600){
      section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:'fixed'}
      heading_style={fontSize:"2.2rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"12em",lineHeight:"1",margin:"6% auto 0 auto",textAlign:"center"}
      button_style={margin:"3% auto 0 36% ",width:"100%",maxWidth:"9rem",height:"2rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px"}
    }else{
      section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:'fixed'}
      heading_style={fontSize:"2.2rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"12em",lineHeight:"1.3",position:"absolute",
      top:"40%",left:"20%",textAlign:"center"}
      button_style={position:"absolute",top:"58%",left:"37%",width:"100%",maxWidth:"9rem",height:"2rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px"}
    }

  }else if(is_tablet){
    if(height_600){
      section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:'fixed'}
      heading_style={fontSize:"2.5rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"13em",lineHeight:"1",textAlign:"left",position:"absolute",top:"30%"}
      button_style={width:"100%",maxWidth:"9rem",height:"2.3rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px",position:"absolute",top:"60%"}
    }else{
      section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:'fixed'}
      heading_style={fontSize:"2.5rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"13em",lineHeight:"1.3",textAlign:"left",position:"absolute",top:"40%"}
      button_style={width:"100%",maxWidth:"9rem",height:"2.3rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px",top:"55%",position:"absolute"}
    }
  
  }else if(is_laptop){
 if(height_1000){
  section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:'fixed'}
    heading_style={fontSize:"3rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"12em",lineHeight:"1",margin:"20% auto 0 auto",textAlign:"center"}
    button_style={margin:"3% auto 0 39% ",width:"100%",maxWidth:"10rem",height:"3rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px"}
 }else{
  section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:'fixed'}
  heading_style={fontSize:"3rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"12em",lineHeight:"1.3",position:"absolute",top:"40%",left:"24%",textAlign:"center"}
  button_style={position:"absolute",top:"55%",left:"40%",width:"100%",maxWidth:"10rem",height:"3rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px"}
 }
  
  }else{
  if(height_1000){
    heading_style={fontSize:"3rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"12em",lineHeight:"1.3",position:"absolute",top:"30%",textAlign:"left"}
    button_style={position:"absolute",top:"60%",width:"100%",maxWidth:"9rem",height:"3rem",fontSize:"0.8rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px",display:"iniline-block",textAlign:"center"}
    section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}
  }else{
    heading_style={fontSize:"5rem",color:"#fff",textTransform:"capitalize",width:"100%",maxWidth:"12em",lineHeight:"1.3",position:"absolute",top:"35%",textAlign:"left"}
    button_style={position:"absolute",top:"65vh",width:"100%",maxWidth:"11rem",height:"4rem",fontSize:"1.2rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"6px",display:"iniline-block",textAlign:"center"}
    section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"100vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}
  }
   
  }
  const handleclick=()=>{
    window.scroll({
      top: 500,
      left: 0,
      behavior: 'smooth'
    });
  }
  const handleenter=()=>{
    buttonref.current.style.background='yellowgreen'
    buttonref.current.style.color='blue'
  }
  const handleleave=()=>{
    buttonref.current.style.background='none'
    buttonref.current.style.color='#fff'
  }
  useEffect(()=>{
    const current_observer=observer.current;
    const current_element=element;
 
    if(current_element){
      current_observer.observe(element)
    }
 
    return()=>{
      if(current_element){
       current_observer.unobserve(element)
      }
      
    }
   },[element])
  
    return(
     <section  ref={set_element} id="hero" style={{...section_container}}>
       <div className="container">
         <div className="main_hero" style={{paddingTop:"8rem"}}>
            <h1 style={{...heading_style}}>determind to <span style={{color:"#C69875"}}>create</span>  web beautiful and accessible for everyone.....</h1>
            <motion.button ref={buttonref} style={{...button_style,cursor:"pointer"}} onClick={handleclick} onMouseEnter={handleenter} onMouseLeave={handleleave}>explore now</motion.button>
         </div>
       </div>
     </section>
    )
}

export default Hero;