# blogify
A blog application that enables you to create a post, edit ,delete and access comments under each posts.
# blogify

[![Build Status](https://travis-ci.org/ajagunnamaruf/blogify.svg?branch=develop)](https://travis-ci.org/ajagunnamaruf/blogify)
[![Coverage Status](https://coveralls.io/repos/github/ajagunnamaruf/blogify/badge.svg?branch=develop)](https://coveralls.io/github/ajagunnamaruf/blogify?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/71169e218528ed943a7a/maintainability)](https://codeclimate.com/github/ajagunnamaruf/blogify/maintainability)

## Application Features

A blog application that enables you to create a post, edit ,delete and access comments under each posts.

- User to add a new posts
- User to Modify and update posts
- User to Delete a posts

## Technologies

### Backend

- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express JS](http://express.com) A minimalist web framework
- [Sequelize](http://docs.sequelizejs.com/) Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
- [PostgreSQL](https://www.postgresql.org/) A powerful, open source object-relational database system.
- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Mocha](https://mochajs.org/) Mocha is a feature-rich JavaScript test framework running on [NodeJS](nodejs.org/en) for testing [Javascript](javascript.com) applications.

## Installation

- Install [NodeJS](http://nodejs.org/en) and [PostgreSQL](https://www.postgresql.org/) on your computer
- Clone this repository
- Navigate to the directoty
- Install all depencies with ```npm install```
- Globally install ```sequelize-cli```
- Using ```sequelize db:migrate``` migrate the database
- Start the server by running ```npm start```

## Testing

- Create a test database of your choice by following the example in .env.sample file

## Contribution

- Fork the repository
- Make your contributions
- Write test cases for your contributions


## FAQ

* What language is used to build this application ?
  - The application (both front-end and back-end) is entirely built with javascript
* Is this an open-source project ?
  - Yes, Is an open-source project.
* Who can contribute ?
  - Anyone can contribute as long as you would follow the contribution guides outlined above
* Is the application hosted online ?
  - Yes, the application is hosted on heroku platform. You can always visit it via this link [https://blogify-v3.herokuapp.com/](https://blogify-v1.herokuapp.com/)
* Does the application have an API ?
  - Yes, The application has a well documented API that can be viewed via a link in the API documentation section above
* Is the application licensed ?
  - Yes, the application and its contents is under MIT license

## User template is available on

- [blogify](https://code2031.github.io/blogify)

## License and Copyright

&copy; Ajagunna Maruf

Licensed under the [MIT License](LICENSE).