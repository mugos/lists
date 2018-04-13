import { curry } from 'ramda'

const log = curry(console.log)
const alog = curry((done, f) => f.then(data => {
  log('====>')(data)
  done()
}))

export { log, alog }
