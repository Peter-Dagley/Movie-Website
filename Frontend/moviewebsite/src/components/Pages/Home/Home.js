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
            <h3 className='primary'> Welcom to QA Cinema </h3>
             <p className='primary'> Welcome to QA Cinema Home of the latest and greatest Blockbuster films right now.</p>
            <br/>
      
              <div className="column" >
                {/* <img src={HomeImg} alt="Cinema-Picture.jpeg" width='555' />   <img src={HometImage} alt="Seating-Picture" width='600'  /><br/> */}
              </div>
              <br/>
            
            <p className='primary'> We always try to strive to provide high quality entertainment at budget friendly prices.
            <Link to="/ticketbookings"><u>here</u></Link>. </p><br/>

            <p className='primary'> We are always trying to improve our services to ensure the best experiances for all our customers.
            Please do not hesistate to contact us or leave a message in the discussion board<Link to="/discussionboard"><u>here</u></Link></p>
          </div>
    </div>
      <div>
        <br></br>

        <div className='container'>
          <h2 className='primary'>Trending Movies</h2>
          <Trending />
          
        </div>

    </div>
    </>
  )
};
export default Home;

