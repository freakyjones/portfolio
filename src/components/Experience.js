import React from 'react';

import experience_img from '../img/pro.png'
import expe_back from '../img/expe_back.png'
import mobile_expe_beck from '../img/mobile_expe_beck.svg'
import tablet_expe_beck from'../img/tablet_exp_beck.svg'; 
import {useMediaQuery} from 'react-responsive';

let section_container={padding:"50px 0 0 0"};
let headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
let para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"30rem",width:"100%",color:"#986136",fontSize:"1.2rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.5"}
let back_img ={marginTop:"15px",backgroundImage:`url(${expe_back})`,backgroundSize:"cover",display:"flex",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat"}
let exp_img={width:"20em",height:"15em",marginLeft:"50em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))"}
let exp_btn={height:"2.5em",width:"8em",margin:"10em 0 0 5em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))"}
const Experience=()=>{
    let ismobile=useMediaQuery({query:`
    (max-width:500px)`})
    let is_mobile_landscape=useMediaQuery({query:`
    (max-width:700px)`})
    let is_tablet=useMediaQuery({query:`
    (max-width:968px)`})
    let is_laptop=useMediaQuery({query:`
  (max-width:1200px)`})
    if(ismobile){
        section_container={padding:"50px 0px 0 0px"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"center"}
        para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"20rem",width:"100%",color:"#986136",fontSize:"0.9rem",margin:"1rem 0 0 0",textAlign:"center",lineHeight:"2",margin:"0 auto"}
        back_img ={marginTop:"30px",backgroundImage:`url(${mobile_expe_beck})`,backgroundSize:"cover",height:"20em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative"}
        exp_img={width:"15em",height:"10em",marginLeft:"10%",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",position:"absolute",top:"0"}
        exp_btn={height:"2.5em",width:"8em",margin:"15em auto 0 10%",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
         }
    }else if(is_mobile_landscape){
        section_container={padding:"50px 0 0 0"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left",margin:"0 0 0 20px"}
        para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"20rem",width:"100%",color:"#986136",fontSize:"0.9rem",margin:"1rem 0 0 20px",textAlign:"left",lineHeight:"2",}
        back_img ={marginTop:"30px",padding:"0 20px 0 20px",backgroundImage:`url(${mobile_expe_beck})`,backgroundSize:"cover",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",display:"flex",justifyContent:"space-between"}
        exp_img={width:"15em",height:"10em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",margin:"20px 0 0 20px"}
        exp_btn={height:"2.5em",width:"8em",margin:"5rem 0 0 0",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
         }
    }else if(is_tablet){
        section_container={padding:"50px 0 0 0"}
        headline={fontSize:"2rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left",margin:"0 0 0 30px"}
        para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"20rem",width:"100%",color:"#986136",fontSize:"1rem",margin:"1rem 0 0 30px",textAlign:"left",lineHeight:"2",}
        back_img ={marginTop:"30px",padding:"0 30px 0 30px",backgroundImage:`url(${tablet_expe_beck})`,backgroundSize:"cover",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",display:"flex",justifyContent:"space-between"}
        exp_img={width:"15em",height:"10em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",margin:"30px 0 0 30px"}
        exp_btn={height:"2.5em",width:"8em",margin:"5rem 0 0 0",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
         } 
    }else if(is_laptop){
        section_container={padding:"50px 0 0 0"}
        headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left",margin:"0 0 0 40px"}
        para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"20rem",width:"100%",color:"#986136",fontSize:"1.1rem",margin:"1rem 0 0 40px",textAlign:"left",lineHeight:"2",}
        back_img ={marginTop:"30px",padding:"0 40px 0 40px",backgroundImage:`url(${ expe_back})`,backgroundSize:"cover",height:"25em",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",display:"flex",justifyContent:"space-between"}
        exp_img={width:"15em",height:"10em",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",margin:"30px 0 0 30px"}
        exp_btn={height:"2.5em",width:"8em",margin:"5rem 0 0 0",filter: "drop-shadow(8.1539px 8.1539px 3.26156px rgba(0, 0, 0, 0.25))",
         } 
    }
    return(
        <section id="experience" style={{...section_container}}>
          <div className="container">
              <div className="main_experience">
              <h2 style={{...headline}}>#experience</h2>
              <p style={{...para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
              </div>
              <div className="experience_details" style={{...back_img}}>
              <button className="ui button" style={{...exp_btn}}>details</button>
                  <div className="experience_img" style={{...exp_img}}> 
                      <img src={experience_img} alt="exp_img" style={{width:"100%",height:"100%"}}/>
                 </div> 
              
              </div>
          </div>
        </section>
    )  
}

export default Experience;