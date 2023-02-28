import { z } from 'zod'

const keyRSA = z.object({
  alg: z.enum(['RSA']),
  size: z.number().int().optional(),
  expDays: z.number().positive().optional(),
})

const keyEC = z.object({
  alg: z.enum(['EC']),
  size: z.enum(['P-256', 'P-384', 'P-521', 'secp256r1', 'secp384r1', 'secp521r1']).optional().default('P-256'),
  expDays: z.number().positive().optional(),
})

export const keyRequest = z.union([keyRSA, keyEC])
export type KeyRequest = z.input<typeof keyRequest>
export type KeyRequestOutput = z.output<typeof keyRequest>

export const queryCertsSchema = z.object({
  type: z.enum(['PEM', 'JSON']).default('JSON')
})
