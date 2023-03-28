# Dog Platform

This project is an online platform built with React, Redux, CSS, and HTML that uses the API https://api.thedogapi.com/v1/breeds to search for information about dog breeds. The project also uses Node.js, Express, Sequelize, and Postgres for server implementation and database. Users can filter breeds by weight, alphabetical order, and add new breeds to be included in the database.

# Installation

To run this project on your local machine, follow these steps:

Clone this repository
Run npm install to install dependencies
Create a .env file at the root of the project and configure the API_KEY, PORT, DB_USER, DB_PASSWORD, DB_HOST, and DB_NAME environment variables. The API_KEY variable should be a valid access token for the https://api.thedogapi.com/v1/breeds API. The PORT variable is optional and is used to specify the port on which the server will run. If not specified, the default port is 3000. The DB_USER, DB_PASSWORD, and DB_HOST environment variables are required to connect the application to the PostgreSQL database.
Run npm start to start the server and React application. If everything is configured correctly, you should be able to access the platform at http://localhost:3000.
Usage
The dog platform is easy to use. On the main page, you will see a list of all available dog breeds. You can filter breeds using the filtering buttons at the top of the page.

To add a new breed to the database, click "Create" on the main page. You will be prompted to provide information about the breed, including its name, weight, height, etc.

# Contribution
If you would like to contribute to this project, we are open to ideas and suggestions! Simply fork the repository, make the necessary changes, and send us a pull request.

# Adoption
We want to remind everyone that adopting a dog is a big responsibility and an important decision that should be carefully considered. Adopting a dog not only gives an animal a second chance at life but can also be an incredibly rewarding experience for the adopter. Compared to buying a dog, adoption helps to decrease the number of homeless animals and also helps to prevent dog trading. Please consider adopting before buying.
