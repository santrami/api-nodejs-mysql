const express= require('express')
const mysql= require('mysql')
const myconn= require('express-myconnection')
const routes= require('./routes')

const app= express()

app.set('port',3000)

const dboptions={
    host:"localhost",
    port:"3306",
    user: "root",
    password: "",
    database: 'library'
}

//middlewares
app.use(myconn(mysql,dboptions,'single'))
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send("hola")
})

app.use('/api',routes)


//server running
app.listen(app.get('port'),() =>{
    console.log('server running on port ', app.get('port'))
})

