const express = require('express')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
var fs = require('fs')
const { response } = require('express')
const cors = require('cors'); // new
const bodyParser = require('body-parser') // new


const app = express()
app.use(cors({origin:true})) // new

app.use(bodyParser.json()); // new
app.use(bodyParser.urlencoded({ // new
    extended: true
}));




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
        'movies': [Number]
    }
)

const Movie = mongoose.model('Movie', movieSchema)
const Location = mongoose.model('Location', locationSchema)

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
                           list.push({"id":location.id, "city":location.city})
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

app.listen(4000);