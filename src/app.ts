import express from "express"
import helmet from 'helmet'
import cors from 'cors'

import { router } from './router'
import { errorHandler } from './handler'

export const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(router)
app.use(errorHandler)