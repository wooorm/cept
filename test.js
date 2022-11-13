import process from 'node:process'
import test from 'tape'
import {cept} from './index.js'

test('cept(context, key, callback)', function (t) {
  const original = process.cwd()
  const stop = cept(process, 'cwd', fake)

  t.equal(process.cwd(), fake())

  stop()

  t.equal(process.cwd(), original)

  t.end()
})

function fake() {
  return '~'
}
