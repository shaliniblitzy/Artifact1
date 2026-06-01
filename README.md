# Artifact1

A minimal, tutorial-style Node.js web server built with the [Express.js](https://expressjs.com/) framework. It hosts two plain-text HTTP `GET` endpoints: a `Hello world` root route and a `Good evening` route.

## Prerequisites

- **Node.js** `>= 18` (Node 22 LTS recommended)
- **npm** (bundled with Node.js)

## Installation

Install the project's dependencies (Express.js `^5.2.1`):

```bash
npm install
```

## Running the server

Start the server with:

```bash
npm start
```

This runs `node server.js`. On startup the server logs the active port and listens on [http://localhost:3000](http://localhost:3000) by default.

The port is resolved from `process.env.PORT`, falling back to `3000`. To use a different port, set the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response |
| ------ | --------------- | ------------- |
| `GET` | `/` | `Hello world` |
| `GET` | `/good-evening` | `Good evening` |

Try each endpoint with `curl` (using the default port):

```bash
curl http://localhost:3000/
# Hello world

curl http://localhost:3000/good-evening
# Good evening
```
