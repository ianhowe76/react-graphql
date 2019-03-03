# React GraphQL

This project aims to demonstrate some ways to use [Apollo GrapQL](https://www.apollographql.com/)

The web app reads information on Countries and Continents from [Trever Blades's](https://github.com/trevorblades/countries)[Countries Graphql API](https://countries.trevorblades.com/) -

## Aims

### Creating GraphQL HOCs
I have demonstrated 2 ways to add graphql queries to a React app

1. `grapql` from `react-apollo`
2. Using `<Query />` from `react-apollo`

### `.graphql` File Loader

I added `graphql-tag/loader` to webpack for `.graphql` files. This allows queries to be defined in their own file and imported

```
import query from `./query.graphql;
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
