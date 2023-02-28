import { RequestHandler } from 'express'
import { deleteKeys } from '../service/KeyService'

export const deleteCerts: RequestHandler = async (req, res) => {
  res.send(await deleteKeys())
}
