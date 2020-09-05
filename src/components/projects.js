import React from 'react'
import card_back from '../img/card_back.png'
import pro from '../img/pro.png'
import {useMediaQuery} from 'react-responsive'

let project_container={display:"flex",alignItems:"center", justifyContent:"space-between"  ,marginTop:"30px"}
let section_container={padding:"50px 0 0 0"}
let headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
let projects_style={width:"25em",height:"20em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em"}
let pro_img={width:"15em",height:"10em",margin:"1em auto 0 auto"}
let pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"300",textTransform:"uppercase",letterSpacing:"10px"}
const Project=()=>{
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
      project_container={display:"flex",alignItems:"center", justifyContent:"space-between"  ,marginTop:"30px",flexDirection:"column"}
      headline={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"center"}
      projects_style={width:"20em",height:"15em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",marginTop:"15px"}
      pro_img={width:"10em",height:"7em",margin:"1em auto 0 auto"}
      pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"200",textTransform:"uppercase",letterSpacing:"10px",}
    }else if(is_mobile_landscape){
        section_container={padding:"50px 20px 0 20px"}
        project_container={display:"flex",alignItems:"center",flexWrap:"wrap", justifyContent:"center"  ,marginTop:"30px"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
        projects_style={width:"20em",height:"15em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",margin:"15px 0 0 10px"}
        pro_img={width:"10em",height:"7em",margin:"1em auto 0 auto"}
        pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"200",textTransform:"uppercase",letterSpacing:"10px",}
    }else if(is_tablet){
        section_container={padding:"50px 30px 0 30px"}
        project_container={display:"flex",alignItems:"center",flexWrap:"wrap", justifyContent:"left"  ,marginTop:"30px"}
        headline={fontSize:"2rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
        projects_style={width:"20em",height:"15em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",margin:"15px 0 0 10px"}
        pro_img={width:"10em",height:"7em",margin:"1em auto 0 auto"}
        pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"200",textTransform:"uppercase",letterSpacing:"10px",}
    }else if(is_laptop){
        section_container={padding:"50px 40px 0 40px"}
        project_container={display:"flex",alignItems:"center",flexWrap:"wrap", justifyContent:"space-between"  ,marginTop:"30px"}
        headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
        projects_style={width:"20em",height:"15em" ,backgroundImage:`url(${card_back})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",borderRadius:"1em",margin:"15px 0 0 0"}
        pro_img={width:"10em",height:"7em",margin:"1em auto 0 auto"}
        pro_tittle={marginLeft:"5em",marginTop:"15px",fontWeight:"200",textTransform:"uppercase",letterSpacing:"10px",}
    }
    return(
        <section id="project"  style={{...section_container}}>
            <div className="container">
              <div className="main_projects" >
              <h2 style={{...headline}}>#projects</h2>
              <div className="projects" style={{...project_container}}>
              <div className="projects1"  style={{...projects_style}}>
              <div className="project_img" style={{...pro_img}}>
                         <img src={pro} alt="img2" style={{width:"100%",height:"100%"}}/>
                     </div>
                     <div className="project_tittle" style={{...pro_tittle}}>
                         <h4>superhero</h4>
                     </div>
                     <button className="ui primary basic button" style={{marginTop:"10px",marginLeft:"5em"}}>details</button>
                </div>
                <div className="projects2"  style={{...projects_style}}>
                <div className="project_img" style={{...pro_img}}>
                         <img src={pro} alt="img2" style={{width:"100%",height:"100%"}}/>
                     </div>
                     <div className="project_tittle" style={{...pro_tittle}}>
                         <h4>superhero</h4>
                     </div>
                     <button className="ui primary basic button" style={{marginTop:"10px",marginLeft:"5em"}}>details</button>
                </div>
                <div className="projects2" style={{...projects_style}}>
                <div className="project_img" style={{...pro_img}}>
                         <img src={pro} alt="img2" style={{width:"100%",height:"100%"}}/>
                     </div>
                     <div className="project_tittle" style={{...pro_tittle}}>
                         <h4>superhero</h4>
                     </div>
                     <button className="ui primary basic button" style={{marginTop:"10px",marginLeft:"5em"}}>details</button>
                </div>
              </div>
              
              </div>
            </div>
        </section>
    )
}

export default Project;