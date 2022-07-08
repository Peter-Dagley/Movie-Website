import React from 'react'
import ReplyInput from './ReplyInput'
import ReplyOutput from './ReplyOutput'
import './DiscussionBoardStyles.css'

const DiscussionBoard = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='container-lg'>
          
          <div className='container' id='header' align="center">
            <h1 className='subtitle'>Discussion Board</h1>
          </div>

          <br></br>

          <div className='container'>
            <h2 className='primary'>Posts</h2>
            <ReplyOutput />
          </div>

          <div className='container'>
            <h2 className='primary'>Leave a Comment</h2>
            <ReplyInput />
          </div>

      </div>
    </div>
    </>
  )
}

export default DiscussionBoard
