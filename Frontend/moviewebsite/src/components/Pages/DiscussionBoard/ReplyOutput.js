import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const ReplyOutput = () => {
    const [replies, setReplies] = useState([]);
   
    // API to add reply to database
    // WIP
    const postReply = () => {
        axios.post("") // API to post replies
            .then((response) => {
                addReply(response);
                console.log(response)
            });
    };

    // Add replys to page
    // WIP
    const addReplies = () => {
        axios.get("") // API to get replies
            .then((response) => {
                setReplies(response.data);
                console.log(response.data)
            });
    };

    useEffect(() => {
        addReplies()
    }, [postReply])
  
    // Display all replies on page -- object would contain an ID and CONTENT
    // WIP
    return (
    <>
    {replies.map(({id, content}) =>
        <div id={id} className='card'>
            <p>{id} {content}</p> 
        </div>
         )}
    </>
    )
}

export default ReplyOutput