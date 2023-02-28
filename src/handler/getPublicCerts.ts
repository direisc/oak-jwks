import { RequestHandler } from 'express'
import { extractJWKS } from '../service/KeyService'
import { queryCertsSchema } from '../service/KeyService/types'

export const getPublicCerts: RequestHandler = async (req, res) => {
  res.json({
    keys: await extractJWKS({
      ...queryCertsSchema.parse(req.query),
    })
  })
}
