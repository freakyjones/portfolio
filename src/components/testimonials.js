import React from 'react'
import testi_img from '../img/teti_img.png'
import back from '../img/testi_back.png'
import {useMediaQuery} from 'react-responsive'
let section_container={backgroundImage:`url(${back})`,margin:"50px 0 0 0",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"31em"}
let headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
let section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"48%"}
let text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"1.2rem",marginTop:"1rem",color:"#3F3F84",lineHeight:"1.5",textAlign:"center"}
const Testimonials=()=>{
    let ismobile=useMediaQuery({query:`
    (max-width:500px)`})
    let is_mobile_landscape=useMediaQuery({query:`
    (max-width:700px)`})
    let is_tablet=useMediaQuery({query:`
    (max-width:968px)`})
    let is_laptop=useMediaQuery({query:`
    (max-width:1200px)`})
    if(ismobile){
        section_container={margin:"0 15px 0 15px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"25em"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"center"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"42%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"0.9rem",marginTop:"1rem",color:"#3F3F84",lineHeight:"2",textAlign:"center"}
    }else if(is_mobile_landscape){
        section_container={margin:"0 20px 0 20px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"25em"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"42%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"0.9rem",marginTop:"1rem",color:"#3F3F84",lineHeight:"2",textAlign:"center"}
    }else if(is_tablet){
        section_container={margin:"0 30px 0 30px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"25em"}
        headline={fontSize:"2rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"45%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"1rem",marginTop:"1rem",color:"#3F3F84",lineHeight:"2",textAlign:"center"}
    }else if(is_laptop){
        section_container={margin:"0 40px 0 40px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"25em"}
        headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"48%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"1rem",marginTop:"1.1rem",color:"#3F3F84",lineHeight:"2",textAlign:"center"}  
    }
    return(
        <section id="Testimonials" style={{...section_container }}>
            <div className="container">
              <div className="main_testimonials"style={{padding:"50px 0 0 0"}}>
              <h2 style={{...headline}}>#testimonials</h2>
                 <div className="tetimonis">
                     <div className="testi_img" style={{...section_img}}>
                      <img src={testi_img} alt="prof_img" style={{width:"100%",height:"100%",textAlign:"center",}} />
                     </div>
                     <div className="test_defi" style={{...text_defi}}>
                         <p style={{}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
                     </div>
                     <h4 style={{textAlign:"center",fontSize:"1.2rem",textTransform:"capitalize",color:"#8F8888",margin :"20px 0 0 0"}}>freaky jones</h4>
                     <p style={{textAlign:"center",color:"#B4B7B0" }}>founder && ceo of  connectclub.in</p>
                 </div>
              </div>
            </div>
        </section>
    )
}

export default Testimonials;