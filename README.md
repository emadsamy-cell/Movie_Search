# Full-Stack Movie Search Application

A full-stack movie search application that allows users to search for movies, add them to their favorites list, and manage their favorite movies. The frontend is built with React and the backend is built with NestJS.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
  - [Frontend](#frontend-setup)
  - [Backend](#backend-setup)
- [API Documentation](#api-documentation)

---

## Overview

This application allows users to:
- Search for movies using an external API (OMDb API).
- View detailed information about the movies, including title, poster, and release year.
- Add movies to their favorite list.
- Edit or delete movies from the favorite list.
  
The backend is built using NestJS and is responsible for handling user interactions, managing the favorite movies, and interacting with a database. The frontend is built with React and provides a user-friendly interface for interacting with the backend.

---

## Tech Stack

- **Frontend:**
  - React.js
  - Axios (for API calls)
  - CSS for styling

- **Backend:**
  - NestJS
  - TypeScript
  - Prisma (ORM)
  - Postgres (for storing favorite movies)

- **Other:**
  - OMDb API (for fetching movie data)
  - CORS for cross-origin requests between frontend and backend
  - GitHub for version control

---

## Features

- **Movie Search:** Search for movies by title using the OMDb API.
- **Favorites Management:** Add, edit, and delete movies from your favorites list.
- **Responsive UI:** The frontend is designed to be responsive on both desktop and mobile.
- **API Integration:** Backend API handles all the business logic, including adding and deleting favorites.
  
---

## Installation

To run this application locally, you need to set up both the frontend and the backend.

### **Frontend Setup**

1. Clone the repository:
   `
   git clone https://github.com/your-username/movie-search.git
   cd movie-search
  `

2. Navigate to the frontend folder: `cd frontend`
3. Install dependencies: `npm install`
4. Start the frontend development server: `npm run dev`



### **Backend Setup**

1. Navigate to the backend folder:
   `
   cd backend
  `

2. Install dependencies: `npm install`
3. Set up the database:
    Make sure you have Postgres running locally.
4. Start the backend server: `npm run start:dev`


#### API Documentation
The backend exposes several endpoints for interacting with the movie data and favorites:
- GET /omdb/search?title=batman&page=20 Fetch a list of movies based on the search query.
    - Query parameters: title, page (pagination)

-POST /movies: Add a movie to the favorites list.
        Request body: Movie object (e.g., title, poster, year, etc.)

- GET /movies: Retrieve the list of favorite movies.

- DELETE /movies/:id: Delete a movie from the favorites list by ID.

- PUT /movies/:id: Edit a favorite movie by ID.



- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications.
- **Express.js:** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB:** A NoSQL database program that uses JSON-like documents with optional schemas, perfect for handling a flexible product catalog.
- **Redis:** An in-memory data store used for caching and real-time data processing.
