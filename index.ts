import Express from "express";
import { add, subtract } from "./calc-functions";

const app = Express();

app.get("/add/:num1/:num2", (req,res)=>{
    const {num1,num2} = req.params;
    const sum = add(Number(num1),Number(num2));
    res.status(201);
    res.send(String(sum));
})

app.get("/subtract/:num1/:num2", (req,res) =>{
    const {num1,num2} = req.params;
    const diff = subtract(Number(num1), Number(num2));
    res.status(201);
    res.send(String(diff));
})

//query params not in route

//localhost:3000/subtract?num1=100&num2=80
app.get("/subtract", (req,res) =>{
    const {num1, num2} = req.query;
    const diff = subtract(Number(num1),Number(num2));
    res.send(String(diff))
})

app.listen(3000, () => console.log("App has started"));