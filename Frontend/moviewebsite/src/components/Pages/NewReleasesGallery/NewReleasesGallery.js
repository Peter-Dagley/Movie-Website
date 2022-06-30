import React from 'react'
import NewReleasesAPI from './NewReleasesAPI'

const NewReleasesGallery = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='container-lg'>
          
          <div className='container' id='header'>
            <h1 className='text1'>New Releases</h1>
          </div>

          <br></br>

          <div className='container'>
            <h2 className='text1'></h2>
            <NewReleasesAPI />
            
          </div>

      </div>
    </div>
    </>
  )
}

export default NewReleasesGallery