import { Link } from "react-router-dom";


export default function Navbar() {
return (
<nav className="flex justify-between px-8 py-4 shadow bg-white sticky top-0 z-50">
<h1 className="text-xl font-bold text-blue-600">ExpenseTracker</h1>
<div className="flex gap-6 text-lg">
<Link to="/">Home</Link>
<Link to="/dashboard">Dashboard</Link>
<Link to="/expenses">Expenses</Link>
<Link to="/about">About</Link>
<Link to="/profile">Profile</Link>
<Link to="/signin">Sign In</Link>
</div>
</nav>
);
}