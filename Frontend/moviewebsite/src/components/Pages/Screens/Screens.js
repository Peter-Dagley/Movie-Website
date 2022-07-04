import React from 'react'
import { Link } from "react-router-dom"
import ScreenImg1 from "Frontend/moviewebsite/src/Img/Screen-1.jpg"
import ScreenImg2 from "Frontend/moviewebsite/src/Img/Screen-2.jpg"
import ScreenImg3 from "Frontend/moviewebsite/src/Img/Screen-3.jpg"
import ScreenImg4 from "Frontend/moviewebsite/src/Img/Screen-4.jpg"


const Screens = () => {
  return (
    <div>
      
   <h3> Screen 1 - Standard</h3>
   <img src={ScreenImg1} alt='Screen-1' width="600" height="500" /><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>

 
   <h3> Screen 2 - Standard </h3>
   <img src={ScreenImg2} alt='Screen-2' width="600" height="500" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>


   <h3> Screen 3 - Standard </h3>
   <img src={ScreenImg3} alt="Screen-3" width="600" height="500" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>


   <h3> Screen 4 - IMAX </h3>
   <img src={ScreenImg4} alt="Screen-4" width="600" height="500" /><br/>
   <br/><br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>





    </div>  
  )
}

export default Screens
