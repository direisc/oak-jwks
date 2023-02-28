import { RequestHandler } from 'express'
import { extractJWKS } from '../service/KeyService'
import { typeCerts } from '../service/KeyService/types'

export const getPublicCerts: RequestHandler = async (req, res) => {
  res.json({ keys: await extractJWKS(typeCerts.parse(req.query.type)) })
}
