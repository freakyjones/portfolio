import React from 'react'
import {useMediaQuery} from 'react-responsive'
let heading={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
let section_container={padding:"50px 0 0 0"}
let para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"50rem",width:"100%",color:"#986136",fontSize:"1.2rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.5"}
const Intro=()=>{
  let ismobile=useMediaQuery({query:`
  (max-width:500px)`})
  let is_mobile_landscape=useMediaQuery({query:`
  (max-width:700px)`})
  let is_tablet=useMediaQuery({query:`
  (max-width:968px)`})
  let is_laptop=useMediaQuery({query:`
  (max-width:1200px)`})
  if(ismobile){
    section_container={padding:"50px 15px 0 15px"}
    heading={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"center"}
    para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"50rem",width:"100%",color:"#986136",fontSize:"0.9rem",margin:"1rem auto 0 auto",textAlign:"center",lineHeight:"2"}
  }else if(is_mobile_landscape){
    section_container={padding:"50px 20px 0 20px"}
    para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"50rem",width:"100%",color:"#986136",fontSize:"0.9rem",margin:"1rem auto 0 auto",textAlign:"left",lineHeight:"1.7"}
    heading={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
  }else if(is_tablet){
    section_container={padding:"50px 30px 0 30px"}
    para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"40rem",width:"100%",color:"#986136",fontSize:"1rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.7"}
    heading={fontSize:"2rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
  }else if(is_laptop){
    section_container={padding:"50px 40px 0 40px"}
    para={textTransform:"capitalize",fontWeight:"normal",maxWidth:"45rem",width:"100%",color:"#986136",fontSize:"1.1rem",margin:"1rem 0 0 0",textAlign:"left",lineHeight:"1.7"}
    heading={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
  }
    return(
        <section id="intro" style={{...section_container}}>
            <div className="container">
              <div className="intro_main">
                 <div className="intro_header" >
                   <h2 style={{...heading}}>#who am i</h2>
                   <p style={{...para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more. 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cons </p>
                 </div>
              </div>
            </div>
        </section>
    )
}

export default Intro;