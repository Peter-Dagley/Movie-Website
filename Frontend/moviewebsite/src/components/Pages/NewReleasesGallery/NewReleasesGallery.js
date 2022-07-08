import React from 'react'
import NewReleasesAPI from './NewReleasesAPI'

const NewReleasesGallery = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='container-lg'>
          
          <div className='container' id='header' align="center">
            <h1 className='subtitle'>New Releases</h1>
          </div>

          <br></br>

          <div className='container'>
            <NewReleasesAPI />
          </div>

      </div>
    </div>
    </>
  )
}

export default NewReleasesGallery
