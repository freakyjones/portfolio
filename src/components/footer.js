import React, { useContext } from 'react';
import {useMediaQuery} from 'react-responsive';
import { ThemeContext } from '../contexts/ThemeContext'
let section_container={padding:"150px 0px 50px 0px",marginTop:"5em"}
let main_footer={display:"flex",alignItems:"center",justifyContent:"space-between"}
let headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#C69875",fontWeight:"800",width:"100%",maxWidth:"10em",textAlign:"left",lineHeight:"1"}
let sub_head={fontSize:"2rem",color:"#fff",margin:"20px 0 0 0"}
let ph_style={fontSize:"1.2rem",color:"#fff",margin:"10px 0 0 0"}
let link_style={}
let link_size="big"

const Footer=()=>{
  const [theme,set_theme]=useContext(ThemeContext)

let ismobile=useMediaQuery({query:`
    (max-width:500px)`})
    let is_mobile_landscape=useMediaQuery({query:`
    (max-width:700px)`})
    let is_tablet=useMediaQuery({query:`
    (max-width:968px)`})
    let is_laptop=useMediaQuery({query:`
  (max-width:1200px)`})
    if(ismobile){
      section_container={padding:"50px 15px 50px 15px",background:`${theme.footer_background}`}
      main_footer={display:"flex",alignItems:"left",justifyContent:"space-between",flexDirection:"column"}
      headline={fontSize:"1.8rem",textTransform:"capitalize",color:"#C69875",fontWeight:"800",width:"100%",maxWidth:"10em",textAlign:"center",lineHeight:"1",margin:"0 auto"}
      sub_head={fontSize:"1.5rem",color:"#3F3F84",margin:"20px 0 0 0"}
      ph_style={fontSize:"0.9rem",color:"#fff",margin:"5px 0 0 0"}
      link_style={marginTop:"30px",textAlign:"left"}
      link_size="large"
    }else if(is_mobile_landscape){
      section_container={padding:"50px 20px 50px 20px",background:`${theme.footer_background}`}
      main_footer={display:"flex",alignItems:"left",justifyContent:"space-between",flexDirection:"column"}
      headline={fontSize:"1.8rem",textTransform:"capitalize",color:"#C69875",fontWeight:"800",width:"100%",maxWidth:"10em",textAlign:"left",lineHeight:"1",}
      sub_head={fontSize:"1.5rem",color:"#3F3F84",margin:"20px 0 0 0"}
      ph_style={fontSize:"0.9rem",color:"#fff",margin:"5px 0 0 0"}
      link_style={marginTop:"30px",textAlign:"left"}
      link_size="large"
    }else if(is_tablet){
      section_container={padding:"50px 30px 50px 30px",background:`${theme.footer_background}`}
      main_footer={display:"flex",alignItems:"left",justifyContent:"space-between"}
      headline={fontSize:"2rem",textTransform:"capitalize",color:"#C69875",fontWeight:"800",width:"100%",maxWidth:"10em",textAlign:"left",lineHeight:"1",}
      sub_head={fontSize:"1.7rem",color:"#fff",margin:"20px 0 0 0"}
      ph_style={fontSize:"1rem",color:"#fff",margin:"5px 0 0 0"}
      link_style={marginTop:"30px",textAlign:"left"}
      link_size="large"
    }else if(is_laptop){
      section_container={padding:"50px 40px 50px 40px",background:`${theme.footer_background}`}
      main_footer={display:"flex",alignItems:"left",justifyContent:"space-between"}
      headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#C69875",fontWeight:"800",width:"100%",maxWidth:"10em",textAlign:"left",lineHeight:"1",}
      sub_head={fontSize:"1.7rem",color:"#fff",margin:"20px 0 0 0"}
      ph_style={fontSize:"1rem",color:"#fff",margin:"5px 0 0 0"}
      link_style={marginTop:"30px",textAlign:"left"}
      link_size="big"
    }else{
      section_container={padding:"150px 0px 50px 0px",marginTop:"5em",background:`${theme.footer_background}`}
      main_footer={display:"flex",alignItems:"center",justifyContent:"space-between"}
      headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#C69875",fontWeight:"800",width:"100%",maxWidth:"10em",textAlign:"left",lineHeight:"1"}
      sub_head={fontSize:"2rem",color:"#fff",margin:"20px 0 0 0"}
      ph_style={fontSize:"1.2rem",color:"#fff",margin:"10px 0 0 0"}
      link_size="big"
    }
   return(
       <section id="footer" style={{...section_container}}>
           <div className="container">
               <div className="main_footer" style={{...main_footer}}>
                  <div className="left">
                  <h2 style={{...headline}}>thank you for watching </h2>
                    <div className="contact">
                       <h3 style={{...sub_head}}>contact me</h3>
                       <h4 style={{...ph_style}}>email : abhilashpandey8170@gmail.com</h4>
                       <h4 style={{...ph_style}}>ph.no : 861703009</h4>
                    </div> 
                  </div>
                  <div className="right" style={{...link_style}}>
                  <a href="https://github.com/freakyjones"><i class={`github  circular inverted blue ${link_size} square icon`} ></i></a>
                  <a href="https://www.facebook.com/abhilash.pandey.965580"><i class={`facebook circular inverted blue ${link_size}  square icon`} style={{marginLeft:"10px"}}>
                  </i></a> 
                  <a href="https://www.linkedin.com/in/abhilash-pandey-0b45a1185" target="_blank"><i class={`linkedin circular inverted blue ${link_size}  icon` }style={{marginLeft:"10px"}}></i></a>
                  </div>
                 
                </div>   
                <p style={{marginTop:"40px",color:"#fff",fontsize:"0.9rem",textAlign:"center"}}>freakyjones &copy; 2020 </p>
           </div>
       </section>
   )
}

export default Footer;