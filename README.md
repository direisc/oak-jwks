# OAK - JSON Web Key Store (JWKS)
management of certificates

## Scope
Generate and management keys as JWK, and auto rotate keys.

### Management Essencial
- [x] request new cert (key)
- [x] delete key
- [x] delete all keys
- [x] get public keys (JWKS / PEM)
- [x] get private keys (JWKS / PEM)

### Management Rotation
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

### Requests

For initial information using:

```
curl --request GET \
  --url http://localhost:3000/
```

Using this request for authenticate:

```
curl --request POST \
  --url http://localhost:3000/authenticate \
  --header 'Content-Type: application/json' \
  --data '{
	"username": "alice@prisma.io",
	"password": "alicePWD"
}'
```

Have two users on database:
```javascript
const users = [
  {
    email: 'alice@prisma.io',
    password: 'alicePWD',
  },
  {
    email: 'bob@prisma.io',
    password: 'bobPWD',
  },
]
```

Using this request for welcome, Authorization header is create with access_token from authenticate request:

```
curl --request GET \
  --url http://localhost:3000/welcome \
  --header 'Authorization: Bearer eyJhbGciOiJ...'
```
