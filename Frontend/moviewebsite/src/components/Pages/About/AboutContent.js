import React from 'react'
import { Link } from "react-router-dom";
// import AboutImage from "Frontend/moviewebsite/src/Img/about-1.jpg"

const AboutContent = () => {
  return (
    <div>
            <div class="row">
                <div class="col">
                    <center>
                        <h2> About QA Cinema </h2>

                        The four fantastic founders of QA Cinema, Naima Afrah, Salma Hassan, Peter Dagley, Kim Wong formed the company in June 2022.

                        It has emerged as one of the UK's top film distribution companies in recent years. <br />
                        <br />
                        <div className="column">
                            {/* <img src={AboutImage} alt="cinema picture" width="555" /> */}
                        </div>

                        The staff at QA Cinemas takes pride in showing the latest movies like Elvis, Thor: Love and thunder, Minions: The Rise of Gru and Jurassic World: Dominion in theatres.

                        It not only offers fantastic moviegoing experiences, but also the best customer service.<br />
                        <br />

                        Your <Link to="/DiscussionBoard"><u>reviews</u></Link> are important to us because we're always looking for ways to make our customers' experiences better.
                    </center><br /><br />
                </div>
            </div>
        </div>
  )
}

export default AboutContent
