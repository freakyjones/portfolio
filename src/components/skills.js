import React,{useContext, useRef, useState, useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'
import { ThemeContext } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import figma from '../img/figma-1.svg'
import inkscape from '../img/inkscape.svg'
import webflow from '../img/webflow.svg'
let section_container={padding:"150px 0 0 0",background:"#000"}
let heading={fontSize:"2.5rem",color:"#100DAD",fontWeight:"bolder"}
let programing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777"}
let programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
let skill_container={marginTop:"1rem",width:"30%"}
let skill_icon={margin:"10px 0  0 0"}
let skill_headline={margin:"15px 0  0 0",fontSize:"1.5rem",color:"#3E1EC3"}
let skill_para={color:"#725555",marginTop:"15px",maxWidth:"16rem",lineHeight:"1.5"}
let designing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777"}
let design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
let design_icon={...skill_icon,width:"4em",height:"4em"}
const div_variants={
   hidden:{
      opacity:0,
      y:100
   },
   visible:{
      opacity:1,
      y:0,
      transition:{
         duration:1
      }
   }
}
const rating_variants=(new_width)=>{
  return { hidden:{
      width:0
   },
   visible:{
    width:new_width,
      transition:{
         duration:1
      }
   }
}
}
const Skills=()=>{
   const [theme,set_theme]=useContext(ThemeContext)
   const [element,set_element]=useState(null)
   const [intersect,set_intersect]=useState(false)
   const options={threshold:1}
   const observer=useRef(new IntersectionObserver((entry)=>{
      entry.forEach(entries=>{
         console.log(entries)
         if(entries.isIntersecting){
            console.log('enter skill')
            set_intersect(true)
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
  let height_1000=useMediaQuery({
   query:`(max-height:1000px)`
})
   if(ismobile){
      section_container={padding:"50px 15px 0 15px",background:`${theme.background_color}`}
      heading={fontSize:"1.8rem",color:`${theme.headline_color}`,fontWeight:"bolder",textAlign:"center"}
      programing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1rem",textAlign:"center"}
      programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"column"}
      skill_container={marginTop:"1rem",width:"100%"}
      skill_para={color:`${theme.paragraph_color}`,margin:"5px auto 0 auto",maxWidth:"16rem",lineHeight:"1.5",textAlign:"center",fontSize:"0.9rem"}
      skill_headline={margin:"15px 0  0  0",fontSize:"1.5rem",textAlign:"center",color:`${theme.headline_color}`}
      skill_icon={margin:"10px auto  0 auto",width:"100%" }
      designing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1rem",textAlign:"center"}
      design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"column"}
      design_icon={width:"4em",height:"4em",margin:"0 auto",display:"block"}
   }else if(is_mobile_landscape){
      section_container={padding:"50px 20px 0 20px",background:`${theme.background_color}`}
      heading={fontSize:"1.8rem",color:`${theme.headline_color}`,fontWeight:"bolder",textAlign:"left"}
      programing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1rem",textAlign:"left"}
      programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
      skill_container={marginTop:"1rem",width:"50%"}
      designing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1rem",textAlign:"left"}
      skill_para={color:`${theme.paragraph_color}`,margin:"5px 0 0 0",maxWidth:"16rem",lineHeight:"1.5",textAlign:"left",fontSize:"0.9rem"}
      skill_headline={margin:"15px auto  0  auto",fontSize:"1.5rem",textAlign:"left",color:`${theme.headline_color}`}
      skill_icon={margin:"10px 0  0 "}
      design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
      design_icon={...skill_icon,width:"4em",height:"4em"}
   }else if(is_tablet){
      section_container={padding:"50px 30px 0 30px",background:`${theme.background_color}`}
      heading={fontSize:"2rem",color:`${theme.headline_color}`,fontWeight:"bolder",textAlign:"left"}
      programing_style={margin:"2rem 0 0 0",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1.1rem",textAlign:"left",}
      programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"0"}
      skill_container={marginTop:"1rem",width:"50%"}
      designing_style={margin:"2rem 0 0 0",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1.1rem",textAlign:"left"}
      skill_para={color:`${theme.paragraph_color}`,margin:"5px 0 0 0",maxWidth:"16rem",lineHeight:"1.5",textAlign:"left",fontSize:"1rem"}
      skill_headline={margin:"15px auto  0  auto",fontSize:"1.5rem",textAlign:"left",color:`${theme.headline_color}`}
      skill_icon={margin:"10px 0  0 "}
      design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
      design_icon={...skill_icon,width:"4em",height:"4em"}
   }else if(is_laptop){
      section_container={padding:"50px 40px 0 40px",background:`${theme.background_color}`}
      heading={fontSize:"2.5rem",color:`${theme.headline_color}`,fontWeight:"bolder",textAlign:"left"}
      programing_style={margin:"2rem 0 0 0",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1.3rem",textAlign:"left",}
      programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"0"}
      skill_container={marginTop:"1rem",width:"30%"}
      designing_style={margin:"2rem 0 0 0",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1.3rem",textAlign:"left"}
      skill_para={color:`${theme.paragraph_color}`,margin:"5px 0 0 0",maxWidth:"16rem",lineHeight:"1.5",textAlign:"left",fontSize:"1rem"}
      skill_headline={margin:"15px auto  0  auto",fontSize:"1.5rem",textAlign:"left",color:`${theme.headline_color}`}
      skill_icon={margin:"10px 0  0 "}
      design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
      design_icon={...skill_icon,width:"4em",height:"4em"}
   }else{
      if(height_1000){
         section_container={padding:"150px 0 0 0",background:`${theme.background_color}`}
         heading={fontSize:"2.5rem",color:`${theme.headline_color}`,fontWeight:"bolder"}
         programing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777"}
         programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
         skill_container={marginTop:"1rem",width:"30%"}
         skill_icon={margin:"10px 0  0 0"}
         skill_headline={margin:"15px 0  0 0",fontSize:"1.5rem",color:"#3E1EC3"}
         skill_para={color:`${theme.paragraph_color}`,marginTop:"5px",maxWidth:"16rem",lineHeight:"1.5"}
         designing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777"}
         design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
         design_icon={...skill_icon,width:"4em",height:"4em"}
      }else{
         section_container={padding:"150px 0 0 0",background:`${theme.background_color}`}
         heading={fontSize:"4rem",color:`${theme.headline_color}`,fontWeight:"bolder"}
         programing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"2rem"}
         programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
         skill_container={marginTop:"1rem",width:"30%"}
         skill_icon={margin:"10px 0  0 0"}
         skill_headline={margin:"15px 0  0 0",fontSize:"1.5rem",color:"#3E1EC3"}
         skill_para={color:`${theme.paragraph_color}`,marginTop:"15px",maxWidth:"25rem",lineHeight:"1.5",fontSize:"1.5rem"}
         designing_style={marginTop:"2rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"2rem"}
         design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
         design_icon={...skill_icon,width:"4em",height:"4em"}
      }
    
   }
   useEffect(()=>{
     const current_element=element;
     const current_observer=observer.current;
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
        <section ref={set_element} id="skills" style={{...section_container}}>
           <div className="container">
             {intersect?  <motion.div variants={div_variants} initial='hidden' animate='visible' className="main_skills">
                   <h2 style={{...heading}}>#skills</h2>
                   <div className="programing">
                     <h3 style={{...programing_style}}>programing</h3>
                     <div className="programing_skills" style={{...programing_skill_container}}>
                        <div className="skill1" style={{...skill_container}}>
                        <i className="html5 red huge icon"  style={{...skill_icon}}></i>
                          <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("95%")} initial="hidden" animate="visible" className="rating" style={{width:"95%",backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>90%</h3>
                        </div>
                        <div className="skill2"  style={{...skill_container}}>
                        <i className="css3 blue huge icon" style={{...skill_icon}}></i>
                        <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("85%")} initial="hidden" animate="visible" className="rating" style={{backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>85%</h3>
                        </div>
                        <div className="skill3" style={{...skill_container}}>
                        <i className="js orange huge icon" style={{...skill_icon}}></i>
                          
                        <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("80%")} initial="hidden" animate="visible" className="rating" style={{backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>80%</h3>
                        </div>
                        <div className="skill3" style={{...skill_container}}>
                        <i className="react   blue huge icon" style={{...skill_icon}}></i>
                          
                        <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("70%")} initial="hidden" animate="visible" className="rating" style={{backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>70%</h3>
                        </div>
                        <div className="skill3" style={{...skill_container}}>
                        <i className="node grey huge icon"  style={{...skill_icon}}></i>
                          
                        <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("95%")} initial="hidden" animate="visible" className="rating" style={{backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>95%</h3>
                        </div>
                        <div className="skill3" style={{...skill_container}}>
                        <i className="sass purple huge icon" style={{...skill_icon}}></i>
                          
                        <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("70%")} initial="hidden" animate="visible" className="rating" style={{backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>70%</h3>
                        </div>
                     </div>
                     <h3 style={{...designing_style}}>designing</h3>
                     <div className="design_skills" style={{...design_style_container}}>
                       <div className="skill1" style={{...skill_container}}>
                       <img src={figma} alt="img1" style={{...design_icon}}/>
                         
                       <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("50%")} initial="hidden" animate="visible" className="rating" style={{backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>50%</h3>
                       </div>
                       <div className="skill1" style={{...skill_container}}>
                       <img src={webflow}  alt="img1" style={{...design_icon}}/>
                         
                       <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("60%")} initial="hidden" animate="visible" className="rating" style={{backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>60%</h3>
                       </div>
                       <div className="skill1" style={{...skill_container}}>
                       <img src={inkscape}  alt="img1" style={{...design_icon}}/>
                       <div className="rating container" style={{width:"100%",height:"10px",maxWidth:"20em",margin:"10px 0 0 0",borderRadius:"10px",backgroundColor:"blue"}}>
                              <motion.div variants={rating_variants("30%")} initial="hidden" animate="visible" className="rating" style={{backgroundColor:"yellowgreen",height:"100%",marginLeft:"0%",borderRadius:"10px"}}>
                                 
                              </motion.div>
                          </div>
                           <h3 style={{...skill_para,fontFamily:"dancing script"}}>30%</h3>
                       </div>
                     </div>
                   </div>
              </motion.div> :null}
           </div>
        </section>
    )
}

export default Skills;