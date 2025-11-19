Task Management App

A simple and secure Task Management Application built with React + Vite, featuring full user authentication, task management (CRUD), and a clean UI powered by TailwindCSS, Material UI (MUI), and Redux Toolkit.
Only authenticated users can access the dashboard, ensuring a protected and structured workflow.

🚀 Project Description

This project provides users with the ability to manage their daily tasks efficiently. It includes:

User Registration

User Login

Protected Dashboard (Authorized Users Only)

Add New Tasks

Update Existing Tasks

Delete Tasks

State managed using Redux Toolkit

The UI is built for simplicity, speed, and responsiveness.

🧰 Tech Stack

React (Vite)

Redux Toolkit

TailwindCSS

Material UI (MUI)

React Router

📦 Installation & Setup Instructions

Follow these steps to run the application locally:

1. Clone the Repository
git clone <your-repository-url>
cd <project-folder>

2. Install Dependencies
npm install

3. Setup Environment Variables (Optional)

Create a .env file in the root directory if using an API:

VITE_API_URL=http://localhost:5000

4. Run the Application
npm run dev


The application will be available at:
👉 http://localhost:5173

▶️ Running Instructions

The application is designed to run with minimal configuration:

Install packages using npm install

Start the development server using npm run dev

Open your browser and visit http://localhost:5173

That's it!

🧩 Key Design Decisions
1. Vite for Faster Development

Vite was chosen over Create React App (CRA) due to:

Lightning-fast HMR

Faster build times

Better developer experience

2. Redux Toolkit for State Management

Handles authentication state

Manages tasks effectively with slices

Reduces boilerplate and improves state consistency

3. TailwindCSS + Material UI Combination

TailwindCSS for layout, spacing, and utility styles

MUI for modern, accessible, and reusable components

Allows a balance of custom UI and standardized components

4. Protected Routes

React Router is used to block unauthorized users from accessing:

/dashboard

Task-related pages

This ensures only authenticated users interact with task data.

5. Clean & Scalable Folder Structure

A modular approach is used to maintain code clarity:

src/
  components/
  pages/
  redux/
  hooks/
  utils/
  styles/

📝 Assumptions Made During Development

Backend API exists or will be implemented for:

Login

Registration

Task CRUD operations

Authentication uses tokens (e.g., JWT) stored in Redux or localStorage.

Only authenticated users should be able to access dashboard and manage tasks.

Validation is basic and can be expanded based on project requirements.

Each task belongs to a specific logged-in user.

📄 Available NPM Scripts
Command	Description
npm run dev	Runs the development server
npm run build	Creates production build
npm run preview	Previews the production build
📌 Features

Fully responsive UI

Secure authentication

Dashboard with CRUD operations

Clean and reusable component structure

Easy to extend and integrate with APIs
