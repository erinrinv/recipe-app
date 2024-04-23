# Recipeezy

Recipeezy is an application that is a fast and easy way for someone to find a large selection of delicious and interesting recipes based on multiple different cuisines. Users can query for recipes based on whatever they find interesting, and it they would like they can favorite the recipe. Users can create and sign into the application to keep track of their favorite recipes. Recipeezy also provides users with a list of ingredients as well as instructions that are pulled from an api. 


### Front-end:
The HTML content is dynamically rendered on the client-side utilizing the ReactJS framework. ReactJS empowers developers to create interactive elements in JavaScript, facilitating swift changes to HTML elements and ensuring dynamic behavior within the application.

To provide users with a modern and responsive interface, the front-end employs the Materialize front-end framework. Additionally, CSS is utilized for further customization and styling of the application's content.

### Back-end:
The server-side infrastructure is constructed using Node.js and Express.js, with data storage managed through PostgreSQL. Serving as an API to the front-end, the back-end seamlessly communicates with the client-side application, while navigation and component rendering are handled by ReactJS.


## Screenshot

### Home page


### Signup page


### Deals page of recipe


### Recipe favorites


### Login Page






## Getting started
- clone repository to your local machine
- create a ```.env``` file and fill out the information required
- in terminal, run ```npm install``` and then ```npm start``` in the 'client' directory
- in terminal, run ```npm install``` and then ```npm run dev``` in the 'backend' directory
- navigate to ```http://localhost:5173``` in your browser

## Dependencies

- [express]
- [PostgreSQL 9.x]
- [react]
- [react-dom]
- [react-router-dom]
- [materialize-css]
- [react-stripe-checkout]
- [bcrypt]
- [axios]
- [nodemon]
- [cors]

