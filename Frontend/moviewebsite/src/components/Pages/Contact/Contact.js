import React from "react";


const Contact = () => {
  return <div>
    <h1> Contact Page</h1>
    <p>Please feel free to contact us for any enquiries</p>

    <h2>Contact us via email</h2>
    <form action="https://formsubmit.co/87393ec81fcbba0211622f33c93f1126" method="POST">
    <label for="fname">First Name</label>
      <input type="text" placeholder="Your name.." ></input>
  
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

      <label for="email">Email</label>
      <input type="email" name="email" placeholder="Your email address..." ></input>

      <label for="Subject">Enter Subject </label>
      <input type="textarea" name="textValue" placeholder="Enter content here"></input>
  
      
      <button type="submit">Send</button>
     </form> <br/>          
    <h2>Contact us via post</h2>
    <p>435 Cinema Street</p>
    <p>London</p>
    <p>CE15 4AU</p>

    <h2>Contact us via phone</h2>
    <p>+44 208 675 6554</p>


  </div>
};

export default Contact;
