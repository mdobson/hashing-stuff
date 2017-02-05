const crypto = require('crypto');


module.exports = function generateBlock(data, nonce) {
  var hashData = '';
  while(hashData.indexOf('000') != 0) {
    var hash = crypto.createHash('sha256');
    hash.update(nonce + '');
    hash.update(data);
    hashData = hash.digest('hex'); 
    nonce++;
  }

  return {
    hash: hashData,
    nonce: nonce,
    data: data
  };
}

