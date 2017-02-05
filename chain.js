const block = require('./block');

const chain = [];

const content = ['foo', 'bar', 'baz', 'quux'];

var currentBlock = null;

content.forEach((c) => {
  //Start nonce at zero
  var newestBlock = block(c, 0);
  chain.push(newestBlock);
  if(currentBlock) {
    newestBlock.prev = currentBlock.hash; 
  }
  currentBlock = newestBlock;
});

console.log(JSON.stringify(chain, null, '  '));

