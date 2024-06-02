const express=require('express')
const app= express()
const port=4000
require('dotenv').config()
app.get('/',(req,res)=>{
    res.send('hello friends')
})
app.get('/twitter',(req,res)=>{
    console.log("Twitter is here")

})
app.listen(process.env.PORT,()=>{
    console.log(`example app listening at port: ${port}`)
})