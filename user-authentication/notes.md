# **React User Authentication**

## **Parts of the App**

index.js: The entry point into the application which renders the main <App> component.

App.js: Renders the router that wraps the components of the app.

Context.js: A higher-order component (HOC) that shares functionality across the components of the app. This will let you reuse component logic and state. Remember - "Context" is used in React when data needs to be accessible by many components at different nesting levels.

Data.js: Contains a class of Data with the API authentication utility methods you will use to create, sign up and authenticate a user. The file is mostly pre-written, making GET and POST requests to the REST API, for example.

The components folder holds all the individual components of the app. For example, components that render the "Public" and "Authenticated" views, and the sign in and sign up forms.

## **About the App**

Run and Test the Application: Using your terminal or console app, navigate to the 'client' folder. Install the dependencies by running the following command:

        npm install

Make sure you are inside the 'client' folder (`cd client`, for example) when you run this command. Start the application. After the dependencies finish downloading and installing, run the following command to start the application:

        npm start

This will launch your React application at localhost:3000. In the browser, you should see the application's main screen.

Test the application: Click the "Sign Up" and "Sign In" links in the header to test that the app works. This should navigate you to the /signup and /signin URL paths.

React Router is currently configured to render the Public component for the root path ('/'), as well as the UserSignIn and UserSignUp components for the /signin and /signup paths respectively.

If React Router's <Switch> component does not find a matching Route, it's going to fallback to the last "catch all" <Route> and render the 'NotFound' component. You can view the code for each route in the file App.js:

        <Switch>
        <Route exact path="/" component={Public} />
        <Route path="/authenticated" component={Authenticated} />
        <Route path="/signin" component={UserSignIn} />
        <Route path="/signup" component={UserSignUp} />
        <Route path="/signout" component={UserSignOut} />
        <Route component={NotFound} />
        </Switch>

## **Run the Express Server**

In this step, you will get the backend of the application up and running. Open a second Terminal (or console) window and navigate inside the api folder.
To install the necessary dependencies, run the following command:

        npm install

Start the server. After the dependencies finish downloading and installing, run the following command to start the Express application:

        npm start

Make sure that your React application is still running (on `localhost:3000`, for example). In the console output, you should see the following message:

        Express server is listening on port 5000

REST API Routes and Endpoints: In the REST API Authentication with Express instruction step, you implemented /users routes to create and login a new user, as well as return the current authenticated user, which you tested using an API testing tool like Postman.

All POST and GET requests from the React client will be made to the /users endpoint using the helper methods for creating and getting users located in the file client/src/Data.js. Be sure to review this file before the next step.

Cross-Origin Resource Sharing (CORS) Support: We're using the create-react-app development server, which hosts the application (by default) at localhost:3000. Both the React and REST API applications use the same hostname, localhost. Although their port numbers differ, the browser treats them as separate origins or domains.

As a result, the browser running the client would block any requests to the REST API. Such requests are known as cross-origin HTTP requests. Browsers restrict cross-origin requests by default because they represent potential security risks. In our case, the browser should let the application running at localhost:3000 have permission to access resources from the server at localhost:5000.

This is what's known as Cross-Origin Resource Sharing (CORS). CORS supports secure cross-origin requests and data transfers between browsers and web servers. If CORS support is not set up on the server, requests to third-party origins will fail.

To circumvent CORS issues and successfully make requests from the React application's domain to the REST API's domain, I've enabled CORS support to the REST API application in the project files by pre-installing and configuring the cors npm package.

You can view the code that enable CORS support in the api/app.js file, on lines 3 and 12:

        // Import cors library
        const cors = require('cors');
        ...

        // Enable all CORS Requests
        app.use(cors());

## **IMPORTANT**

Do npm start on the client directory and then npm start on the api directory in that order.