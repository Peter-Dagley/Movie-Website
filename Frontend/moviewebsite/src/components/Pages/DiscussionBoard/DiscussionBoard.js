import React from 'react'
import ReplyInput from './ReplyInput'
import ReplyOutput from './ReplyOutput'
import './DiscussionBoardStyles.css'

const DiscussionBoard = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='container-lg'>
          
          <div className='container' id='header'>
            <h1 className='text1'>Discussion Board</h1>
          </div>

          <br></br>

          <div className='container'>
            <h2 className='text1'>Posts</h2>
            <ReplyOutput />
          </div>

          <div className='container'>
            <h2 className='text1'>Leave a Comment</h2>
            <ReplyInput />
          </div>

      </div>
    </div>
    </>
  )
}

export default DiscussionBoard