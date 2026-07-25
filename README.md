# ChefsPedia

ChefsPedia is a responsive recipe-discovery web application built with React. It allows users to browse meals, search recipes by name, filter recipes by country, view complete cooking details, and switch between light and dark themes.

The application uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch live recipe data.

## Features

- Search recipes by meal name
- Filter recipes by country or cuisine
- Browse a collection of available recipes
- View recipe images, ingredients, measurements, and cooking instructions
- Watch recipe videos through YouTube links when available
- Open the original recipe source when provided
- Responsive recipe sliders
- Dedicated recipe details pages
- Light and dark themes
- Saved theme preference using `localStorage`
- Responsive layouts for phones, tablets, and desktop screens
- Loading, error, empty-result, and recipe-not-found states
- Sticky navigation bar and cuisine navigation
- Smooth scrolling back to the top

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- React Slick
- Slick Carousel
- Lucide React
- TheMealDB API

## API Usage

ChefsPedia fetches recipe data from TheMealDB:

```text
https://www.themealdb.com/api/json/v1/1/
```

The main endpoints used are:

| Purpose | Endpoint |
| --- | --- |
| Search by meal name | `search.php?s={name}` |
| Filter by country | `filter.php?a={area}` |
| Filter by ingredient | `filter.php?i={ingredient}` |
| Filter by first letter | `search.php?f={letter}` |
| Get recipe details | `lookup.php?i={id}` |

## Search Flow

Both the navbar and hero-section search bars use the same search function.

When a user searches for a meal, the application navigates to:

```text
/search?q=chicken
```

The search page reads the `q` value, requests matching meals from TheMealDB, and displays every result using the reusable `RecipeCard` component.

Country buttons use the same search-results page:

```text
/search?area=Indian
```

The page detects the `area` parameter and fetches recipes belonging to that country.

## Theme System

The application uses React Context to share the selected theme across every component.

Users can open the settings page and choose:

- Light theme
- Dark theme

The selected value is saved in `localStorage`, so the theme remains selected after refreshing or reopening the website.

## Responsive Design

ChefsPedia uses Tailwind CSS breakpoints to adapt its layout:

- Navigation elements resize on smaller screens
- Country buttons become horizontally scrollable
- Recipe grids change their column count based on screen width
- Sliders display fewer cards on tablets and phones
- The recipe-details layout changes from side-by-side to stacked
- Text sizes, spacing, and padding decrease on smaller screens

## Routes

| Route | Page |
| --- | --- |
| `/` | Home page |
| `/search?q={name}` | Meal-name search results |
| `/search?area={country}` | Country-based recipe results |
| `/recipes` | All recipes |
| `/recipes/:id` | Recipe details |
| `/settings` | Theme settings |

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Required Packages

If any dependency is missing, install the packages with:

```bash
npm install axios react-router-dom lucide-react react-slick slick-carousel
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── AllRecipes.jsx
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
├── context/
│   └── ThemeContext.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Main Components

### `useFetch`

A reusable custom hook responsible for:

- Fetching API data with Axios
- Tracking loading state
- Handling request errors
- Returning fetched data to components

### `RecipeCard`

A reusable card that displays a meal image and name. Clicking a card opens its dedicated recipe-details page.

### `Searchview`

Reads search parameters from the URL and displays either:

- Recipes matching a meal name
- Recipes belonging to a selected country

### `RecipeDetailedView`

Fetches one recipe using its ID and displays:

- Recipe image and name
- Category and country
- Ingredients and measurements
- Cooking instructions
- YouTube video link
- Original recipe source

### `ThemeContext`

Stores the current theme, updates the document’s `dark` class, and saves the selected theme in the browser.

## Future Improvements

- Add favourites and saved recipes
- Add filters for ingredients and categories
- Add pagination or lazy loading
- Add user authentication
- Improve accessibility and keyboard navigation
- Replace remote hero images with locally hosted assets
- Add automated tests

## Author

**Abhinav Bhatia**

Built as a frontend-development project using React, Tailwind CSS, and a public recipe API.

## Acknowledgements

- [TheMealDB](https://www.themealdb.com/) for recipe data
- [Lucide](https://lucide.dev/) for icons
- [React Slick](https://react-slick.neostack.com/) for recipe sliders

