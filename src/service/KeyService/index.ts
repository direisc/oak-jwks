import { PrismaClient } from '@prisma/client'
import { JWK } from 'node-jose'
import { nanoid } from 'nanoid'
import {
  KeyRequest,
} from './types'

const prisma = new PrismaClient()

export const requestNewKey = async ({ alg, expDays, size }: KeyRequest) => {
  const kid = `oak:${nanoid()}`

  const privateKey = await JWK.createKey(
    alg,
    size,
    { kid }
  )
  const keyJSON = privateKey.toJSON(true)

  await prisma.key.create({
    data: {
      kid,
      alg,
      size: size?.toString(),
      exp: expDays ? new Date(Date.now() + (expDays * 24 * 60 * 60 * 1000)) : null,
      key: keyJSON,
    },
  })

  return keyJSON
}

type ExtractJWKS = {
  type: 'PEM' | 'JSON'
  exportPrivateKeys?: boolean
}
export const extractJWKS = async ({
  type = 'JSON',
  exportPrivateKeys
}: ExtractJWKS) => {
  const keyStore = JWK.createKeyStore()

  const keys = await prisma.key.findMany({
    select: {
      key: true,
    },
    where: {
      OR: [
        {
          exp: {
            equals: null
          },
        },
        {
          exp: {
            gt: new Date(),
          }
        }
      ]
    },
    orderBy: {
      exp: {
        sort: 'desc',
        nulls: 'first'
      }
    }
  })

  return await Promise.all(keys.map(async ({ key }) => {
    const _key = await keyStore.add(key)
    if (type === 'PEM') {
      return _key.toPEM(exportPrivateKeys)
    } else {
      return _key.toJSON(exportPrivateKeys)
    }
  }))
}

export const deleteKey = async (kid: string) => {
  await prisma.key.delete({ where: { kid }})
}

export const deleteKeys = async () => {
  await prisma.key.deleteMany()
}
