import React from 'react'
import {useMediaQuery} from 'react-responsive'
import background from '../img/background.jpg'
let heading_style={fontSize:"3rem",color:"#fff",textTransform:"uppercase",width:"100%",maxWidth:"12em",lineHeight:"1"}
let button_style={marginTop:"5rem",width:"9rem",height:"2rem",fontSize:"1rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%"}
let section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"90vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}
const Hero=()=>{
  let ismobile=useMediaQuery({query:`
  (max-width:500px)`})
  let is_mobile_landscape=useMediaQuery({query:`
  (max-width:700px)`})
  let is_tablet=useMediaQuery({query:`
  (max-width:968px)`})
  let is_laptop=useMediaQuery({query:`
  (max-width:1200px)`})
  if(ismobile){
    heading_style={fontSize:"2rem",color:"#fff",textTransform:"uppercase",width:"100%",maxWidth:"15em",lineHeight:"1",margin:"8rem auto 0 auto",textAlign:"center"}
    button_style={margin:"3rem auto 0 27.5% ",width:"100%",maxWidth:"9rem",height:"2rem",fontSize:"1rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%"}
    section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"90vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",padding:"0 15px"}
  }else if(is_mobile_landscape){
    section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"90vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}
    heading_style={fontSize:"2.2rem",color:"#fff",textTransform:"uppercase",width:"100%",maxWidth:"13em",lineHeight:"1",margin:"6rem auto 0 20px",textAlign:"left"}
    button_style={margin:"3rem auto 0 22px ",width:"100%",maxWidth:"9rem",height:"2rem",fontSize:"1rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%"}
  }else if(is_tablet){
    section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"90vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}
    heading_style={fontSize:"2.5rem",color:"#fff",textTransform:"uppercase",width:"100%",maxWidth:"13em",lineHeight:"1",margin:"6rem auto 0 30px",textAlign:"left"}
    button_style={margin:"3rem auto 0 30px ",width:"100%",maxWidth:"9rem",height:"2.3rem",fontSize:"1rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"1em"}
  }else if(is_laptop){
    section_container={backgroundImage: ` linear-gradient(112.77deg, #170412 0%, rgba(13, 50, 11, 0) 100%),url(${background})`,height:"90vh",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}
    heading_style={fontSize:"3rem",color:"#fff",textTransform:"uppercase",width:"100%",maxWidth:"13em",lineHeight:"1",margin:"6rem auto 0 40px",textAlign:"left"}
    button_style={margin:"3rem auto 0 40px ",width:"100%",maxWidth:"10rem",height:"2.5rem",fontSize:"1rem",textTransform:"capitalize",background:"none",outlineStyle:"none",borderStyle:"none",border:"1px solid #C69875",color:"#DFDEE5",opacity:"60%",borderRadius:"1em"}
  }
    return(
     <section id="hero" style={{...section_container}}>
       <div className="container">
         <div className="main_hero" style={{paddingTop:"8rem"}}>
            <h1 style={{...heading_style}}>determind to <span style={{color:"#C69875"}}>create</span>  web beautiful and accessible for everyone.....</h1>
            <button style={{...button_style}}>explore now</button>
         </div>
       </div>
     </section>
    )
}

export default Hero;