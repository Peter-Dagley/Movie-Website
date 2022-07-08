import {Link} from "react-router-dom";
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"

const TicketBookings = () => {
  
  
const ids = 
      ['101'
      ,'102'
      ,'103'
      ,'104'
      ,'105'
      ,'106'
      ,'107'
      ,'108'
      ]

let images = []
for (let i in ids)
{
  images.push(<p><img src={require('../../Images/' + ids[i] + '.jpg')} height="300vh" width="700vw" className="sliderimg" /></p>)
}

  return (
    <div className="slide-container" align="center">
      <h1 className="subtitle">Ticket Bookings</h1>
    <AliceCarousel autoPlay infinite autoplayInterval="5000">
      {images.map
        ((image) =>
          (
            image 
          )
        )
      }
    </AliceCarousel>

    <table>
      <tr><td className="location-label" colSpan="100%">PRICES</td></tr>
      <tr><td className="location-label">adult</td><td className="location-data">£{window.prices['adult'].toFixed(2)}</td></tr>
      <tr><td className="location-label">child</td><td className="location-data">£{window.prices['child'].toFixed(2)}</td></tr>
      <tr><td className="location-label">student</td><td className="location-data">£{window.prices['student'].toFixed(2)}</td></tr>
      <tr><td className="location-label">senior</td><td className="location-data">£{window.prices['oap'].toFixed(2)}</td></tr>
    </table>

    <Link className='link' to="/location">Book Your Tickets</Link>
  </div>
  )
}

export default TicketBookings