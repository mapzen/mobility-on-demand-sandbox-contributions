# OpenAddresses Data Maintenance Backend Mock

This is intended as a testing utility only. It **DOES NOT** actually perform any work on the backend. 
All endpoints are stubs with canned responses.
 
## setup

```bash
$ cd tests/mocks/oa_backend
$ npm install
$ npm start
```

## usage

#### GET example with params

```bash
$ curl -X GET localhost:3000/regions?country=us
```

#### POST example with json data

```bash
$ curl -H "Content-Type: application/json" -X POST -d '{"country":"us","region":"ny"}' localhost:3000/job
```
