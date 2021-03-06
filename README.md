# Digital Portfolio #

Digital portfolio website for Montgomery Hatch

## Installation

### Database
1. Install [MongoDB](https://docs.mongodb.com/manual/installation/)


### REST API
1. Install [Node.js](https://nodejs.org/en/download/)

2. Retrieve project dependencies  

   In project root run 
   `$ npm install` 

3. Set mail client 

   Set the username/password in /api/routes/mailRoute.js 

4. Connect to database  

   In /api/server.js update `mongoose.connect()` with your db connect string. For local development use 
  `mongodb://127.0.0.1:27017/{database name}`

5. Start NodeJS server  

   Navigate to /api and run 
  ` node server.js`  

   *Default port is 3000, you can set this in* /api/server.js

6. Add data   

   You may add data using the mongo command line interface or by using the REST API endpoints defined in /api/server.js


### Application

#### Run the development server  
  `webpack-dev-server`

#### Run the production build  
  `webpack -p`

#### Run test suite  
  `npm run test`

**Note:** In a production environment you will need to update the URI for the REST API in /src/components/main.jsx