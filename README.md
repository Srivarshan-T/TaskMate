
**TaskMate** is a simple and intuitive to-do list app built with React and Vite. It helps users efficiently manage tasks with features like adding, deleting, and marking tasks as completed.

## Project Overview

This repository contains the core source code (`src/`) and static assets (`public/`) for **TaskMate**. You will need to set up a new Vite project and replace the necessary folders with the ones in this repository to run the app locally.

## Key Features

- Add, delete, and mark tasks as completed.
- Simple and clean user interface.
- Fast and responsive.

## Live Demo

Check out the live version of **TaskMate** hosted online:  
**[TaskMate Live Demo]( https://todoweb02.web.app/#/todo)**

## Full Installation Process

Follow these steps to set up **TaskMate** locally:

### Step 1: Create a New Vite App

1. **Install Vite (if you don’t have it yet)**:
   ```bash
   npm create vite@latest taskmate --template react
   ```
   This will set up a new Vite project named `taskmate` with a React template.

2. **Navigate to the project directory**:
   ```bash
   cd taskmate
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Step 2: Replace the `src` and `public` Folders

1. **Delete the existing `src/` and `public/` folders** in the newly created Vite project:
   ```bash
   rm -rf src/ public/
   ```

2. **Copy the `src/` and `public/` folders** from the **TaskMate** repository and paste them into the `taskmate` project directory.

### Step 3: Install Missing Dependencies

If your **TaskMate** app uses additional libraries or dependencies, you’ll need to install them. Check your `src/` files for any external libraries, and install them:

For example:
```bash
npm install react-router-dom
```

### Step 4: Update the `.env` File (if applicable)

If your **TaskMate** app uses any environment variables (such as an API key), create a `.env` file in the root directory and add the necessary variables:

Example `.env` file:
```
VITE_WEATHER_API_KEY=your-api-key
```

### Step 5: Run the Development Server

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173` to view the app running locally.

## Project Structure

After following these steps, your project directory should look like this:

```
taskmate/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── components/
│   └── styles/
├── .env (optional)
├── package.json
├── vite.config.js
└── node_modules/
```

## Contributing

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

### How to Contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your branch:
   ```bash
   git push origin feature-branch-name
   ```
5. Open a pull request.


 

### Key Sections:
- **Live Demo**: Link to your Firebase-hosted demo.
- **Installation Process**: Full instructions for creating a new Vite project, replacing the `src` and `public` folders, and installing dependencies.
- **Contributing**: Instructions for other developers to contribute to the project.
- **Project Structure**: Description of the directory structure after setup.

 
