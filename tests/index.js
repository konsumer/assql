const test = require('baretest')('assql')
const { strictEqual } = require('assert')

const myModule = require('..')

test('add', () => {
  strictEqual(myModule.add(1, 2), 3)
})

test.run()
