# REST with API Node.js

<p align="center"> 
 REST API with Node.js, Express and TypeScript. We will also be using MongoDB as our database. 
</p>

<h4 align="center">
	🚧 Completed 🚀 🚧
</h4>

Table of Contents
=================
<!--ts-->
   * [About the project](#-about-the-project)
   * [How to run the project](#-how-to-run-the-project)
   * [Technologies](#-technologies)
   * [Commands](#-commands)
   * [License](#user-content--licença)
<!--te-->


## 💻 About the project

<p>It's a simple API built with the Express framework that essentially features CRUD operations to showcase how it works with MongoDB.</p>


<p>In this API, you can:</p>

- Create an account with the password securely encrypted in the database.
- Log in, generating a session token in the cookie to access authenticated routes.
- Access created users.
- Edit the currently logged-in account.
- Delete the currently logged-in account

## 🚀 How to run the project

### Prerequisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Additionally, it's good to have an editor for working with the code, such as [VSCode](https://code.visualstudio.com/)

After cloning this project, install the dependencies:

```
npm install
```

And run using:

```
npm start
```

### MongoDB Cloud

In this application, we use [MongoDB Cloud](https://www.mongodb.com/products/platform/cloud). As of the moment this project was created, you can create your account for free and follow the steps on the platform to connect your database username and password.

Once done, add your connection string to your application code in the environment variable MONGO_URL, which is located in the .env file, for example:

```
MONGO_URL="mongodb+srv://user:password@cluster0.crgql67.mongodb.net/?retryWrites=true&w=majority"
```

### API Methods: You can use Postman to simplify testing.

#### URL: 
     http://localhost:8080

#### Method: GET /users
Authenticated route

#### Method: POST /auth/register
```
{
  "email": "example@example.com",
  "username": "Example12",
  "password": "password123"
}
```

#### Method: POST /auth/login
```
{
  "email": "example@example.com",
  "password": "password123"
}
```
#### Method: PATCH /users/:id
Authenticated route
```
{
  "username": "Example13"
}
```

#### Method: DELETE /users/:id
Authenticated route

### 💻 Commands

- `lint`: Checks for linting issues in TypeScript files using ESLint.
- `lint:fix`: Similar to `lint` but automatically attempts to fix identified linting issues.
- `prettier`: Formats the code in the entire project using Prettier.
- `format`: format: Custom script that runs both `prettier` and `lint:fix` sequentially for code formatting and fixing linting issues.

## 🛠 Technologies

The following tools were used in the project's construction:

-   **[NodeJs](https://nodejs.org/en)**
-   **[Express](https://expressjs.com/pt-br/)**
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[MongoDB Cloud](https://www.mongodb.com/products/platform/cloud)**

## 📝 License

This project is under the license [MIT](./LICENSE).

Made by Arthur Teodoro Alves de Lima 👋🏽 [Get in touch!](https://www.linkedin.com/in/arthurtlima/)
