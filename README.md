# js-blockchain

A simple ExpressJS application interfacing a blockchain. Utilizes web-scokets to deomnstrate synchonization between multiple clients/chains (basic distribute ledger).

## Installation

```
$ npm install
$ yarn
```

## Usage

### Tests

```
$ npm run test
$ yarn test
```

### Development

```
$ npm run dev
$ yarn dev
```

Default HTTP_PORT = 3001
Default P2P_PORT = 5001

### Additional Dev Instances

```
$ $env:HTTP_PORT="xxxx"; $env:P2P_PORT="xxxx"; $env:PEERS="ws://localhost:xxxx,ws://localhost:xxxx..."; npm run dev;
$ $env:HTTP_PORT="xxxx"; $env:P2P_PORT="xxxx"; $env:PEERS="ws://localhost:xxxx,ws://localhost:xxxx..."; yarn dev;
```

### Run

```
$ npm run serve
$ yarn serve
```

### Docker

Deploy with

```
$ docker-compose up
```

\*will deploy two chains (alpha and bravo)

## License

[MIT](https://choosealicense.com/licenses/mit/)
