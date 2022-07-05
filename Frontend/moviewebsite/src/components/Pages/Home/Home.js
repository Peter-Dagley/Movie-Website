import React from 'react'
import Trending from './Trending';
import './HomeStyles.css'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className='container-lg'>
        
        <div className='container' id='header'>
          <h1 className='text1'>QA Cinemas</h1>
        </div>
          <div className="column">
            <h3> Welcom to QA Cinema </h3>
              Welcome to QA Cinema Home of the latest and greatest Blockbuster films right now.
            <br/>
      
              <div className="column" >
                {/* <img src={HomeImg} alt="Cinema-Picture.jpeg" width='555' />   <img src={HometImage} alt="Seating-Picture" width='600'  /><br/> */}
              </div>
              <br/>
            
            We always try to strive to provide high quality entertainment at budget friendly prices.
            <Link to="/ticketbookings"><u>here</u></Link>. <br/>

            We are always trying to improve our services to ensure the best experiances for all our customers.
            Please do not hesistate to contact us or leave a message in the discussion board<Link to="/discussionboard"><u>here</u></Link>
          </div>
    </div>
      <div>
        <br></br>

        <div className='container'>
          <h2 className='text1'>Trending Movies</h2>
          <Trending />
          
        </div>

    </div>
    </>
  )
};
export default Home;
