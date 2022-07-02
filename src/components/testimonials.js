import React, { useContext, useRef } from 'react'
import testi_img from '../img/teti_img.png'
import back from '../img/testi_back.png'
import {useMediaQuery} from 'react-responsive'
import { ThemeContext } from '../contexts/ThemeContext'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
let section_container={background:"#000",margin:"150px 0 0 0",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"31em"}
let headline={fontSize:"2.5rem",textTransform:"capitalize",color:"#100DAD",fontWeight:"bolder",width:"100%",textAlign:"left"}
let section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"48%"}
let text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"1.2rem",marginTop:"1rem",color:"#3F3F84",lineHeight:"1.5",textAlign:"center"}
let slide_height=20;
const Testimonials=()=>{
    const [theme,set_theme]=useContext(ThemeContext)
   let small_mobile=useMediaQuery({query:`
   (max-width:350px)`})
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
    if(small_mobile){
        section_container={background:`${theme.background_color}`,margin:"0 15px 0 15px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"30em"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"center"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"42%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"0.9rem",marginTop:"1rem",color:`${theme.paragraph_color}`,lineHeight:"2",textAlign:"center"}
        slide_height=100;
    }
   else if(ismobile){
        section_container={background:`${theme.background_color}`,margin:"0 15px 0 15px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"30em"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"center"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"42%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"0.9rem",marginTop:"1rem",color:`${theme.paragraph_color}`,lineHeight:"2",textAlign:"center"}
        slide_height=80;
    }else if(is_mobile_landscape){
        section_container={background:`${theme.background_color}`,margin:"0 20px 0 20px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"25em"}
        headline={fontSize:"1.8rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"42%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"0.9rem",marginTop:"1rem",color:`${theme.paragraph_color}`,lineHeight:"2",textAlign:"center"}
        slide_height=40;
    }else if(is_tablet){
        section_container={background:`${theme.background_color}`,margin:"0 30px 0 30px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"25em"}
        headline={fontSize:"2rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"45%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"1rem",marginTop:"1rem",color:`${theme.paragraph_color}`,lineHeight:"2",textAlign:"center"}
        slide_height=33;
    }else if(is_laptop){
        section_container={background:`${theme.background_color}`,margin:"0 40px 0 40px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"25em"}
        headline={fontSize:"2.5rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
        section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"48%"}
        text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"1rem",marginTop:"1.1rem",color:`${theme.paragraph_color}`,lineHeight:"2",textAlign:"center"}  
        slide_height=25;
    }else{
        if(height_1000){
            section_container={background:`${theme.background_color}`,margin:"150px 0 0 0",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"31em"}
            headline={fontSize:"2.5rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
            section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"48%"}
            text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"1.2rem",marginTop:"1rem",color:`${theme.paragraph_color}`,lineHeight:"1.5",textAlign:"center"}
            slide_height=20;
        }else{
            section_container={background:`${theme.background_color}`,margin:"150px 0 0 0",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"31em"}
            headline={fontSize:"4rem",textTransform:"capitalize",color:`${theme.headline_color}`,fontWeight:"bolder",width:"100%",textAlign:"left"}
            section_img={width:"4em",height:"4em",textAlign:"center",marginLeft:"48%"}
            text_defi={width:"100%",maxWidth:"40em",margin:"0 auto",fontSize:"1.5rem",marginTop:"1rem",color:`${theme.paragraph_color}`,lineHeight:"1.5",textAlign:"center"}
            slide_height=15;
        }
    
    }
    return(
        <section id="Testimonials" style={{...section_container }}>
            <div className="container">
              <div className="main_testimonials"style={{padding:"50px 0 0 0"}}>
              <h2 style={{...headline}}>#testimonials</h2>
              <CarouselProvider  naturalSlideWidth={100}
        naturalSlideHeight={slide_height}
        totalSlides={4}>
            <Slider>
                 <Slide index={0} className="tetimonis">
                     <div className="testi_img" style={{...section_img}}>
                      <img src={testi_img} alt="prof_img" style={{width:"100%",height:"100%",textAlign:"center",}} />
                     </div>
                     <div className="test_defi" style={{...text_defi}}>
                         <p style={{}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
                     </div>
                     <h4 style={{textAlign:"center",fontSize:"1.2rem",textTransform:"capitalize",color:"#8F8888",margin :"20px 0 0 0"}}>freaky jones</h4>
                     <p style={{textAlign:"center",color:"#B4B7B0" }}>founder && ceo of  connectclub.in</p>
                 </Slide>
                 <Slide index={1} className="tetimonis">
                     <div className="testi_img" style={{...section_img}}>
                      <img src={testi_img} alt="prof_img" style={{width:"100%",height:"100%",textAlign:"center",}} />
                     </div>
                     <div className="test_defi" style={{...text_defi}}>
                         <p style={{}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
                     </div>
                     <h4 style={{textAlign:"center",fontSize:"1.2rem",textTransform:"capitalize",color:"#8F8888",margin :"20px 0 0 0"}}>freaky jones</h4>
                     <p style={{textAlign:"center",color:"#B4B7B0" }}>founder && ceo of  connectclub.in</p>
                 </Slide>
                 <Slide index={2} className="tetimonis">
                     <div className="testi_img" style={{...section_img}}>
                      <img src={testi_img} alt="prof_img" style={{width:"100%",height:"100%",textAlign:"center",}} />
                     </div>
                     <div className="test_defi" style={{...text_defi}}>
                         <p style={{}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
                     </div>
                     <h4 style={{textAlign:"center",fontSize:"1.2rem",textTransform:"capitalize",color:"#8F8888",margin :"20px 0 0 0"}}>freaky jones</h4>
                     <p style={{textAlign:"center",color:"#B4B7B0" }}>founder && ceo of  connectclub.in</p>
                 </Slide>
                 <Slide index={3} className="tetimonis">
                     <div className="testi_img" style={{...section_img}}>
                      <img src={testi_img} alt="prof_img" style={{width:"100%",height:"100%",textAlign:"center",}} />
                     </div>
                     <div className="test_defi" style={{...text_defi}}>
                         <p style={{}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, </p>
                     </div>
                     <h4 style={{textAlign:"center",fontSize:"1.2rem",textTransform:"capitalize",color:"#8F8888",margin :"20px 0 0 0"}}>freaky jones</h4>
                     <p style={{textAlign:"center",color:"#B4B7B0" }}>founder && ceo of  connectclub.in</p>
                 </Slide>
                 </Slider>
                 <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                 <DotGroup className="new"></DotGroup>
                 </div>
            
                 </CarouselProvider>
              </div>
            </div>
        </section>
    )
}

export default Testimonials;