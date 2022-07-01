import React from 'react';
import axios from 'axios';
import { viewReplies } from './ReplyOutput';
import { useEffect } from 'react';
import { props, useRef } from 'react';

// Will probably need functions to add replies to a specific discussion ? 
// Atm it would just function as a pure comment board

const ReplyInput = () => {
//   const textInput = useRef(textInputRef);

//   // API to add reply to database
//   const postReply = () => {
//     if (textInput.value === "") {
//       console.log("Empty fields.")
//       alert("Empty fields.")
//     } else {
//     axios.post("http://localhost:4000/replies/createReply", {content : textInput.value})
//       .then((response) => {
//         console.log(response);
//       }).catch((err) => {
//         console.log(err);
//       });
//     }}
  
  return (
    <>
    {/* <input ref={textInputRef} placeholder='Reply here...'></input>

    <button type='text' id='submitReply' onClick={postReply}>Submit</button> */}
    </>
  )
}

export default ReplyInput