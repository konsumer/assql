const { readFileSync } = require('fs')
const loader = require('@assemblyscript/loader')
module.exports = loader.instantiateSync(readFileSync(`${__dirname}/build/optimized.wasm`), { /* imports */ })
