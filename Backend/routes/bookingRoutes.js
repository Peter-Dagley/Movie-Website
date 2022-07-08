const router = require("express").Router();
const Booking = require("../models/bookingModels");

router.get
('/bookings/', function(request, response)
    {
        Booking.find
        ({}, (error, bookinglist) =>
            {
                let bookings = []

                if (error)
                {
                    console.log('Error bookings:' + error)
                    bookings.push({"location":"Error bookings: " + error})
                }
                else
                {
                    for (let i in bookinglist)
                    {
                        bookings.push(bookinglist[i])
                    }
                }

                response.send(bookings)
            }
        )
    }
)

router.get
('/bookings/select/location/:id', function(request, response)
    {
        let id = request.params.id

        Booking.find
        ({"location":id}, (error, bookinglist) =>
            {
                let bookings = []

                if (error)
                {
                    console.log('Error bookings/select/location/' + id + ' ' + error)
                    bookings.push({"location":"Error bookings/select/location/" + id + " + error"})
                }
                else
                {
                    bookings.push(bookinglist)
                }

                response.send(bookings)
            }
        )
    }
)

router.post
('/booking/add', function(request, response)
    {
        let booking = request.body.content

    	Booking.create(booking)
      	.then((result) => response.status(201).send(result))
      	.catch((error) => console.log('Error booking/add ' + error))
    }
)

router.get
('/booking/find/:key', function(request, response)
    {
        let key = request.params.key.split('*')
        let location = key[0]
        let date = key[1]
        let cinema = key[2]
        let time = key[3]
        let seat = key[4]

        Booking.find
        ({'location':location, 'date':date, 'cinema':cinema, 'time':time, 'seat':seat}, (error, booking) =>
            {
                if (error)
                {
                    console.log('Error booking find/' + key + ':' + error)
                    response.send({"status":"Error booking/find/" + key + ": " + error})
                }
                else
                {
                    if (booking == '')
                    {
                        response.send({"status":false})
                    }
                    else
                    {
                        response.send({"status":true})
                    }
                }
            }
        )
    }
)

module.exports = router;