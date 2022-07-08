import React from "react";
import './ContactStyles.css';


const Contact = () => {
  return <div align="center">
    <h1 className='subtitle'> Contact Page</h1>
    <p className='primary'>Welcome to our contact page, please feel free to contact us for any enquiries</p>

   
    <h2 className='primary'>Contact us via email</h2>
    <form action="https://submit-form.com/jEKHvH5d">
      <table>
        <tr>
            <td><label for="name" className='primary'>Name</label></td>
            <td><input type="text" id="name" name="name" placeholder="Name" required="" /></td>
        </tr>
        <tr>
          <td><label for="email" className='primary'>Email</label></td>
          <td><input type="email" id="email" name="email" placeholder="Email" required="" /></td>
        </tr>
        <tr>
          <td><label for="message" className='primary'>Message</label></td>
          <td>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required=""
            ></textarea>
          </td>
        </tr>
        <tr>
          <td><button type="submit" className='button'>Send</button></td>
        </tr>
      </table>
  
</form>
<br/>

              
    <h2 className='primary'>Contact us via post</h2>
    <p className='primary'>435 Cinema Street</p>
    <p className='primary'>London</p>
    <p className='primary'>CE15 4AU</p>

    <h2 className='primary'>Contact us via phone</h2>
    <p className='primary'>+44 208 675 6554</p>


  </div>
};

export default Contact;
