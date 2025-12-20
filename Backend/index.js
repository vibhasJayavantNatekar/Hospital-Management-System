const express = require('express')
const {connect} = require('./Config/db')
const DoctorRouter = require('./Routes/DoctorRoutes')
const userRouter = require('./Routes/userRoutes')

const app = express();

app.use(express.json())

//conect Database
connect()

const port = process.env.PORT || 5000

//Routes
app.use('/doctors',DoctorRouter)
app.use('/user' ,userRouter)



app.listen(port,()=>{
    console.log('we are listening on port 5000 ', `http://localhost:${port}/`);
    
})