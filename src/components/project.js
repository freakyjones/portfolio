import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import react from '../img/react.svg'
import ReactRouter from '../img/react-router.svg'
import redux from '../img/redux.svg'
import html from '../img/html-5.svg'
import css from '../img/css-5.svg'
import visual from '../img/visual-studio-code.svg'
import {useMediaQuery} from 'react-responsive'
let technologies={border:"2px solid #fff",width:"12em",height:"12em",margin:"30px 0 0 0px ",borderRadius:"1.5em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}
const ProjectDetails=(props)=>{
   const [theme,set_theme]=useContext(ThemeContext)
   let ismobile=useMediaQuery({query:`
    (max-width:500px)`})
   if(ismobile){
      technologies={border:"2px solid #fff",width:"12em",height:"12em",margin:"30px auto 0 auto ",borderRadius:"1.5em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}
   }else{
      technologies={border:"2px solid #fff",width:"12em",height:"12em",margin:"30px 0 0 0px ",borderRadius:"1.5em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}
   }
    return(
       <div  style={{background: "rgba(219, 212, 212, 0.6)",width:"100vw",height:"100vh",zIndex:"100",position:"fixed",top:0,left:0,opacity:"100%",backgroundColor:`${theme.modal_background}`,overflowY:"scroll",color:`${theme.modal_paragraph}`}}>
        <div id="project" style={{width:"100%",maxWidth:"1000px",margin:"0 auto",overflowY:"scroll"}}>
            <div className="header" style={{display:"flex"}}>
            <div className="project_summery"  style={{padding:"4em 30px 0 30px"}}>
             <h2 style={{margin:"0 0 0 0",textTransform:"capitalize",color:`${theme.modal_headline}`}}>project summery</h2>
            <div style={{height:"2px",width:"13em",backgroundColor:"#DBD4D4",margin:"3px 0 0 0"}}></div>
            <p style={{marginTop:"10px",lineHeight:"1.6",fontSize:"1.3rem"}}>{props.details} </p>
         </div>
         <div className="close_modal" style={{padding:"1em 0 0 0"}}>
         <i class="times big circle icon"  onClick={props.close_dimmer}></i>
         </div>
            </div>
       
         <div className="challenges" style={{padding:"4em 30px 0 30px"}}>
            <h2 style={{margin:"0",textTransform:"capitalize",color:`${theme.modal_headline}`}}>challenges</h2>
            <div style={{height:"2px",width:"8.5em",backgroundColor:"#DBD4D4",margin:"3px 0 0 0"}}></div>
            <ol style={{margin:"10px 20px 0 15px",fontSize:"1.3rem"}}>
                <li style={{lineHeight:"1.6"}} >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </li>
                <li style={{marginTop:"10px",lineHeight:"1.6"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </li>
                <li style={{marginTop:"10px",lineHeight:"1.6"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </li>
                <li style={{marginTop:"10px",lineHeight:"1.6"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </li>
            </ol>
         </div>
         <div className="technology_used" style={{padding:"4em 30px 0 30px"}}>
          <h2 style={{textTransform:"capitalize",margin:"0 0 0 0",color:`${theme.modal_headline}`}}>technology used</h2>
          <div style={{height:"2px",width:"13em",backgroundColor:"#DBD4D4",margin:"3px 0 0 0"}}></div>
          <div className="technologies" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
          <div className="one" style={{...technologies}}>
             <img style={{width:"4em",height:"4em"}} src={react} alt='react_img'/>
           <h4>redux</h4>
          </div>
          <div className="two"  style={{...technologies}}>
             <img style={{width:"4em",height:"4em"}} src={ReactRouter} alt='router-img'/>
          <h4>redux</h4>
          </div>
          <div className="three"  style={{...technologies}}>
             <img style={{width:"4em",height:"4em"}} src={redux} alt='redux_img'/>
          <h4>redux</h4>
          
          </div>
          <div className="four" style={{...technologies}}>
          <img style={{width:"4em",height:"4em"}} src={html} alt='redux_img'/>
         <h4>html</h4>
          </div>
          <div className="five"  style={{...technologies}}>
          <img style={{width:"4em",height:"4em"}} src={css} alt='redux_img'/>
          <h4>css</h4>
          </div>
          <div className="six"  style={{...technologies}}>
          <img style={{width:"4em",height:"4em"}} src={visual} alt='redux_img'/>
          <h4>vs code</h4>
          
          </div>
         </div>
          </div>
         
         <div className="footer" style={{padding:"4em 30px 4em 30px",display:"flex",justifyContent:"space-between"}}>
           <div className="website">
              <h5 style={{textTransform:"capitalize"}}> <a href="https://xenodochial-leakey-21e6d8.netlify.app/" target="_blank"> Go To Website</a>  </h5>
           </div>
           <div className="repo">
    <h5 style={{textTransform:"capitalize"}}><a href="https://github.com/freakyjones/supertrivia" target="_blank"> Go To Repo</a></h5>
           </div>
         </div>
             
       
        </div>
        </div>
    )
}

export default ProjectDetails;