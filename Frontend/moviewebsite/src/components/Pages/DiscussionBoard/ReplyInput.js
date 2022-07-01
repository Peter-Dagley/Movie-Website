import React from 'react';
import axios from 'axios';
import ReplyOutput, { viewReplies } from './ReplyOutput';
import { useState, useEffect } from 'react';
import { props, useRef } from 'react';

// Will probably need functions to add replies to a specific discussion ? 
// Atm it would just function as a pure comment board

const ReplyInput = (fetchData, fetch) => {
  const [textInput, setTextInput] = useState();

  // API to add reply to database
  const postReply = () => {
    if (textInput === "") {
      console.log("Empty fields.")
      alert("Empty fields.")
    } else {
    axios.post("http://localhost:4000/replies/createReply", {content : textInput})
      .then((response) => {
        fetch(!fetchData);
        console.log(response);
      }).catch((err) => {
        console.log(err);
      });
    }}
  
  return (
    <>
    <input value={textInput} placeholder='Reply here...' onChange={(e) => setTextInput(e.target.value)}></input>

    <button type='text' id='submitReply' onClick={postReply}>Submit</button>
    </>
  )
}

export default ReplyInput