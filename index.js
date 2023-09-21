import express from "express"
const app = express()
const port = 8000

app.use("/", (req , res)=>{
    res.json({message:"Hello world!"})
})

app.listen(port ,()=>{
    console.log(`project is running at ${port}`)
})