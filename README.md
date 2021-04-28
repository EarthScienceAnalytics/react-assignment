## Provided Libraries

The application comes with a few npm libraries pre-installed, which you can see in the `package.json` file. The most important are:

- React.js
- Material-ui
- Redux
- React Router Dom
- [Plotly ](https://plot.ly/javascript/react/)

Note: Your code should not rely on any libraries besides the ones already installed.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Json Server](https://github.com/typicode/json-server)

To run the project locally,

1. Git clone this repository
   `git clone https://github.com/EarthScienceAnalytics/react-assignment.git`
2. Ensure you've installed Node/Npm to download the dependencies. The project uses the following versions.
   - Node: v10.15.3
   - Npm: 6.9.0
3. It is recommended to use Npm for downloading all the dependencies. Yarn would do the job too. Perform the following commands inside your project folder (directory where the package.json is located)
   `npm install` or `yarn install`
4. Once the dependencies are downloaded, you can run the fake json server by `npm run start-server`. This should run the application on port 8000.
5. By now you should have the json server running. You can now start the react project by `npm start`.

## Part 1

### Summary

In this part, you will create a component named EsaList.
You will create all the logic needed to select and deselect list items.

<img src="https://github.com/georgesimos/react-assignment/blob/master/readme-assets/EsaList.png" width="300" />

## Part 2

### Summary

In this part, you will modify the Wellbore and Histogram pages.

### Wellbore Page Layout:

<img src="https://github.com/georgesimos/react-assignment/blob/master/readme-assets/Wellbore1.png" />
<img src="https://github.com/georgesimos/react-assignment/blob/master/readme-assets/Wellbore2.png" />
<img src="https://github.com/georgesimos/react-assignment/blob/master/readme-assets/Wellbore3.png" />

### Wellbore Page Functionality:

- A user should be able to select at least one well, one log and one formation:
  - This should enable the SHOW PLOT button.
  - When the SHOW PLOT button is enabled the user should be able to fetch and display the plot data for all selected wells.
  - Plot type should be `scatter`.
- A user should be able to navigate to Histogram page and back without losing his well,log and formation selections.

The Histogram Page Layout:
<img src="https://github.com/georgesimos/react-assignment/blob/master/readme-assets/Histogram1.png" />
<img src="https://github.com/georgesimos/react-assignment/blob/master/readme-assets/Histogram2.png" />
<img src="https://github.com/georgesimos/react-assignment/blob/master/readme-assets/Histogram3.png" />

### Histogram Page Functionality:

- A user should be able to select at least one well, one log and one formation:
  - This should enable the SHOW PLOT button.
  - When the SHOW PLOT button is enabled the user should be able to fetch and display the plot data for all selected wells.
    - Plot type should be `histogram`.
- A user should be able to change the Bar Mode to `stack` or `group` and the Orientation to `vertical` or `horizontal`.
  - This should update the Plot layout.
- A user should be able to navigate to Wellbore page and back without losing his well,log and formation selections.

### Technical Requirements

- Must be a Single Page Application(SPA)
- Data should be stored and retrieved from `Redux`
- Plots should be implemented using [Plotly](https://plot.ly/javascript/react/)

Here is the documentation for the API (db.json):

<details>

<summary> API Documentation </summary>

<br />

- GET - `http://localhost:8000/wells`
  - Returns an array of all wells.
- GET - `http://localhost:8000/logs`
  - Returns an array of all logs.
- GET - `http://localhost:8000/formations`
  - Returns an array of all formations.
- GET - `http://localhost:8000/plots`
  - Returns an array of all plots.
- GET - `http://localhost:8000/plots?wellId=1&wellId=2`
  - Returns an array of the plots with wellId = 1 & wellId = 2.

</details>

<br />

## Submission

**Very Important!** In order for us to evaluate your submission please make sure all your changes are committed and these commits have been pushed to your git repository.

```
git push
```
