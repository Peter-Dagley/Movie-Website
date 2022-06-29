import React from 'react'
import Trending from './Trending';
import './HomeStyles.css'

const Home = () => {
  return (
  <div className='container-fluid'>
    <div className='container-lg'>
        
        <div className='container' id='header'>
          <h1 className='text1'>QA Cinemas</h1>
        </div>

        <br></br>

        <div className='container'>
          <h2 className='text1'>Trending Movies</h2>
          <Trending />
          
        </div>

    </div>
  </div>
  )
};

export default Home;