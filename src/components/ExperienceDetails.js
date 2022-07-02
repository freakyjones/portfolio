import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ExperienceDetails=(props)=>{
   const [theme,set_theme]=useContext(ThemeContext)
    return(
       <div  style={{background: "rgba(219, 212, 212, 0.6)",width:"100vw",height:"100vh",zIndex:"100",position:"fixed",top:0,left:0,opacity:"100%",backgroundColor:`${theme.modal_background}`,overflowY:"scroll",color:`${theme.modal_paragraph}`}}>
        <div id="project" style={{width:"100%",maxWidth:"1000px",margin:"0 auto",overflowY:"scroll"}}>
            <div className="header" style={{display:"flex"}}>
            <div className="project_summery"  style={{padding:"4em 30px 0 30px",}}>
             <h2 style={{margin:"0 0 0 0",textTransform:"capitalize",color:`${theme.modal_headline}`}}>traning summery</h2>
            <div style={{height:"2px",width:"13em",backgroundColor:"#DBD4D4",margin:"3px 0 0 0"}}></div>
            <p style={{marginTop:"10px",lineHeight:"1.6"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
         </div>
         <div className="close_modal" style={{padding:"1em 0 0 0"}}>
         <i class="times big circle icon"  onClick={props.close_dimmer}></i>
         </div>
            </div>
       
         <div className="challenges" style={{padding:"4em 30px 0 30px"}}>
            <h2 style={{margin:"0",textTransform:"capitalize",color:`${theme.modal_headline}`}}>Projects</h2>
            <div style={{height:"2px",width:"8.5em",backgroundColor:"#DBD4D4",margin:"3px 0 0 0"}}></div>
            <ol style={{margin:"10px 20px 0 15px"}}>
                <li style={{lineHeight:"1.6"}} >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </li>
                <li style={{marginTop:"10px",lineHeight:"1.6"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </li>
                <li style={{marginTop:"10px",lineHeight:"1.6"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </li>
                <li style={{marginTop:"10px",lineHeight:"1.6"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </li>
            </ol>
         </div>
         <div className="technology_used" style={{padding:"4em 30px 0 30px"}}>
          <h2 style={{textTransform:"capitalize",margin:"0 0 0 0",color:`${theme.modal_headline}`}}>technology used</h2>
          <div style={{height:"2px",width:"13em",backgroundColor:"#DBD4D4",margin:"3px 0 0 0"}}></div>
          <div className="technologies" style={{display:"flex",flexWrap:"wrap",justifyContent:"left"}}>
          <div className="one" style={{border:"2px solid #fff",width:"12em",height:"12em",margin:"30px 0 0 0 ",borderRadius:"1.5em"}}>
           <h4>redux</h4>
          </div>
          <div className="one"  style={{border:"2px solid #fff",width:"12em",height:"12em",margin:"30px 0 0 200px ",borderRadius:"1.5em"}}>
          <h4>redux</h4>
          </div>
          <div className="one"  style={{border:"2px solid #fff",width:"12em",height:"12em",margin:"30px 0 0 200px ",borderRadius:"1.5em"}}>
          <h4>redux</h4>
          
          </div>
          <div className="one" style={{border:"2px solid #fff",width:"12em",height:"12em",margin:"30px 0 0 0px ",borderRadius:"1.5em"}}>
           <h4>redux</h4>
          </div>
          <div className="one"  style={{border:"2px solid #fff",width:"12em",height:"12em",margin:"30px 0 0 200px ",borderRadius:"1.5em"}}>
          <h4>redux</h4>
          </div>
          <div className="one"  style={{border:"2px solid #fff",width:"12em",height:"12em",margin:"30px 0 0 200px ",borderRadius:"1.5em"}}>
          <h4>redux</h4>
          
          </div>
         </div>
          </div>
         
         <div className="footer" style={{padding:"4em 30px 4em 30px",display:"flex",justifyContent:"space-between"}}>
           <div className="website">
              <h5 style={{textTransform:"capitalize"}}>go to the website</h5>
           </div>
           <div className="repo">
    <h5 style={{textTransform:"capitalize"}}>{props.details}</h5>
           </div>
         </div>
             
       
        </div>
        </div>
    )
}

export default ExperienceDetails;