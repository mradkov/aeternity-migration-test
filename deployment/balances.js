var Wallet = require('ethereumjs-wallet');
var balances = [];

for(var i = 0; i <= 5000; i++){
    const wallet = Wallet.generate();

    var balance = [wallet.getAddressString(), {"value": Promise.resolve(0), "claimed": false}];
    balances.push(balance);
}

module.exports = balances;

// [
//     ["0x005e288d713a5fb3d7c9cf1b43810a98688c7223", {"value": Promise.resolve(0), "claimed": false}],
//     ["0xA284EC5CA500e09815737ed9AD6a3Dc495F9D75C", {"value": Promise.resolve(0), "claimed": false}],
//     ["0xa6a7d616dbbb6bf5343b37577aa5c319ef33e311", {"value": Promise.resolve(0), "claimed": false}],
//     ["0xcD06585cedA5cB4A5A110D1F236c23859f162Fb1", {"value": Promise.resolve(0), "claimed": false}],
//     ["0xcD06585cedA5cB4A5A110D1F236c23859f262Fb1", {"value": Promise.resolve(0), "claimed": false}],
// ]