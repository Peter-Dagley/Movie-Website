import React from 'react'

// Will probably need functions to add replies to a specific discussion ? 
// Atm it would just function as a pure comment board
const ReplyInput = () => {
  return (
    <>
    <input placeholder='Reply here...'></input>

    <button id='submitReply'>Submit</button>
    </>
  )
}

export default ReplyInput