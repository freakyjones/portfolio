import React from 'react'
import {useMediaQuery} from 'react-responsive'
let section_container={padding:"50px 0 0 0"}
let heading={fontSize:"2.5rem",color:"#100DAD",fontWeight:"bolder"}
let programing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777"}
let programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
let skill_container={marginTop:"1rem",width:"30%"}
let skill_icon={margin:"10px 0  0 0"}
let skill_headline={margin:"15px 0  0 0",fontSize:"1.5rem",color:"#3E1EC3"}
let skill_para={color:"#725555",marginTop:"15px",maxWidth:"16rem",lineHeight:"1.5"}
let designing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777"}
let design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
const Skills=()=>{
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
      heading={fontSize:"1.8rem",color:"#100DAD",fontWeight:"bolder",textAlign:"center"}
      programing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1rem",textAlign:"center"}
      programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"column"}
      skill_container={marginTop:"1rem",width:"100%"}
      skill_para={color:"#725555",margin:"15px auto 0 auto",maxWidth:"16rem",lineHeight:"1.5",textAlign:"center",fontSize:"0.9rem"}
      skill_headline={margin:"15px 0  0  0",fontSize:"1.5rem",textAlign:"center",color:"#3E1EC3"}
      skill_icon={margin:"10px auto  0 auto",width:"100%" }
      designing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1rem",textAlign:"center"}
      design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between",flexDirection:"column"}
   }else if(is_mobile_landscape){
      section_container={padding:"50px 20px 0 20px"}
      heading={fontSize:"1.8rem",color:"#100DAD",fontWeight:"bolder",textAlign:"left"}
      programing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1rem",textAlign:"left"}
      programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
      skill_container={marginTop:"1rem",width:"50%"}
      designing_style={marginTop:"1rem",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1rem",textAlign:"left"}
      skill_para={color:"#725555",margin:"15px 0 0 0",maxWidth:"16rem",lineHeight:"1.5",textAlign:"left",fontSize:"0.9rem"}
      skill_headline={margin:"15px auto  0  auto",fontSize:"1.5rem",textAlign:"left",color:"#3E1EC3"}
      skill_icon={margin:"10px 0  0 "}
      design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
   }else if(is_tablet){
      section_container={padding:"50px 30px 0 30px"}
      heading={fontSize:"2rem",color:"#100DAD",fontWeight:"bolder",textAlign:"left"}
      programing_style={margin:"2rem 0 0 0",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1.1rem",textAlign:"left",}
      programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"0"}
      skill_container={marginTop:"1rem",width:"50%"}
      designing_style={margin:"2rem 0 0 0",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1.1rem",textAlign:"left"}
      skill_para={color:"#725555",margin:"15px 0 0 0",maxWidth:"16rem",lineHeight:"1.5",textAlign:"left",fontSize:"1rem"}
      skill_headline={margin:"15px auto  0  auto",fontSize:"1.5rem",textAlign:"left",color:"#3E1EC3"}
      skill_icon={margin:"10px 0  0 "}
      design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
   }else if(is_laptop){
      section_container={padding:"50px 40px 0 40px"}
      heading={fontSize:"2.5rem",color:"#100DAD",fontWeight:"bolder",textAlign:"left"}
      programing_style={margin:"2rem 0 0 0",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1.3rem",textAlign:"left",}
      programing_skill_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"0"}
      skill_container={marginTop:"1rem",width:"30%"}
      designing_style={margin:"2rem 0 0 0",fontWeight:"400",textTransform:"uppercase",letterSpacing:"10px",color:"#8E7777",fontSize:"1.3rem",textAlign:"left"}
      skill_para={color:"#725555",margin:"15px 0 0 0",maxWidth:"16rem",lineHeight:"1.5",textAlign:"left",fontSize:"1rem"}
      skill_headline={margin:"15px auto  0  auto",fontSize:"1.5rem",textAlign:"left",color:"#3E1EC3"}
      skill_icon={margin:"10px 0  0 "}
      design_style_container={display:"flex",flexWrap:"wrap",justifyContent:"space-between"}
   }
    return(
        <section id="skills" style={{...section_container}}>
           <div className="container">
               <div className="main_skills">
                   <h2 style={{...heading}}>#skills</h2>
                   <div className="programing">
                     <h3 style={{...programing_style}}>programing</h3>
                     <div className="programing_skills" style={{...programing_skill_container}}>
                        <div className="skill1" style={{...skill_container}}>
                        <i class="html5 red huge icon"  style={{...skill_icon}}></i>
                          
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                        </div>
                        <div className="skill2"  style={{...skill_container}}>
                        <i class="css3 blue huge icon" style={{...skill_icon}}></i>
                     
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                        </div>
                        <div className="skill3" style={{...skill_container}}>
                        <i class="js orange huge icon" style={{...skill_icon}}></i>
                          
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                        </div>
                        <div className="skill3" style={{...skill_container}}>
                        <i class="react  loading blue huge icon" style={{...skill_icon}}></i>
                          
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                        </div>
                        <div className="skill3" style={{...skill_container}}>
                        <i class="node grey huge icon"  style={{...skill_icon}}></i>
                          
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                        </div>
                        <div className="skill3" style={{...skill_container}}>
                        <i class="sass purple huge icon" style={{...skill_icon}}></i>
                          
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                        </div>
                     </div>
                     <h3 style={{...designing_style}}>designing</h3>
                     <div className="design_skills" style={{...design_style_container}}>
                       <div className="skill1" style={{...skill_container}}>
                       <img src="#" alt="img1" style={{...skill_icon}}/>
                         
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                       </div>
                       <div className="skill1" style={{...skill_container}}>
                       <img src="#" alt="img1" style={{...skill_icon}}/>
                         
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                       </div>
                       <div className="skill1" style={{...skill_container}}>
                       <img src="#" alt="img1" style={{...skill_icon}}/>
                        
                           <p style={{...skill_para}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC........</p>
                       </div>
                     </div>
                   </div>
              </div> 
           </div>
        </section>
    )
}

export default Skills;