import { RequestHandler } from 'express'
import { deleteKey } from '../service/KeyService'

export const deleteCert: RequestHandler = async (req, res) => {
  res.send(await deleteKey(req.params.kid))
}
