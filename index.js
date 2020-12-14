import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import totalRouter from './routes/total.router'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useFindAndModify: false,
}, () => {
  console.log('Database connected')
})

app.use('/totals', totalRouter)

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))