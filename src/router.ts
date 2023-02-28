import { Router } from "express"
import { getPrivateCerts, getPublicCerts, postCert } from './handler'
import { deleteCert } from './handler/deleteCert'
import { deleteCerts } from './handler/deleteCerts'

export const router = Router()

router.get('/', (_req, res) => res.json({ service: 'OAK - JSON Web Key Store (JWKS)' }))
router.post('/certs', postCert)
router.get('/certs', getPublicCerts)
router.get('/certs/private', getPrivateCerts)
router.delete('/certs/:kid', deleteCert)
router.delete('/certs', deleteCerts)
