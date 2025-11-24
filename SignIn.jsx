import { useState } from "react";


export default function SignIn() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


function handleSubmit(e) {
e.preventDefault();
alert("Signed in as: " + email);
}


return (
<div className="p-10 max-w-md mx-auto shadow-lg mt-10 rounded-xl bg-white">
<h1 className="text-3xl font-bold text-blue-600 text-center">Sign In</h1>


<form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
<input type="email" className="border p-3 rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
<input type="password" className="border p-3 rounded" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
<button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Sign In</button>
</form>
</div>
);
}