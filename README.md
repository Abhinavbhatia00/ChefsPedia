# ChefsPedia

ChefsPedia is a modern and responsive recipe discovery application built with React. Users can search for meals, browse recipes by cuisine, view detailed cooking instructions, switch between light and dark themes, and save their favourite recipes.

## Live Demo

Live Website: https://chefspedia.netlify.app/

GitHub Repository: https://github.com/Abhinavbhatia00/ChefsPedia

## Features

### Recipe Search

- Search for recipes by meal name
- Search using the navbar or homepage search bar
- Display results on a dedicated search page
- Handle empty and invalid searches

### Browse Recipes

- Browse a collection of recipes
- View recipes using responsive cards
- Open a separate details page for every recipe
- Navigate through recipe sliders

### Cuisine Filtering

Users can filter recipes by cuisine, including:

- American
- British
- Canadian
- Chinese
- Indian
- Italian
- Mexican
- Russian
- Thai

### Favourite Recipes

- Add recipes to favourites
- Remove recipes from favourites
- View saved recipes on a dedicated favourites page
- See the number of saved recipes in the navbar
- Save favourites using localStorage
- Keep favourites after refreshing the website

### Recipe Details

The recipe details page displays:

- Recipe name
- Recipe image
- Category and cuisine
- Ingredients and measurements
- Cooking instructions
- YouTube recipe video
- Original recipe source when available

### Light and Dark Mode

- Dedicated settings page
- Switch between light and dark themes
- Theme managed using React Context API
- Theme preference saved in localStorage
- Selected theme remains active after refreshing

### Responsive Design

ChefsPedia is responsive across:

- Desktop
- Laptop
- Tablet
- Mobile

The navbar, hero section, search bars, recipe cards, sliders, details page, favourites page, and footer adjust according to the screen size.

### Loading and Error Handling

The application handles:

- API loading states
- Failed API requests
- Missing recipes
- Empty search results
- Invalid recipe IDs

## Tech Stack

### Frontend

- React
- JavaScript
- JSX
- Tailwind CSS
- HTML

### Libraries

- React Router DOM
- Axios
- React Slick
- Slick Carousel
- Lucide React

### State Management and Storage

- React Context API
- React useState
- React useEffect
- Browser localStorage

### API and Tools

- TheMealDB API
- Vite
- Git
- GitHub
- Netlify

## API Integration

ChefsPedia uses TheMealDB API to retrieve recipe data.

API Documentation: https://www.themealdb.com/api.php

The application uses API endpoints for:

- Searching recipes by name
- Filtering recipes by cuisine
- Filtering recipes by ingredient
- Loading recipe categories
- Fetching complete recipe details using a meal ID

## Project Structure

    src/
    ├── assets/
    │   └── hero.png
    │
    ├── components/
    │   ├── AllRecipes.jsx
    │   ├── Favourites.jsx
    │   ├── Footer.jsx
    │   ├── Global.jsx
    │   ├── Homeview.jsx
    │   ├── ImageSearch.jsx
    │   ├── Navbar.jsx
    │   ├── RecipeCard.jsx
    │   ├── RecipeDetailedView.jsx
    │   ├── RecipeSlider.jsx
    │   ├── Searchview.jsx
    │   ├── Settings.jsx
    │   ├── TrendingRecipe.jsx
    │   └── useFetch.js
    │
    ├── context/
    │   ├── FavoritesContext.jsx
    │   └── ThemeContext.jsx
    │
    ├── App.jsx
    ├── index.css
    └── main.jsx

## Application Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Displays the hero section, cuisines and recipe sliders |
| `/search?q=meal` | Search Results | Displays recipes matching the search |
| `/recipes` | All Recipes | Displays the recipe collection |
| `/recipes/:id` | Recipe Details | Displays information about one recipe |
| `/favourites` | Favourites | Displays recipes saved by the user |
| `/settings` | Settings | Allows the user to change the theme |

## Custom Data-Fetching Hook

The project uses a custom `useFetch` hook to handle API requests.

The hook manages:

- `data` — stores the API response
- `loading` — indicates whether the request is running
- `error` — stores an error message if the request fails

This prevents repeated Axios, loading, and error-handling code across different components.

## Favourites System

The favourites system uses React Context API to share saved recipes across the application.

It provides:

- `favorites` — contains saved recipes
- `toggleFavorite()` — adds or removes a recipe
- `isFavorite()` — checks whether a recipe is already saved

The favourites array is stored in localStorage whenever it changes.

This is currently a frontend-only system. Favourites are stored on the user's browser and do not synchronise between different devices.

## Theme Management

The website theme is managed using ThemeContext.

ThemeContext allows every component to access and change the current theme without passing theme props manually.

The selected theme is stored in localStorage so it remains active after refreshing or reopening the website.

## Main Challenges Solved

### Handling API Data Before Loading

API data initially starts as null. Optional chaining and fallback arrays are used to prevent the application from crashing before the data arrives.

### Preventing Blank Screens

Loading checks, error checks, missing-data checks, and fallback values were added to prevent runtime errors from making the website blank.

### Sharing Global State

React Context API is used to share theme and favourites data between components.

### Persistent User Preferences

Browser localStorage is used to preserve the selected theme and saved recipes.

### Dynamic Recipe Pages

React Router and URL parameters are used to create a separate page for every recipe.

### Multiple Search Bars

Both search bars use the same search function, keeping their behaviour consistent.

### Responsive Layout

Tailwind CSS breakpoints, flexible containers, responsive grids, and mobile-specific layouts are used throughout the website.

### Deployment

The project is deployed through Netlify and connected to GitHub for automatic deployments.

## What I Learned

Building ChefsPedia helped me understand and practise:

- React components
- Reusable component development
- Props and state
- Controlled inputs
- React hooks
- Custom hooks
- Context API
- Axios API requests
- Asynchronous JavaScript
- Conditional rendering
- Array mapping and filtering
- Optional chaining
- Dynamic routing
- URL parameters
- Search query parameters
- Browser localStorage
- Responsive Tailwind CSS
- Git and GitHub
- Netlify deployment
- Debugging React blank-page errors

## Future Improvements

- User registration and login
- Account-based favourites
- Favourite synchronisation across devices
- Weekly meal planner
- Shopping list generation
- Nutrition and calorie information
- Recipe ratings and reviews
- Custom recipe creation
- Backend and database integration

## Author

Abhinav Bhatia

GitHub: https://github.com/Abhinavbhatia00

LinkedIn: https://www.linkedin.com/in/abhinavb00/

Email: abhinavbhatiaofficial@gmail.com