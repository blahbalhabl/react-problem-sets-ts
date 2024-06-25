# React with TypeScript Practice Problem Sets

## Beginner Level

1. **Create a Simple Counter App in TypeScript**

   - Implement a React component in TypeScript that displays a number (starting at 0).
   - Add two buttons: one to increment the counter and another to decrement it.
   - Ensure types are used for component state and event handlers.

2. **Build a Todo List in TypeScript**

   - Create a component to add tasks to a list, using TypeScript for type safety.
   - Display the list of tasks and implement the functionality to mark a task as completed.
   - Define interfaces for your task model and component props.

3. **Create a Form with Validation in TypeScript**

   - Build a form with inputs for a username and password, using TypeScript for enhanced type checking.
   - Implement simple validation that checks if the inputs are not empty before submitting.
   - Use TypeScript interfaces to define the shape of your form state.

4. **Fetch and Display Data from an API in TypeScript**

   - Use `fetch` to get data from `https://jsonplaceholder.typicode.com/posts` and display the titles in a list.
   - Ensure proper typing for the API response and state management.

5. **Theme Switcher in TypeScript**
   - Implement a component to switch between two themes (e.g., dark and light mode), using TypeScript.
   - Use the Context API with TypeScript for type-safe context management.

## Intermediate Level

1. **Pagination Component in TypeScript**

   - Create a component that displays a list of items with pagination, using TypeScript for type safety.
   - Allow the user to choose how many items to display per page.
   - Ensure all props and state variables are typed.

2. **Custom Hook for Fetching Data in TypeScript**

   - Write a custom hook in TypeScript that fetches data from an API.
   - Use it in a component to display the data, handling loading and error states with type safety.

3. **Drag and Drop List in TypeScript**

   - Implement a list where items can be reordered through drag and drop, using TypeScript.
   - Use the HTML Drag and Drop API and manage the list state in a type-safe manner.

4. **Real-time Search Filter in TypeScript**

   - Implement a search input that filters a list of items in real-time, using TypeScript.
   - Debounce the input to reduce the number of searches for better performance, ensuring type safety in your implementation.

5. **TypeScript Interface for Component Props**
   - Create a component that receives props for a user profile (name, age, email).
   - Use TypeScript interfaces to strictly type the props.
   - Display the user information in a formatted way.

## Expert Level

1. **Build a Customizable Data Table Component in TypeScript**

   - The component should support sorting, filtering, and pagination, all implemented with TypeScript for type safety.
   - Allow columns to be shown/hidden and data to be fetched asynchronously, with proper typing for all data handling.

2. **Implement a Global State Management Using Context API and Hooks in TypeScript**

   - Create a global state that can be accessed and modified from anywhere in the application, using TypeScript for type safety.
   - Demonstrate its use by implementing a feature like user authentication, with types for the user state and actions.

3. **Type-Safe Redux Store in a React TypeScript App**

   - Set up a Redux store for managing application state in a React app with TypeScript.
   - Create actions and reducers with strict type definitions.
   - Connect a component to the Redux store and dispatch actions in a type-safe manner.

4. **Complex Form Handling with React Hook Form and TypeScript**

   - Implement a form with multiple inputs, including text, select, and checkbox, using React Hook Form with TypeScript for type safety.
   - Perform client-side validation and display error messages for invalid inputs.
   - Submit the form data to a mock server function and display a success message.

5. **Implement Custom Middleware in Redux with TypeScript**
   - Create a custom middleware for logging actions in a React Redux application using TypeScript.
   - Ensure the middleware is type-safe and integrates well with the Redux store.
   - Demonstrate the middleware by logging actions dispatched from a component.
