import React from 'react'
import {useMediaQuery} from 'react-responsive'

let section_container={backgroundColor:"#3E1EC3",height:"10vh"}
const Header=()=>{
    let ismobile=useMediaQuery({query:`
  (max-width:500px)`})
  let is_mobile_landscape=useMediaQuery({query:`
  (max-width:700px)`})
  let is_tablet=useMediaQuery({query:`
    (max-width:968px)`})
    let is_laptop=useMediaQuery({query:`
    (max-width:1200px)`})
  if(ismobile){
    section_container={backgroundColor:"#3E1EC3",height:"10vh",padding:"0 15px"} 
  }else if(is_mobile_landscape){
    section_container={backgroundColor:"#505072",height:"10vh",padding:"0 20px"} 
  }else if(is_tablet){
    section_container={backgroundColor:"green",height:"10vh",padding:"0 30px"} 
  }else if(is_laptop){
    section_container={backgroundColor:"black",height:"10vh",padding:"0 40px"} 
  }
    return(
        <header style={{...section_container}}>
            <div className="container">
                <div className="main_header" style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"10vh",}}>
                <div className="heading" >
                <h1 style={{fontFamily:"dancing script",color:"#C69875",opacity:"65%"}}>portfolio</h1>
            </div>
            <div className="toggle_button">
              <div className="cover" style={{width:"3em",height:"1.5em",background:"#fff",borderRadius:"1em"}}>
                  <div className="point" style={{width:"1.5em",height:"1.5em",borderRadius:"50%",background:"black"}}>
                      
                  </div>
              </div>
            </div>
                </div>
         
            </div>
        
        </header>
    )
}

export default Header;