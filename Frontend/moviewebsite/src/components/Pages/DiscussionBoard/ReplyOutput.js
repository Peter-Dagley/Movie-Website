import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const ReplyOutput = () => {
    const [replies, setReplies] = useState([]);
    const [fetch, setFetch] = useState(false);
   
    // Add replys to page
    const viewReplies = () => {
        axios.get("http://localhost:4000/replies/readReplies")
            .then((response) => {
                setReplies(response.data);
                console.log(response.data)
            });
    };

    const fetchData = () => {
        setFetch(replies)
    }

    useEffect(() => {
        viewReplies()
    }, [fetchData])
  
    // Display all replies on page -- object would contain an ID, TITLE and COMMENTS
    return (
    <>
    {replies.map(({_id, title, content}) =>
        <div key={_id} id={_id} className='card'>
            <div className='card-header'>
                <div className='card-header-title'>
                    <p>{_id} {title}</p>
                </div>
            </div>
            <div className='card-content'>
                <div className='content'>
                    {content.map((content) => <li>{content}</li>)}
                </div>
            </div> 
        </div>
         )}
    </>
    )
}

export default ReplyOutput