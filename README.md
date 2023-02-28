# OAK - JSON Web Key Store (JWKS)
Generate and management keys as JWK, and auto rotate keys.

## Scope - Management Essencial
- [x] request new cert (key)
- [x] delete key
- [x] delete all keys
- [x] get public keys (JWKS / PEM)
- [x] get private keys (JWKS / PEM)

## Scope - Management Rotation
- [ ] request new key with rotate config
- [ ] schedule for rotate new keys

## Use
Almost all routes need to be internal.

Only JWKS URI need to be exposed to public `GET {domain}/certs`, default return is JWKS.

If need certs in PEM format, can be called `GET {domain}/certs?type=PEM`.

## Test

Project have jest configured with coverage, for run execute: `pnpm test`

Jest create folder named `.coverage` with all issues for test coverage.

## Run

First install dependencies of project with `pnpm i`

Second run this command for execute local instance `pnpm dev`

Now API running on [http://localhost:3000/](http://localhost:3000/)
