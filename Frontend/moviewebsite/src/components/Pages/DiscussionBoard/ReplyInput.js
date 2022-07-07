import React from 'react';
import axios from 'axios';
import { useState } from 'react';


// Will probably need functions to add replies to a specific discussion ? 
// Atm it would just function as a pure comment board

const ReplyInput = (fetchData, fetch) => {
  const [textInput, setTextInput] = useState();
  const [idInput, setIdInput] = useState();
  const [commentInput, setCommentInput] = useState();

  // API to add discussion to database
  const postReply = () => {
    if (textInput === "") {
      console.log("Empty fields.")
      alert("Empty fields.")
    } else {
    axios.post("http://localhost:4000/replies/createReply", {title : textInput})
      .then((response) => {
        fetch(!fetchData);
        console.log(response);
      }).catch((err) => {
        console.log(err);
      });
    }}

    // API to add a reply to the discussion
  const postComment = () => {
    if (idInput === "" || commentInput === "") {
      console.log("Empty fields.")
      alert("Empty fields.")
    } else {
    axios.patch(`http://localhost:4000/replies/addReply/${idInput}`, {content : commentInput})
      .then((response) => {
        fetch(!fetchData);
        console.log(response);
      }).catch((err) => {
        console.log(err);
      });
    }}


  
  return (
    <>
    <div>
      <input type='text' className='titleInput' value={textInput} placeholder='Create a discussion here...' onChange={(e) => setTextInput(e.target.value)}></input>
      <button id='submitReply' onClick={postReply}>Submit discussion...</button>
    </div>
    <div>
      <input type='number' className='idInput' value={idInput} placeholder='Topic ID...' onChange={(e) => setIdInput(e.target.value)}></input>
      <input type='text' className='commentInput' value={commentInput} placeholder='Leave a comment here...' onChange={(e) => setCommentInput(e.target.value)}></input>
      <button id='submitComment' onClick={postComment}>Submit comment...</button>
    </div>
    </>
  )
}

export default ReplyInput