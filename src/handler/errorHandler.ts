import { ErrorRequestHandler } from "express"

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error(error)
  return res.status(500).json({ message: error.message })
}
