import React,{useState,useContext, useRef, useEffect} from 'react'
import card_back from '../img/card_back.png'
import {useMediaQuery} from 'react-responsive'
import ProjectData from '../components/projectdata'
import ProjectDetails from './project'
import { ThemeContext } from '../contexts/ThemeContext'
import {motion} from 'framer-motion'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
let project_container={display:"flex",alignItems:"center", justifyContent:"space-between"  ,marginTop:"30px"}
let section_container={padding:"150px 0 0 0",background:"#000"}
let headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
let projects_style={width:"25em",height:"20em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",}
let pro_img={width:"15em",height:"10em",margin:"1em auto 0 auto"}
let pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"300",textTransform:"uppercase",letterSpacing:"10px"}
const headline_variants={
    hidden:{
        opacity:0,
        x:-40
    },
    visible:{
        opacity:1,
        x:0,
        transition:{
            duration:1
        }
    }
}
const project_variants={
    hidden:{
        opacity:0,
        y:60
    },
    visible:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}
const Project=()=>{
    const [theme,set_theme]=useContext(ThemeContext)
    const [is_open,set_is_open]=useState(undefined)
    const [data,setdata]=useState(ProjectData)
    const [element,set_element]=useState(null)
    const [intersect,set_intersect]=useState(false)
    const options={threshold:1}
    const observer=useRef(new IntersectionObserver((entry)=>{
        entry.forEach((entries)=>{
            console.log(entries)
            if(entries.isIntersecting){
                console.log("projects enter")
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
      project_container={display:"flex",alignItems:"center", justifyContent:"space-between"  ,marginTop:"30px",flexDirection:"column"}
      headline={fontSize:"1.8rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"center"}
      projects_style={width:"20em",height:"15em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",marginTop:"15px"}
      pro_img={width:"10em",height:"7em",margin:"1em auto 0 auto"}
      pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"200",textTransform:"uppercase",letterSpacing:"10px",}
    }else if(is_mobile_landscape){
        section_container={padding:"50px 20px 0 20px",background:`${theme.background_color}`}
        project_container={display:"flex",alignItems:"center",flexWrap:"wrap", justifyContent:"center"  ,marginTop:"30px"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
        projects_style={width:"20em",height:"15em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",margin:"15px 0 0 10px"}
        pro_img={width:"10em",height:"7em",margin:"1em auto 0 auto"}
        pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"200",textTransform:"uppercase",letterSpacing:"10px",}
    }else if(is_tablet){
        section_container={padding:"50px 30px 0 30px",background:`${theme.background_color}`}
        project_container={display:"flex",alignItems:"center",flexWrap:"wrap", justifyContent:"left"  ,marginTop:"30px"}
        headline={fontSize:"2rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
        projects_style={width:"20em",height:"15em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",margin:"15px 0 0 10px"}
        pro_img={width:"10em",height:"7em",margin:"1em auto 0 auto"}
        pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"200",textTransform:"uppercase",letterSpacing:"10px",}
    }else if(is_laptop){
        section_container={padding:"50px 40px 0 40px",background:`${theme.background_color}`}
        project_container={display:"flex",alignItems:"center",flexWrap:"wrap", justifyContent:"space-between"  ,marginTop:"30px"}
        headline={fontSize:"2.5rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
        projects_style={width:"20em",height:"15em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",margin:"15px 0 0 0"}
        pro_img={width:"10em",height:"7em",margin:"1em auto 0 auto"}
        pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"200",textTransform:"uppercase",letterSpacing:"10px",}
    }else{
        if(height_1000){
            project_container={display:"flex",alignItems:"center", justifyContent:"space-between"  ,marginTop:"30px"}
            section_container={padding:"150px 0 0 0",background:`${theme.background_color}`}
            headline={fontSize:"2.5rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
            projects_style={width:"25em",height:"20em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",}
            pro_img={width:"15em",height:"10em",margin:"1em auto 0 auto"}
            pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"300",textTransform:"uppercase",letterSpacing:"10px"}
        }else{
            project_container={display:"flex",alignItems:"center", justifyContent:"space-between"  ,marginTop:"30px"}
            section_container={padding:"150px 0 0 0",background:`${theme.background_color}`}
            headline={fontSize:"4rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
            projects_style={width:"25em",height:"20em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",}
            pro_img={width:"15em",height:"10em",margin:"1em auto 0 auto"}
            pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"300",textTransform:"uppercase",letterSpacing:"10px"}
        }
   
    }
   
    const handleclick=(e)=>{   
    const newdata=  data.map(item=>{
          if(e.target.id===item.id){
              item.is_open=true 
              return item
          }else{
              return item;
          }
      })
      setdata(newdata)
    }
    const close_dimmer=()=>{
       const newdata=data.map(item=>{
                item.is_open=false 
                return item
        })
        setdata(newdata)
    }
    useEffect(()=>{
     const current_element=element;
     const current_observer=observer.current;
     if(current_element){
         current_observer.observe(element)
     }
     return ()=>{
         if(current_element){
             current_observer.unobserve(element)
         }
     }
    },[element,data])
  const Sliding=(img,img2,img3,inter)=>{

      return(
<CarouselProvider  
               naturalSlideWidth={100}
               naturalSlideHeight={70}
               totalSlides={3}
               isPlaying={true}
               playDirection='forward'
               interval={inter}
               >  
                  <Slider> 
                      <Slide index={0}>
                      <img src={img} alt="pro_img" style={{width:"100%",height:"100%"}}/>
                      </Slide>
                      <Slide index={1}>
                      <img src={img2} alt="pro_img" style={{width:"100%",height:"100%"}}/>
                      </Slide>
                      <Slide index={2}>
                      <img src={img3} alt="pro_img" style={{width:"100%",height:"100%"}}/>
                      </Slide>
                      </Slider>
            </CarouselProvider>
      )

  }
  const projects=data.map((item)=>{  
  return  ( <div className="projects1"  style={{...projects_style}}>
    <div className="project_img" style={{...pro_img}}>
          {Sliding(item.img1,item.img2,item.img3,3000)}
           </div>
           <div className="project_tittle" style={{...pro_tittle}}>
             <h4>{item.name}</h4>
           </div>
             <button className="ui primary basic button" style={{marginTop:"10px",marginLeft:"5em"}} id={item.id} name="one"  onClick={handleclick}>details</button>
           {
               item.is_open? < ProjectDetails close_dimmer={close_dimmer} details={item.details} />:null
           }
        
      </div>)
  })

    return(
        <section ref={set_element} id="project"  style={{...section_container,position:"relative"}}> 
            <div className="container">
              <div className="main_projects" >
             {intersect?<motion.h2 initial='hidden' animate='visible' variants={headline_variants} style={{...headline}}>#projects</motion.h2>:null} 
              { intersect?<motion.div initial='hidden' animate='visible' variants={project_variants} className="projects" style={{...project_container}}>
                {projects}
              </motion.div>:null}
              </div>
            </div>
        </section>
    )
}

export default Project;