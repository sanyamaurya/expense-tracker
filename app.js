const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const fs=require('fs');
const {v4:uuid}=require('uuid');
const app=express();
app.use(cors());
app.use(bodyParser.json());

const DATA='./data/expenses.json';

function read(){
 try{return JSON.parse(fs.readFileSync(DATA));}catch(e){return []}
}
function write(d){fs.writeFileSync(DATA,JSON.stringify(d,null,2));}

app.get('/api/expenses',(req,res)=>{res.json(read());});
app.post('/api/expenses',(req,res)=>{
 const {title,amount}=req.body;
 if(!title||!amount) return res.status(400).json({error:'Missing fields'});
 const all=read();
 const item={id:uuid(),title,amount:Number(amount),date:new Date().toISOString()};
 all.push(item); write(all); res.json(item);
});
app.delete('/api/expenses/:id',(req,res)=>{
 const all=read().filter(x=>x.id!==req.params.id);
 write(all); res.json({success:true});
});
app.listen(5000,()=>console.log('Backend running 5000'));
