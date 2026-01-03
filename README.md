# Twitter Clone – React Mentorship Project

This project is a Twitter-like web application developed during the React Mentorship Program (Internship) at iwconnect in 2022.
The goal of the project was to practice real-world React development, state management, and application architecture.

The project was later revisited and refactored to improve code quality, fix legacy issues, and modernize parts of the application.

## 🛠️ Tech Stack
React + TypeScript
React Router
Redux (global state management)
Context API (authentication & integrations; Dark-Light Theme)
Styled-components
Firebase Authentication (in progress / planned)
Mock APIs for posts and user data
GitHub Pages for deployment

## ✨ Features
User authentication flow (login / register)
Global state management with Redux
Context API for authentication abstraction
Dark / Light theme support
Posts feed (API-based)
Avatar image integration
Protected routes
Responsive UI inspired by Twitter

## 🧠 Architecture Notes
Redux is used as the single source of truth for global application state (user, loading, errors).
Context API is used as an integration layer (authentication logic, external services).
The project intentionally contains both Redux and Context to demonstrate understanding of their different responsibilities.
This project represents a legacy codebase refactoring exercise, common in real-world frontend projects.

## 🚀 Getting Started
Prerequisites
Node.js v16.x (recommended for compatibility with Create React App)

Installation
```npm install```

Run locally
```npm start```

Build
```npm run build```

Deploy to GitHub Pages
```npm run deploy```

## 🔧 Environment Variables
If Firebase is enabled, create a .env file and add:

```REACT_APP_FIREBASE_API_KEY=your_key_here```
```REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain_here```

📚 What I Learned
Working with legacy React codebases
Refactoring without breaking existing functionality
Managing authentication and global state
Combining Redux and Context API responsibly
Debugging build and deployment issues
Preparing a project for production-like deployment

📌 Future Improvements

Complete Firebase authentication integration
Replace mock APIs with real backend
Improve folder structure and naming consistency
Add tests (unit & integration)
Migrate from CRA to Vite

👤 Author
Bazzomir 2022-2026
Developed during the React Mentorship Program (iwconnect, 2022)
Refactored and maintained as a personal learning and portfolio project.
