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

          <div className='container' id='header'>
            <Listings />
          </div>

      </div>
    </div>
    </>
  )
}

export default ListingsGallery