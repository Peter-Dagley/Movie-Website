import React from "react";


const Contact = () => {
  return <div>
    <h1> Contact Page</h1>
    <p>Welcome to our contact page, please feel free to contact us for any enquiries</p>

   
    <h2>Contact us via email</h2>
    <form action="https://submit-form.com/jEKHvH5d">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Name" required="" />
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Email" required="" />
  <label for="message">Message</label>
  <textarea
    id="message"
    name="message"
    placeholder="Message"
    required=""
  ></textarea>
  <button type="submit">Send</button>
</form>
<br/>

              
    <h2>Contact us via post</h2>
    <p>435 Cinema Street</p>
    <p>London</p>
    <p>CE15 4AU</p>

    <h2>Contact us via phone</h2>
    <p>+44 208 675 6554</p>


  </div>
};

export default Contact;
