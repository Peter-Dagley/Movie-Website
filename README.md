# Movie Website

## Authors
Peter Dagley, Kim Wong and Naima Afrah.

## Introduction
This is a simple Cinema website developed using React for frontend functionality, and Express and Node for the backend database and APIs.


## Getting Started

Running the website is relatively simple, but has a few requirements once being cloned from this Git Repository.

### Dependencies
This application requires node.js for the Backend, and can be installed here: https://nodejs.org/en/download/

In the /Frontend/moviewebsite/ folder, in a command line, run the following commands to install the dependencies:

     npm i moment axios react-alice-carousel

     npm add bootstrap 

In the /Backend/ folder,:

     npm i nodemon mongoose express mocha chai chai-http nyc

If unsure, you can always check the package.json files in each respective folder to check what dependencies are needed.

### Data
Data for each collection can be found in JSON format in the /Data/ folder. This can be imported into MongoDB, which is the required database for this website and can be found and installed here: https://www.mongodb.com/try/download/community

### Starting Up
To start the database, navigate to /Backend/, and in a command line there run:

    nodemon index.js

To run the website, navigate to /Frontend/moviewebsite/, and in a command line there run:

    npm start
These commands will start the database on Localhost port 4000, and the website on port 3000.

### Testing
To test APIs,  navigate to /Backend/, and in a command line there run:

    npm test
## Written In

 - Html
 - Css
 - JavaScript
## Links
Jira board: https://peterdagley.atlassian.net/jira/software/projects/MW/boards/5

## Acknowledgements
Thanks to Aswene for all the help.

   
