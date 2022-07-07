const router = require("express").Router();
const Payment = require("../models/paymentModels");

router.post
('/payment/add', function(request, response)
    {
        let booking = request.body.content
        let payment = 
            {'adults':booking.adults
            ,'children':booking.children
            ,'date':booking.date
            ,'time':booking.time
            ,'card': booking.card
            ,'amount':booking.amount
            ,'reference':booking.reference
            }

        console.log('payment ' + payment)

    	Payment.create(payment)
      	.then((result) => response.status(201).send(result))
      	.catch((error) => console.log('Error payment/add ' + error))
    }
)

module.exports = router;