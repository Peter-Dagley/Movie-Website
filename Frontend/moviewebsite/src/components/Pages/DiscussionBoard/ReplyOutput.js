import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const ReplyOutput = () => {
    const [replies, setReplies] = useState([]);
   
    // Add replys to page
    const viewReplies = () => {
        axios.get("http://localhost:4000/replies/readReplies")
            .then((response) => {
                setReplies(response.data);
                console.log(response.data)
            });
    };

    useEffect(() => {
        viewReplies()
    }, [])
  
    // Display all replies on page -- object would contain an ID and CONTENT
    return (
    <>
    {replies.map(({_id, content}) =>
        <div key={_id} id={_id} className='card'>
            <p>{_id}: {content}</p> 
        </div>
         )}
    </>
    )
}

export default ReplyOutput