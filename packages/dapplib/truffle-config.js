require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan razor spice quality harvest pave army genuine'; 
let testAccounts = [
"0x7b82433e165e7a988a38b02a234e4a25b66e044fe1469e8027b0d995b6b6f728",
"0xc392b3705f846ae1aeae6cf79aa0eabef1beec4e463b2a644304b525f7027227",
"0x90929aabe28f27e99aa2bfc6b2f8009b88ebb048e10e5b0cd4be3c31ec1bf521",
"0x83153baf2c82d57179def4e28212737c1fb72d2a645b32085d3b2ed97ce5e3ce",
"0x4dc85a449c626925a899958b32407a5eb4de3646c82191ece99117cf46385d5f",
"0x402705868772941670c72d76224074e4f293656af08849068f60a8cfd3a934e3",
"0x213f92267bbf4ead3274d522b660129fb75c2c54af082ddb041509d9807fe56d",
"0x0664a4844851f63a1d247b4b6d52994fda41ca68aa7b708927a02a5af2eef6c8",
"0x28bb0f0ba6540fd12c878a00bec6b5493b09b07518ce4ce2bef5a9dacfc178c9",
"0xbf597babfff2e20f950890d6946ff4760592e9d1f049133c2e2d050c45ec3d66"
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

