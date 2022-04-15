require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind hour install permit force senior'; 
let testAccounts = [
"0xed6921f5942323fadb67f4bd6e9e34553f2345f3ce620c140aa1d9595622903f",
"0xd3da6270aa366188082503f25f0d995233131afa7d816ab2cbfde5abcef22ee2",
"0x9c05698daec415b0b6f71b596ee9ca9605fd7cb9f8707bf9f58e41662f1bae29",
"0x71387a17f530c653115b2c5b406d320821ae1dc9e07c036e8dcac46926da6b02",
"0x97c5a1b4f03ee383c3cffbbecbf449bc832a3a5f621e5f93a07889f4621e9bc1",
"0xa27fe2d24616b49939e432db2323dbc067e489bd27dc96f7acebe0f6c056ff25",
"0xde6f1904bec8b5b0e7c515ad49f0bfa9aa22efddcc61298619135187e560039a",
"0x7f1ac17e4095dff3476423bb2493d85c2beba2b94791ef9daabd0c6ca49a0763",
"0x9ee8ad07c14ec8f206406915925f8d04a871f5799808b9509dd1c8e58bc668d3",
"0x133d596e8aa45b3e54f5d091452778b9d5a0dfaecd3ad18fb4de54c3c352e107"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

