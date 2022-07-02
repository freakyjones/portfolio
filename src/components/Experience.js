import React,{useState, useContext, useRef, useEffect} from 'react';
import {motion} from 'framer-motion'
import experience_img from '../img/pro.png'
import expe_back from '../img/expe_back.png'
import mobile_expe_beck from '../img/mobile_expe_beck.svg'
import tablet_expe_beck from'../img/tablet_exp_beck.svg'; 
import {useMediaQuery} from 'react-responsive';
import ExperienceDetails from './ExperienceDetails'
import { ThemeContext } from '../contexts/ThemeContext';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
let section_container={padding:"150px 0 0 0",background:"#000"};
let headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
let para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"30rem",width:"100%",color:"#986136",fontSize:"1.2rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.5"}
let back_img ={marginTop:"15px",backgroundImage:`url(${expe_back})`,backgroundSize:"cover",display:"flex",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat"}
let exp_img={width:"20em",height:"15em",marginLeft:"50em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))"}
let exp_btn={height:"2.5em",width:"8em",margin:"10em 0 0 5em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))"}
const all_exp_img=[experience_img,experience_img,experience_img];
const headline_variants={
    hidden:{
        opacity:0,
        y:20
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}
const back_img_variants={
    hidden:{
      opacity:0,
      y:70
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}
const paragraph_variants={
    hidden:{
        opacity:0,
        x:-50
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:1
        }
    }
}
const Experience=()=>{
    const [theme,set_theme]=useContext(ThemeContext)
    const [is_details_open,set_is_details_open]=useState(false)
    const [element,set_element]=useState(null)
    const [img_element,set_img_element]=useState(null)
    const [intersect,set_intersect]=useState(false)
    const [back_img_intersect,set_back_img_intersect]=useState(false)
    const options={threshold:0.5}
    const observer=useRef(new IntersectionObserver((entry)=>{
        entry.forEach(entries=>{
            console.log(entries)
            if(entries.isIntersecting){
                console.log("experience enter")
                set_intersect(true)
            }
        })
    },options))
    const img_options={threshold:0.7}
    const img_observer=useRef(new IntersectionObserver((entry)=>{
        entry.forEach((entries)=>{
           if(entries.isIntersecting){
               console.log("back img enter")
               set_back_img_intersect(true)
           }
        })

    },img_options))
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
        section_container={padding:"50px 0px 0 0px"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"center"}
        para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"20rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"0.9rem",margin:"1rem 0 0 0",textAlign:"center",lineHeight:"2",margin:"0 auto"}
        back_img ={marginTop:"30px",backgroundSize:"cover",height:"20em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",width:"100%"}
        exp_img={width:"15em",height:"10em",marginLeft:"10%",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",position:"absolute",top:"0"}
        exp_btn={height:"2.5em",width:"8em",margin:"15em auto 0 10%",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
         }
    }else if(is_mobile_landscape){
        section_container={padding:"50px 0 0 0",background:`${theme.background_color}`}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left",margin:"0 0 0 20px"}
        para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"20rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"0.9rem",margin:"1rem 0 0 20px",textAlign:"left",lineHeight:"2",}
        back_img ={marginTop:"30px",padding:"0 20px 0 20px",backgroundImage:`url(${mobile_expe_beck})`,backgroundSize:"cover",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",display:"flex",justifyContent:"space-between"}
        exp_img={width:"15em",height:"10em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",margin:"20px 0 0 20px"}
        exp_btn={height:"2.5em",width:"8em",margin:"5rem 0 0 0",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
         }
    }else if(is_tablet){
        section_container={padding:"50px 0 0 0",background:`${theme.background_color}`}
        headline={fontSize:"2rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left",margin:"0 0 0 30px"}
        para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"60rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"1rem",margin:"1rem 0 0 30px",textAlign:"left",lineHeight:"2",}
        back_img ={marginTop:"30px",padding:"0 30px 0 30px",backgroundImage:`url(${tablet_expe_beck})`,backgroundSize:"cover",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",display:"flex",justifyContent:"space-between"}
        exp_img={width:"15em",height:"10em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",margin:"30px 0 0 30px"}
        exp_btn={height:"2.5em",width:"8em",margin:"5rem 0 0 0",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
         } 
    }else if(is_laptop){
        section_container={padding:"50px 0 0 0",background:`${theme.background_color}`}
        headline={fontSize:"2.5rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left",margin:"0 0 0 40px"}
        para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"60rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"1.1rem",margin:"1rem 0 0 40px",textAlign:"left",lineHeight:"2",}
        back_img ={marginTop:"30px",padding:"0 40px 0 40px",backgroundImage:`url(${ expe_back})`,backgroundSize:"cover",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",display:"flex",justifyContent:"space-between"}
        exp_img={width:"15em",height:"10em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",margin:"30px 0 0 30px"}
        exp_btn={height:"2.5em",width:"8em",margin:"5rem 0 0 0",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
         } 
    }else{
        if(height_1000){
            section_container={padding:"150px 0 0 0",background:`${theme.background_color}`,};
            para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"30rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"1.2rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.5"}
            back_img ={marginTop:"15px",backgroundImage:`url(${expe_back})`,backgroundSize:"cover",display:"flex",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative"}
            exp_img={width:"15em",height:"10em",marginRight:"10%",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",position:"absolute",top:"0",right:'0'}
            exp_btn={height:"2.5em",width:"8em",margin:"15em auto 0 10%",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
        }
        headline={fontSize:"2.5rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
        }else{
            section_container={padding:"150px 0 0 0",background:`${theme.background_color}`,};
            para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"50rem",width:"100%",color:`${theme.paragraph_color}`,fontSize:"1.5rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.5"}
            back_img ={marginTop:"15px",backgroundImage:`url(${expe_back})`,backgroundSize:"cover",display:"flex",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative"}
            exp_img={width:"15em",height:"10em",marginRight:"10%",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",position:"absolute",top:"0",right:'0'}
            exp_btn={height:"2.5em",width:"8em",margin:"15em auto 0 10%",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
        }
        headline={fontSize:"4rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
        }
      
    }
    const handleclick=()=>{
        console.log("details known")
        set_is_details_open(true)
    }
    const close_dimmer=()=>{
        set_is_details_open(false)
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
    useEffect(()=>{
     const current_img_elemnt=img_element;
     const current_img_observer=img_observer.current;
     if(current_img_elemnt){
         current_img_observer.observe(img_element)
     }
     return ()=>{
         if(current_img_elemnt){
             current_img_observer.unobserve(img_element)
         }
     }
    },[img_element])
    
    return(
        <section ref={set_element} id="experience" style={{...section_container}}>
          <div className="container">
              <div className="main_experience">
             {intersect?<> <motion.h2 initial='hidden' animate='visible' variants={headline_variants} style={{...headline}}>#experience</motion.h2>
              <motion.p  variants={paragraph_variants} initial='hidden' animate='visible' style={{...para}}>i have two years of extensive experience in react where i work with some company to help build their website..Also as feelancer i help many clients to build  website..  </motion.p></>:null}
              </div>
             <motion.div  className="experience_details" style={{...back_img}} ref={set_img_element}>
              <button className="ui button" style={{...exp_btn}} onClick={handleclick} >details</button>
              {back_img_intersect?  <motion.div  variants={back_img_variants} initial='hidden' animate='visible' className="experience_img" style={{...exp_img}}> 
              <CarouselProvider  
               naturalSlideWidth={100}
               naturalSlideHeight={70}
               totalSlides={3}
               isPlaying={true}
               playDirection='forward'
               interval={3000}
               >
                   
                  <Slider>
                     
                      <Slide index={0}>
                      <img src={experience_img} alt="exp_img" style={{width:"100%",height:"100%"}}/>
                      </Slide>
                      <Slide index={1}>
                      <img src={experience_img} alt="exp_img" style={{width:"100%",height:"100%"}}/>
                      </Slide>
                      <Slide index={2}>
                      <img src={experience_img} alt="exp_img" style={{width:"100%",height:"100%"}}/>
                      </Slide>
                  
                      </Slider>
            </CarouselProvider>
                 </motion.div> :null}
              {is_details_open?<ExperienceDetails close_dimmer={close_dimmer}/>:null}
              </motion.div>
          </div>
        </section>
    )  
}

export default Experience;