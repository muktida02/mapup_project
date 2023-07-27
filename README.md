# mapup_project

MapUp is a mapping application built using React and Redux, allowing users to explore and view maps of different regions around the world. 
The application uses OpenStreetMap (OSM) for displaying maps and utilizes Turf.js for geographical calculations.
It also includes a sidebar with collapsible options, a form for selecting regions, and a region info card displaying details about the selected region.

# Getting Started
To run MapUp locally on your machine, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies using npm or yarn:

    npm install
    or
   yarn install

3. Start the development server: npm start
or
yarn start

4. Open your web browser to access MapUp.

# Technologies Used
1. React: Front-end JavaScript library for building user interfaces.
2. Redux: State management library for managing application state.
3. Ant Design: UI library with pre-designed components for a consistent and modern look.
4. OpenStreetMap (OSM): Open-source mapping platform.
5. Turf.js: Library for performing advanced geographical calculations.

# How to Use
1. Upon launching MapUp, you will see a map of the default region.
2. Use the form input to select a region from the available options (United States, India, United Kingdom).
3. Click the "Load" button to load the selected region on the map. The map will zoom and center on the selected region.
4. The region info card will display relevant information about the selected region, including its currency symbol, units of speed, distance, volume, and timezone(s).

# Features
* Interactive Map: View maps of different regions with zoom and pan functionalities.
* Region Selection: Use the form input to select from three regions: United States, India, and United Kingdom.
* Region Info: See currency symbol, units of speed, distance, volume, and timezone information for the loaded region.
* Night Mode: Toggle between light and dark themes with the night mode switch.
* Responsive Design: The application is designed to be responsive and work across various screen sizes.
