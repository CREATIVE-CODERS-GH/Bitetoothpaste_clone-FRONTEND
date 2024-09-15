
# Bitetoothpaste Frontend Development 📱

Welcome to the Bitetoothpaste Frontend Development project! This project is focused on creating the user interface for Bitetoothpaste, our e-commerce platform. The frontend will be built using React and styled with Tailwind CSS. This README outlines the tasks, team allocations, resources, and database field names for the frontend development team.

---

## Table of Contents 📋

- [Project Overview](##project-overview)
- [Frontend Structure](#frontend-structure)
- [Developer 1 Tasks](#developer-1-tasks)
- [Developer 2 Tasks](#developer-2-tasks)
- [Developer 3 Tasks](#developer-3-tasks)
- [Routing & Navigation](#routing--navigation)
- [Image Sourcing](#image-sourcing)
- [Database Schema](#database-schema)
- [Packages](#packages)
- [Tools & Resources](#tools--resources)

---

## Project Overview 🚀

The frontend project for Bitetoothpaste aims to provide a seamless and engaging user experience. Key tasks include:

- **Component Structure**: Building the static layout for major pages.
- **Routing & Navigation**: Setting up routing for smooth navigation.
- **Image Sourcing**: Identifying and integrating images into static layouts.

---

## Frontend Structure 📂

```
/bitetoothpaste-frontend
|-- /public
|   |-- /images         # Placeholder images and assets
|
|-- /src
|   |-- /components
|   |   |-- Homepage.js
|   |   |-- UserDashboard.js
|   |   |-- TrackOrder.js
|   |   |-- ProductList.js
|   |   |-- ProductDetail.js
|   |   |-- Cart.js
|   |   |-- Checkout.js
|   |   |-- Login.js
|   |   |-- Register.js
|   |
|   |-- /pages
|   |   |-- HomePage.js
|   |   |-- ProductPage.js
|   |   |-- CartPage.js
|   |   |-- CheckoutPage.js
|   |   |-- LoginPage.js
|   |   |-- RegisterPage.js
|   |
|   |-- /utils
|   |   |-- api.js      # API calls
|   |
|   |-- App.js          # Main app component with routing
|   |-- index.js        # Entry point
|
|-- tailwind.config.js  # Tailwind CSS configuration
|-- postcss.config.js   # PostCSS configuration
|-- package.json        # Project dependencies and scripts
```

---

## Developer 1 Tasks ⚙️

### Component Structure Planning & Static Layouts
- **Pages**: Homepage, User Account Dashboard, Track Order Page
- **Task**: Implement static layout for these pages using React and Tailwind CSS.

### Routing & Navigation Setup
- **Files**: `/src/App.js`
- **Task**: Set up routing for all main pages (home, product, cart, login).


---

## Developer 2 Tasks ⚙️

### Component Structure Planning & Static Layouts
- **Pages**: Product Listing Page (Shop), Product Detail Page
- **Task**: Implement static layout for these pages using React and Tailwind CSS.

### Image Sourcing (Initial Phase)
- **Task**: Identify and source placeholder images for product pages and banners.


---

## Developer 3 Tasks ⚙️

### Component Structure Planning & Static Layouts
- **Pages**: Cart Page, Checkout Page, Login/Register Pages
- **Task**: Implement static layout for these pages using React and Tailwind CSS.

### Image Sourcing (Initial Phase)
- **Task**: Identify and source placeholder images for cart, checkout, and login/register pages.


---

## Routing & Navigation 📍

The routing will be handled in `App.js` and will cover the following pages:

- **Homepage**: `/`
- **Product Listing Page**: `/shop`
- **Product Detail Page**: `/product/:id`
- **Cart Page**: `/cart`
- **Checkout Page**: `/checkout`
- **Login Page**: `/login`
- **Register Page**: `/register`



---

## Image Sourcing 🖼️

Images needed for the website include:

- **Product Images**: Placeholder images for various products.
- **Banners**: Promotional banners for the homepage and other pages.
- **Icons**: UI icons for navigation and actions.

**Tools for Image Sourcing:**
- **Unsplash**: [Unsplash](https://unsplash.com)
- **Lorem Picsum**: [Lorem Picsum](https://picsum.photos)
- **Pexels**: [Pexels](https://www.pexels.com)
- **Placeholder Tools**: [Placeholder.com](https://placeholder.com)



---

## Database Schema 🗃️

### User Schema
- **firstName**: String
- **lastName**: String
- **email**: String (unique)
- **password**: String
- **role**: String (default: 'user'; roles: user, admin)
- **cart**: Array of objects (each object includes `productId` and `quantity`)
- **reviews**: Array of objects (each object includes `productId`, `content`, and `rating`)

### Product Schema
- **name**: String
- **description**: String
- **price**: Number
- **stock**: Number
- **reviews**: Array of objects (each object includes `userId`, `content`, and `rating`)

### Order Schema
- **userId**: ObjectId (references User)
- **products**: Array of objects (each object includes `productId` and `quantity`)
- **totalPrice**: Number
- **status**: String (default: 'Pending'; other statuses: Delivered, Cancelled)

### Cart Schema
- **userId**: ObjectId (references User)
- **products**: Array of objects (each object includes `productId` and `quantity`)



---

## Packages 📦

The following packages are used in this project:

- **React**: Frontend library
  ```bash
  npm install react react-dom
  ```
- **Tailwind CSS**: Utility-first CSS framework
  ```bash
  npm install tailwindcss
  ```
- **React Router DOM**: Routing for React
  ```bash
  npm install react-router-dom
  ```
- **Axios**: HTTP requests
  ```bash
  npm install axios
  ```

For development:
```bash
npm install --save-dev tailwindcss postcss autoprefixer
```



---

## Tools & Resources 🛠️

- **Development**: Visual Studio Code, Webpack, Babel
- **Design**: Figma, Adobe XD
- **Image Sourcing**: Unsplash, Lorem Picsum, Pexels





---
