# Planning the app

## Components
- App: This is our core "parent" component. Any data that is needed by all our components should be here.
    - Search Bar: This component should take a user input and modify state at the App level to drive results from our fetch.
    - Gallery: This will format and display our gallery item components.
        - Gallery Item: The component that displays specific results from our API

## State variables

- App
    - Search: This will be our search term. We want to declare this as a property of "App" because we will make our API search happen at the App level so that the data is available to all children of the application.
    - Data: The data from our API call should be stored in state so that we do not lose it when the app triggers a re-render.
    - Message: It is good practice to have a state variable to capture any error or success messages that may emit or that we would expect to emit from the API call.
- SearchBar
    - SearchTerm: This will make a bit more sense in practice, but we will need to store the search term somewhere as we type it. This is because we want to control the form. Otherwise we would have an uncontrolled form where the data would be handled by the DOM itself. We don't want to have to worry about implementing new, different hooks to reference the actual DOM itself, so instead we will "control" our form by having local state to represent the user's input.
- Gallery
    - Gallery itself will not need to track state!
- GalleryItem
    - View: This will be a Boolean state variable that toggles the "detail" view of a given song