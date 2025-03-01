import express from "express"
import userRoute from '../backend/routes/userRoute.js'
import cors from 'cors'
import { connectDb } from "./config/db.js"
import cookieParser from "cookie-parser"
const app = express()
const port = 3000


//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));



//mongo connection
connectDb();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//api
app.use('/api/user',userRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})