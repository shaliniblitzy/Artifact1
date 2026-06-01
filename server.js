/**
 * server.js — Express.js application entry point for Artifact1.
 *
 * A minimal, single-file Express HTTP server that hosts two GET endpoints:
 *   - GET /              → responds with the plain-text body "Hello world"
 *   - GET /good-evening  → responds with the plain-text body "Good evening"
 *
 * This file is the project's main entry point (see package.json "main" and the
 * "start" script `node server.js`). It is launched with `npm start` after
 * dependencies have been installed via `npm install`.
 *
 * Module system: CommonJS (the package.json intentionally omits
 * `"type": "module"`), so dependencies are loaded with `require(...)`.
 */

'use strict';

// Import the Express web framework (declared in package.json as express ^5.2.1
// and resolved from node_modules/ after `npm install`). Express provides the
// application factory, the routing layer (app.get), the request/response
// helpers (res.send), and the HTTP listener (app.listen).
const express = require('express');

// Create the single Express application instance. This `app` object is the
// central composition root onto which every route handler is registered.
const app = express();

/**
 * Root route.
 *
 * Handles `GET /` and returns the exact plain-text body "Hello world".
 * The response payload is preserved verbatim — exact casing and spacing,
 * with no additional punctuation or trailing characters.
 *
 * @param {express.Request}  req  The incoming HTTP request (unused).
 * @param {express.Response} res  The outgoing HTTP response.
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * Good-evening route.
 *
 * Handles `GET /good-evening` and returns the exact plain-text body
 * "Good evening". As with the root route, the response payload is preserved
 * verbatim — exact casing and spacing, with no additional punctuation or
 * trailing characters.
 *
 * @param {express.Request}  req  The incoming HTTP request (unused).
 * @param {express.Response} res  The outgoing HTTP response.
 */
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Resolve the listening port from the environment, defaulting to 3000 when
// `PORT` is not set. This keeps the port configurable for different runtime
// environments without hard-coding a value.
const PORT = process.env.PORT || 3000;

// Start the HTTP listener and log the active port once the server is ready to
// accept connections.
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
