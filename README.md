Todo App – Automated Testing
This project contains automated tests for the Todo App using three testing levels:

Unit Testing → Feature Testing → End-to-End Testing with Playwright

The purpose of this testing setup is to verify the Todo App at different levels, starting from individual functions and middleware and ending with complete user interactions in a real browser.

1. Unit Testing
Unit tests check small individual parts of the application separately.

validateTodo.test.js
This test checks the Todo validation middleware.

It verifies that:
Valid Todo text is accepted and next() is called.
Missing or empty Todo text returns a 400 response.
The correct error message is returned: Task is required.

cache.test.js
This test checks the caching middleware.
It verifies:
A request produces a cache miss when data is not already cached.
A repeated request produces a cache hit when cached data is available.
The cache can be cleared correctly.
Unit Test Command
npm test

Jest is used to run the unit and feature tests.

2. Feature Testing
Feature tests verify that multiple parts of the application work together.
todoRoutes.test.js
This test checks the Todo REST API routes using Jest and Supertest.

The main API operations tested are:
GET /api/todos – retrieve Todos
POST /api/todos – create a Todo
PUT /api/todos/:id – update/complete a Todo
DELETE /api/todos/:id – delete a Todo
Handling of invalid or missing Todo IDs
The tests also work with the Todo route and cache middleware together.
Feature Test Command
npm test

Jest runs the feature tests together with the unit tests.

3. End-to-End Testing with Playwright
Playwright tests the application from the user's point of view in a real browser.
todo.spec.js
The Playwright tests verify complete user workflows such as:
Opening the Todo application
Adding a Todo
Marking a Todo as completed
Deleting a Todo
These tests make sure that the frontend, backend, and browser interaction work together correctly.
Playwright Command
npx playwright test

What This Project Demonstrates
This automated testing project demonstrates how to test a web application at multiple levels:
Unit testing checks whether individual pieces of code work correctly.
Feature testing checks whether related application components work correctly together.
End-to-end testing checks whether the complete application works correctly from the user's perspective.


