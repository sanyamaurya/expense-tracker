import React, { useEffect, useState } from "react";
import axios from "axios";


export default function Expenses() {
const [items, setItems] = useState([]);
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");


async function load() {
setItems((await axios.get("/api/expenses")).data);
}


async function add() {
if (!title || !amount) return;
await axios.post("/api/expenses", { title, amount });
setTitle("");
setAmount("");
load();
}


async function del(id) {
await axios.delete("/api/expenses/" + id);
load();
}


useEffect(() => { load(); }, []);


return (
<div className="p-10">
<h1 className="text-3xl font-bold text-blue-600">Expenses</h1>


<div className="flex gap-4 mt-6">
<input className="border p-2 rounded" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
<input className="border p-2 rounded" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
<button className="bg-blue-600 text-white px-4 rounded" onClick={add}>Add</button>
</div>


<ul className="mt-6 space-y-2">
{items.map(x => (
<li key={x.id} className="p-3 shadow flex justify-between bg-white rounded">
{x.title} - ₹{x.amount}
<button className="text-red-500 font-bold" onClick={() => del(x.id)}>X</button>
</li>
))}
</ul>
</div>
);
}