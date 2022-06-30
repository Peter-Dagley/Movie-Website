import React from 'react'
import Listings from './Listings'

const ListingsGallery = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='container-lg'>
          
          <div className='container' id='header'>
            <h1 className='text1'>Listings Gallery</h1>
          </div>

          <br></br>

          <div className='container'>
            <Listings />
          </div>

      </div>
    </div>
    </>
  )
}

export default ListingsGallery