# Project Title

BeProfit Assignment

## Brief Overview

This project implements a web application using Vue.js and the Vuetify UI components framework. The application initially fetches order data and then displays it in a complex table that provides CRUD actions, sorting, filtering by search, pagination, and row expanding.

## Key Features and Implementation:

- **Scalable and Modular Design**: The application is designed with scalability and modularity in mind, making it adaptable for future enhancements, such as integrating with databases or adding additional features.

- **Responsive Design**: The application is responsive and supports all screen sizes, including mobile, tablet and desktop.

- **HTTP Requests Handling**: The application handles HTTP requests using the Axios library and provides a custom error class for handling HTTP errors.

- **Custom Error Class**: The `HttpError` class extends the regular `Error` class and provides a more informative error instance that includes an error status code.

- **Customized Table**: The `CustomizedTable` component is a complex table that provides CRUD actions, sorting, filtering by search, pagination and row expanding.

- **Testing**: The application is covered by tests for any pure function, using the `Vitest` library.

- **Technology Stack**: The project has been built using Vue.js with the Vuetify UI components framework, and it utilizes the `Vitest` library for testing. The project has been developed using Axios for handling HTTP requests.

## Potential Improvements

During the development of the project, I identified a couple of areas that could be further enhanced with more time and resources:

1. **Efficient Data Fetching**: Instead of fetching all orders upfront, it is possible to optimize performance by having the client make HTTP requests for getting the relevant orders for each table page.

2. **Enhanced User Interface (UI)**: Given more time, I would refine the design, add smooth animations, make `actions` & `expand` icon sticky, make a nicer `expanded-row` feature and improve user interactions to create a visually appealing and user-friendly interface.

3. **More Testing Coverage**: The application is covered by tests for any pure function, but due to insufficient time, I couldn't test the API calls. I would also add tests for the UI components, which I didn't do because of technical problems with `Vuetify`.

4. **Code Optimization**: I would optimize the code to make it more efficient and maintainable, especially in `CustomizedTable` component, which could be split into smaller components.

These suggestions aim to enhance the application's efficiency and user experience.

## Known Bugs

- **Component Testing**: Due to technical problems with `Vuetify`, I couldn't test the UI components.

- **Expanded Rows Bug**: Expanded rows do not support sorting. I found this out late and didn't have enough time to fix it.

## Installation and Running the Project

To run the project locally, follow these steps:

1. Clone the repository or download and extract the `.zip` file from the Github project.

2. Install the required packages by running the following command in each terminal window: `yarn`.

3. Run tests by running the following command: `yarn test`.

4. Build application by running the following command: `yarn build`.

5. Run application by running the following command: `yarn start`.

6. Once the client is running, you can test the project by navigating to the following URL: [http://localhost:4173/](http://localhost:4173/).
