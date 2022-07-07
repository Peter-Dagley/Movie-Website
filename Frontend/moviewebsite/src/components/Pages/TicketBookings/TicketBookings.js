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
    <AliceCarousel autoPlay infinite autoplayInterval="5000">
      {images.map
        ((image) =>
          (
            image 
          )
        )
      }
    </AliceCarousel>

    <Link className='link' to="/location">Book Your Tickets</Link>
  </div>
  )
}

export default TicketBookings