const router = require("express").Router();
const Price = require("../models/priceModels");

router.get
('/prices', function(request, response)
    {
        Price.find
        ({}, (error, pricelist) =>
            {
                let prices = []

                if (error)
                {
                    console.log('Error prices ' + error)
                    prices.push({"error":"Error prices" + error})
                }
                else
                {
                    for (let i in pricelist)
                    {
                        prices.push(pricelist[i])
                    }
                }

                response.send(prices)
            }
        )
    }
)

module.exports = router;