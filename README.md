# js-blockchain

A simple express application skeleton wrapping a blockchain

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



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)