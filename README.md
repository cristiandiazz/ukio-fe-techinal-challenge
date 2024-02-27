# Ukio FE Technical Challenge

## Overview

This project is an assessment for Ukio implementing a filtering mechanism for a list of apartments based on various criteria such as city, name, avaliable next week or month and maximum price. The filtering logic is implemented using a custom React hook called `useApartmentFilter`.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Run `npm run dev` and visit `https://localhost:3000`
4. Run the tests to verify the correctness of the filtering logic by running `npm run test`.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the source code for the project.
  - `app/`: Contains the main application code.
    - `api` : Contains the logic and data of the endpoint.
    - `components/` : Contains the components of the app.
    - `context/`: Contains context-related functionality.
    - `hooks/`: Contains custom React hooks.
      - `useApartmentFilter.ts`: Contains the implementation of the `useApartmentFilter` hook for filtering apartments.
    - `interfaces/`: Contains TypeScript interfaces used in the application.
    - `styles/`: Contains the styles.
    - `utils/`: Contains utility functions used in the application.
- `__tests__/`: Contains unit tests for the application code.

## Technologies Used

- Next.js
- TypeScript
- TailwindCSS
- React Testing Library (for testing React components and hooks)

## Additional Improvements

- More Styles Details: Improve the styling of the application.

- Component Splitting: Better split components to improve modularity and maintainability.

- End-to-End Testing: Implement end-to-end (E2E) tests using tools like Cypress or Playwright to ensure the application functions correctly from a user's perspective.

- Unit Tests for Components: Add more unit tests for components to ensure their behavior is correct under various scenarios.

- Improved API: Improve the API to include endpoints for filtering and pagination to reduce the load on the client-side.

- Pagination: Implement pagination in the API to efficiently handle large datasets and improve performance.

- ErrorHandling: We could improve the error from fetching apartments or filters with better feedback to the user.

## License
- This project is licensed under the MIT License.


