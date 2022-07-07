const router = require("express").Router();
const Location = require("../models/locationModels");
const Movie = require("../models/movieModels")

router.get
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
                    if (locations == '')
                    {
                        list.push({"id":0, "city":'Error locationlist: there is no location collection, please create one'})
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
                }

                response.send(list)
            }
        ).sort('city')
    }
)

router.get
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
                    let sessions = []
                    
                    for (let i in loc.sessions)
                    {
                        let session = loc.sessions[i]
                        let id = loc.sessions[i].movie
                        
                        if (movies[id])
                        {
                            session.movie = {"id":id, "title":movies[id]}
                        }
                        else
                        {
                            session.movie = {"id":id, "title":'Movie id: ' + id + ' cannot be found on the movie collection' }
                        }

                        sessions.push(session)
                    }

                    location = {"id": loc.id, "city": loc.city, "sessons":sessions}
                }

                response.send(location)
            }
        )
    }
)

module.exports = router;