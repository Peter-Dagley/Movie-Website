import React from 'react'
import ScreenImg1 from "../../Images/Img/Screen-1.jpg"
import ScreenImg2 from "../../Images/Img/Screen-2.jpg"
import ScreenImg3 from "../../Images/Img/Screen-3.jpg"
import ScreenImg4 from "../../Images/Img/Screen-4.jpg"
import "./ScreensStyles.css"


const Screens = () => {
  return (
 
  <div align="center">
   <h1 className="subtitle">Screens</h1>
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