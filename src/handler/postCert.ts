import { RequestHandler } from 'express'
import { requestNewKey } from '../service/KeyService'
import { keyRequest } from '../service/KeyService/types'

export const postCert: RequestHandler = async (req, res) => {
  res.json(await requestNewKey(keyRequest.parse(req.body)))
}
