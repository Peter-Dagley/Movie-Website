const router = require("express").Router();
const Movie = require("../models/movieModels");

router.get
('/movielist', function(request, response, error)
    {
        Movie.find
        ({}, (error, movies) =>
            {
                if (error)
                {
                    console.log('Error movielist: ' + error)
                    response.send([{"id":0, "title":'Error movielist: ' + error}])
                }
                else
                {
                    if (movies == '')
                    {
                        response.send([{"id":0, "title":"Error movielist: there is no movie collection, please create one"}])
                    }
                    else
                    {
                        let list = []

                        movies.forEach
                        ((movie) =>
                            {
                                list.push(movie)
                            }
                        )

                        response.send(list)
                    }
                }


            }
        ).sort('title')
    }
)

router.get
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
                    if (movies == '')
                    {
                        list.push({"id":0, "title":'Error movielist: there is no movie collection, please create one'})
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
        ).sort('title')
    }
)

router.get
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
                    if (movies == '')
                    {
                        list.push({"id":0, "title":'Error comingsoon: There is no movie collection, please create one'})
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
        ).sort('title')
    }
)



router.get
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

router.get
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

router.get
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

module.exports = router;