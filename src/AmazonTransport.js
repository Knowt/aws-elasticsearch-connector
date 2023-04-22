const { Transport } = require('@elastic/elasticsearch')

function awaitAwsCredentials (awsConfig) {
  return new Promise((resolve, reject) => {
    awsConfig.getCredentials((err) => {
      err ? reject(err) : resolve()
    })
  })
}

module.exports = awsConfig => {
  class AmazonTransport extends Transport {
    request (params, options = {}, callback = undefined) {}
  }

  return AmazonTransport
}
