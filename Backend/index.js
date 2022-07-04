const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var fs = require('fs')
const { response } = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { nextTick } = require('process')


const app = express()
app.use(cors({origin:true}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


const movieSchema = new Schema 
(
    {
        'id':Number,
        'title': String,
        'release date': String,
        'genre': String,
        'rating': String,
    }
)

const locationSchema = new Schema 
(
    {
        'id': Number,
        'address': Number,
        'city': String,
        'opening times': Number,
        'telephone': String,
        'sessions': [Object]
    }
)

const bookingSchema = new Schema 
(
    {
        'location': Number,
        'date': Date,
        'screen': Number,
        'seat': String,
        'reference': String
    }
)

const priceSchema = new Schema 
(
    {
        'type': String,
        'price': Number
    }
)

// Testing replies collection
const repliesSchema = new Schema
(
    {
        '_id': Number,
        'content': String
    }
)

const Movie = mongoose.model('Movie', movieSchema)
const Location = mongoose.model('Location', locationSchema)
const Booking = mongoose.model('Booking', bookingSchema)
const Price = mongoose.model('Price', priceSchema)
const Replies = mongoose.model('Replies', repliesSchema)

const uri = 'mongodb://localhost:27017/qacinemas';
let opts = { useNewUrlParser: true }

mongoose.connect
(uri, opts,
    function (error) 
    {
        if (error) 
        {
            console.log("Errors: " + error)
        } 
        else 
        {
            console.log("connection ready")
        }
    }
)

app.use(express.json())
app.use(express.static('script'));

app.get
('/movielist', function(request, response)
    {
        Movie.find
        ({}, (error, movies) =>
            {
                let list = []

                if (error)
                {
                    console.log('Error movielist: ' + error)
                    list.push({"id":0, "title":'Error movielist: ' + error})
                }
                else
                {
                    movies.forEach
                    ((movie) =>
                        {
                           list.push(movie)
                        }
                    )
                }

                response.send(list)
            }
        ).sort('title')
    }
)

app.get
('/nowshowing', function(request, response)
    {
        Movie.find
        ({'release date':''}, (error, movies) =>
            {
                let list = []

                if (error)
                {
                    console.log('Error movielist: ' + error)
                    list.push({"id":0, "title":'Error movielist: ' + error})
                }
                else
                {
                    movies.forEach
                    ((movie) =>
                        {
                           list.push({"id":movie.id, "title":movie.title})
                        }
                    )
                }

                response.send(list)
            }
        ).sort('title')
    }
)

app.get
('/comingsoon', function(request, response)
    {
        Movie.find
        ({"release date":{ "$ne": ""}}, (error, movies) =>
            {
                let list = []

                if (error)
                {
                    console.log('Error movielist: ' + error)
                    list.push({"id":0, "title":'Error comingsoon: ' + error})
                }
                else
                {
                    movies.forEach
                    ((movie) =>
                        {
                           list.push({"id":movie.id, "title":movie.title})
                        }
                    )
                }

                response.send(list)
            }
        ).sort('title')
    }
)



app.get
('/movie/select/:id', function(request, response)
    {
        let id = request.params.id

        Movie.find
        ({'id':id}, (error, movie) =>
            {
                if (error)
                {
                    console.log('Error /movie/select/' + id + ': ' + error)
                    movie = [{"id":0, "title":'Error /movie/select/ ' + id + ': ' + error}]
                }

                if (movie == '')
                {
                    movie = [{"id":0, "title":'Cannot find a movie title with the id: ' + id}]
                }

                response.send(movie)
            }
        )
    }
)

app.get
('/movie/search/genre/:genre', function(request, response)
    {
        let genre = request.params.genre

        Movie.find
        ({'genre':genre}, (error, movies) =>
            {
                let list = []

                if (error)
                {
                    console.log('Error /movie/select/genre/'+ genre + ': ' + error)
                    list.push({"id":0, "title":'Error /movie/select/genre/' + genre + ': ' + error})
                }
                else
                {
                    if (movies == '')
                    {
                        list.push("No movie found for genre: " + genre)
                    }
                    else
                    {
                        movies.forEach
                        ((movie) =>
                            {
                                list.push(movie)
                            }
                        )
                    }
                }
                
                response.send(list)
            }

        )
    }
)

app.get
('/movie/search/title/:title', function(request, response)
    {
        let title = request.params.title

        Movie.find
        ({'title':{$regex: title, $options: 'i'}}, (error, movies) =>
            {
                let list = []

                if (error)
                {
                    console.log('Error /movie/select/title/'+ title + ': ' + error)
                    list.push({"id":0, "title":'Error movie/select/title/' + title + ': ' + error})
                }
                else
                {
                    console.log('movies' + movies)
                    if (movies == '')
                    {
                        list.push("No movie title found using the search criteria: " + title)
                    }
                    else
                    {
                        movies.forEach
                        ((movie) =>
                            {
                                list.push(movie)
                            }
                        )
                    }
                }
                
                response.send(list)
            }

        )
    }
)

app.get
('/locationlist', function(request, response)
    {
        let movies = []

        Movie.find
        ({}, (error, movielist) =>
            {
                if (error)
                {
                    console.log('Error locationlist' + id + ' Movie.find: ' + error)
                }
                else
                {
                    movielist.forEach
                    ((movie) =>
                        {    
                            movies[movie.id] = movie.title
                        }
                    )
                }
            }
        )

        Location.find
        ({}, (error, locations) =>
            {
                let list = []

                if (error)
                {
                    console.log('Error locataionlist: ' + error)
                    list.push({"id":0, "city":'Error locationlist: ' + error})
                }
                else
                {
                    locations.forEach
                    ((location) =>
                        {
                            
                            list.push(location)
                        }
                    )
                }

                response.send(list)
            }
        ).sort('city')
    }
)

app.get
('/location/select/:id', function(request, response)
    {
        let id = request.params.id
        let movies = []

        Movie.find
        ({}, (error, movielist) =>
            {
                if (error)
                {
                    console.log('Error location/select/' + id + ' Movie.find: ' + error)
                }
                else
                {
                    movielist.forEach
                    ((movie) =>
                        {    
                            movies[movie.id] = movie.title
                        }
                    )
                }
            }
        )

        Location.find
        ({"id":id}, (error, locations) =>
            {
                let location = ''

                if (error)
                {
                    console.log('Error location/select/' + id + ': ' + error)
                    location = {"id":"Error location/select: " + id + " : " + error}
                }
                else
                {
                    let loc = locations[0]
                    let mov = []
                    
                    for (let i in loc.movies)
                    {
                        
                        let id = loc.movies[i]
                        mov.push({"id":id, "title":movies[id]})
                    }

                    location = [{"id": loc.id, "city": loc.city, "movies":mov}]
                }

                response.send(location)
            }
        )
    }
)



app.get
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
                    bookings.push(bookinglist)
                }

                response.send(bookings)
            }
        )
    }
)

app.get
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

app.get
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

app.post
('booking/add', function(request, response)
    {
        let booking = request.body.content

        Console.log('booking ' + booking)

        Booking.insertOne(booking, (error) =>
            {
                if (error)
                {
                    Console.log('Error booking/add ' + error)
                    response.send('Error booking/add ' + error)
                }
                else
                {
                    response.send(0)
                }
            }
        )
    }
)


// Global variable for id
let id = 1;

// Reply builder for replies
let replyBuilder = (replyContent, replyID) => {
    let reply = {
        _id : replyID,
        content : replyContent
    }
    return reply;
}


// Post reply function
app.post("/replies/createReply", (req, res, next) => {
    let newReply = replyBuilder(req.body.content, parseInt(id));
    id++;
    // let newReply = req.body;
    Replies.create(newReply)
      .then((result) => res.status(201).send(result))
      .catch((err) => next(err));
});

// View all replies
app.get("/replies/readReplies", (req, res, next) => {
    Replies.find()
      .then((results) => res.send(results))
      .catch((err) => next(err));
  });

// Delete a reply
app.delete("/replies/delete/:id", (req, res, next) => {
    Replies.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).send())
    .catch((err) => next(err));
  });

app.listen(4000);