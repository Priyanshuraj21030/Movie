# Movie Database Application

A React-based movie database application that allows users to browse and search movies using The Movie Database (TMDB) API.

## Features

- Browse popular movies
- Search for specific movies
- Load more movies with pagination
- Responsive grid layout
- Movie details including:
  - Title
  - Release Year
  - Rating
  - Description
  - Movie Poster

## Technologies Used

- React.js
- TMDB API
- CSS Grid & Flexbox
- Environment Variables

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- TMDB API key (get it from [TMDB website](https://www.themoviedb.org/documentation/api))

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Rename `.env.example` to `.env` and add your TMDB API key OR Create a `.env` file in the root directory and add your TMDB API key:

env
REACT_APP_TMDB_API_KEY = your_tmdb_api_key_here

4. Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`


## Key Features Implementation

### Movie List
- Fetches popular movies from TMDB API
- Implements pagination with "Load More" functionality
- Handles loading and error states
- Responsive grid layout for movie cards

### Movie Search
- Real-time search functionality
- Clears previous results when searching
- Error handling for failed searches

### Movie Cards
- Displays movie information in a clean layout
- Handles missing data with fallback values
- Responsive image loading with fallback images

## Available Scripts

- `npm start`: Runs the app in development mode

## Error Handling

The application handles various error cases:
- API fetch failures
- Missing movie data
- Missing images
- Invalid API keys
- Network errors

## License

This project is licensed under the MIT License

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Create React App](https://create-react-app.dev/) for the initial project setup