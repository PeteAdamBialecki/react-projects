# **Create React App**

In React Basics, you started to build the scoreboard app using the CDN links to help you focus on learning React, without having to worry about installing and running any tools.

The CDN-based approach is not useful in a production environment as soon as you start using JSX. For instance, we used Babel directly in the browser to transpile JSX into JavaScript. The Babel script is ~800KB in size, which for most use cases, is too large of a download to be practical. Also, there's the overhead in the browser of transpiling JSX into JavaScript.

Developers use compiling as part of a build process to avoid the overhead of downloading Babel and multiple JavaScript files to the client. Create React App sets up a modern build system for your React apps in little time, no need to install or configure tools like Webpack or Babel. The tools are already pre-configured in each new project, that way you can focus on building your app.

To get started, install Create React App:

        npm install -g create-react-app

 and create a new app, at all once, with npm. For example:

        npm create-react-app scoreboard
        cd scoreboard

Helpful commands:
Start development server:

        npm start

Bundles the app into static files for production:

        npm run build

Starts the test runner

        npm test

Removes this tool and copies build dependencies, config files and scripts in the app directory.  If you do this, YOU CAN"T GO BACK!!!

# **React Tools**

[Flow: Static Type Checker For JavaScript](https://flow.org/)

[TypeScript](https://www.typescriptlang.org/)

## **Extra Notes and Resources**

[Giphy API documentation](https://github.com/Giphy/GiphyAPI)
[Fetch API – MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
[Introduction to fetch()](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
[Browser support for fetch()](http://caniuse.com/#feat=fetch)
[fetch() polyfill](https://github.com/github/fetch)
[Browser support for JavaScript promises](http://caniuse.com/#feat=promises)

## **Create Production Build**

If using Create React App, run 

        npm run build

Use "serve"

        npm install -g serve

Then, in the directory, run

        serve -s build

Then view the production build in the given URLs.  If you want to make changes, you need to go through the entire build process again.

## **GitHub Pages Deploy**

For GitHub pages, create a repo in Github with the whole project.  In the 'package.json', Add, under "name", 

        "homepage": "https://username.github.io/reponame",

Run the command 

        npm install --save gh-pages

Setup deploy scripts in package.json

        "scripts": {
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build",
            ...
        }

Run the command 

        npm run deploy

Once that's commplete, in your browser, go to your Github repo, go to settings, scroll down, and navigate to where your site is published.

Set a Base URL
When using React Router, if your app is served from a sub-directory, pass the 'basename' prop to the router to set the base URL for all locations. For example:

        <BrowserRouter basename="/course-directory">

## **Deploying with Now**

Helpful Links:

[Now – Global Serverless Deployments](https://zeit.co/now)
[zeit.co](https://zeit.co/)
[now.json configuration](https://zeit.co/examples/create-react-app/)
[Deploy a Create React App project with Now](https://zeit.co/examples/create-react-app)
[Domains and Aliases](https://zeit.co/docs/v2/domains-and-aliases/adding-a-domain)
[Now for GitHub](https://zeit.co/blog/now-for-github)

        npm install -g now

Steps when using Create React Native:

Create a file called 

        now.json

This is where you include the version of now as well as routers and all of that other stuff. A running sample is located in './react/deploying/now/now.json.  Use this code.

        {
            "version": 2,
            "name": "create-react-app",
            "builds": [
                { "src": "package.json", "use": "@now/static-build" }
            ],
            "routes": [
                {"src": "^/static/(.*)", "dest": "/static/$1"},
                {"src": "^/favicon.ico", "dest": "/favicon.ico"},
                {"src": "^/asset-manifest.json", "dest": "/asset-manifest.json"},
                {"src": "^/manifest.json", "dest": "/manifest.json"},
                {"src": "^/service-worker.js", "headers": {"cache-control": "s-maxage=0"}, "dest": "/service-worker.js"},
                {"src": "^/precache-manifest.(.*)", "dest": "/precache-manifest.$1"},
                {"src": "^/(.*)", "dest": "/index.html"}
            ]
        }

In the package.json, include a snippet for Now:

        "scripts": {
        ...
        "now-build": "react-scripts build && mv build dist"
        }

Then run the command

        now

This should start the build process and link to your ZEIT account.  Once it's done buildling, you will be given a custom URL for your app.

## **Deploying with Netlify**

[Netlify](https://www.netlify.com/)
[Netlify CLI](https://www.netlify.com/docs/cli/)
[Redirects](https://www.netlify.com/docs/redirects/)
[Custom Domains](https://www.netlify.com/docs/custom-domains)
[Continuous Deployment](https://www.netlify.com/docs/continuous-deployment)

The easiest way to deploy to Netlify is to run this command in your React directory first

        npm run build

Once this is done, login to Netlify and then drag and drop the build folder into the online GUI.

To do it with the command line, first install Netlify

        npm install netlify-cli -g

Navigate to your directory and run the command 

        netlify deploy

Follow the directions within the terminal to set it up.  Afterwards, you will be given a sample URL to test it out.  To deploy as prod, run the command 

        netlify deploy --prod

Afterwards, you will be given two URLs, one for a specific deployment stage and one for an ongoing live version with every deploy.

TO enable Netlify when the user reloads the page, create a file called "_redirects" in the build folder.  In this file, include this

        /*    /index.html   200

Then, redeploy the app.  

# **Create React Native App**

Install Create React Native App

        npm install -g create-react-native-app

Create a new project.  cd into the directory and use the command

        create-react-native-app nameOfProject

Stuff is installed and then you are given a success message with all of the details.

 Create an account with Expo

        https://expo.io/

After, cd into the directory where you started the create-react-native-app and type the command

        npm start

You are then given a QR code. To scan this QR code, install the Expo Client App

        https://itunes.apple.com/app/apple-store/id982107779

        https://play.google.com/store/apps/details?id=host.exp.exponent

Instead of using Expo, after running "npm start", you can find commands that can run a iOS or Android simulator on your computer.  For iOS, you need xCode.  To run the iOS simulator, use the command

        npm run ios

After running the simulator, open the project in any kind of text editor and start coding.  On Mac, to run the android simulator, you need to install the Android Simulator

        https://developer.android.com/studio/index.html

Follow the same steps as above to start the android dev server

        npm run android

