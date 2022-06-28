const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var fs = require('fs')
const { response } = require('express')


const app = express()

const uri = 'mongodb://localhost:27017/qacinemas';
let opts = { useNewUrlParser: true }


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
    }
)


const Movie = mongoose.model('Movie', movieSchema)
const Location = mongoose.model('Location', locationSchema)

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

app.get
('/', function(request, response)
    {
        fs.readFile('./public/index.html', 'utf8', function (error,data){response.send(data)})
    }
)

app.use(express.json())
app.use(express.static('script'));

app.get
('/movielist', function(request, response)
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
('/locationlist', function(request, response)
    {
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
                           list.push({"id":location.id, "title":location.city})
                        }
                    )
                }

                response.send(list)
            }
        ).sort('city')
    }
)


app.listen(4000);