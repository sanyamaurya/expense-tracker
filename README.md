🧾 Expense Tracker Web Application

A full-stack MERN web application designed to help users track expenses, manage wallets, view analytics, and maintain profiles, with secure authentication and modern UI.

🚀 Features
✅ User Authentication

JWT-based secure login & signup

Password encryption using bcrypt

Protected routes (frontend + backend)

💸 Expense Management

Add, edit, delete expenses

Categorize expenses (Food, Travel, Utilities, etc.)

Filter by date, category, and amount

Wallet-wise expense tracking

📊 Dashboard & Analytics

Total expenses summary

Category-wise distribution

Monthly spending trends

Clean UI for easy navigation

👤 User Profile

View & update user details

Profile preferences

Account management

Future integration: upload profile picture

🗄️ Database

MongoDB database for users, expenses, categories, and transactions

Mongoose models for structured schema design

🛠️ Tech Stack
Frontend

React.js

React Router

Axios

CSS / Tailwind / Custom UI components

Backend

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Bcrypt password hashing

Tools

Postman (API Testing)

GitHub & Git

VS Code

📁 Folder Structure
/project-root
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── context
    │   ├── services
    │   └── App.js

🔐 Backend API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and get token
Expense Routes
Method	Endpoint	Description
GET	/api/expense	Get all expenses for a user
POST	/api/expense/add	Add a new expense
PUT	/api/expense/:id	Update an expense
DELETE	/api/expense/:id	Delete an expense
Profile Routes
Method	Endpoint	Description
GET	/api/profile	Get profile details
PUT	/api/profile/update	Update profile       


🧪 Testing

Manual testing using Postman for all API routes

UI testing (form validation, redirect, error handling)

Database validation using MongoDB Compass

🚧 Challenges Faced

Integrating frontend with secure JWT-based authentication

Ensuring protected routes do not load without tokens

Managing state across multiple components

Designing a clean and responsive UI

🎓 Learnings & Takeaways

Full understanding of MERN stack architecture

Working with API routes, controllers, and middleware

Improved React component structure

JWT authentication workflow

Real-world database schema design

🔮 Future Enhancements

Add income tracking

Export expense data (PDF, Excel)

Add charts & advanced analytics

Upload profile picture

Add dark/light mode

Mobile app using React Native
