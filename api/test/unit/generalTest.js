import { expect } from './../helpers/chai'

import getClient from './../../src/app/storage/functions/getClient'
import purgeDatabase from './../../src/app/storage/functions/purgeDatabase'

describe('General', function() {
  it('purgeDatabase', async function() {
    const client = getClient()
    const tenant = 'demo'
    const env = 'test'
    // const env = process.env.NODE_ENV

    await expect(purgeDatabase(client)("test")).to.eventually.eql('OK')
    expect(() => purgeDatabase(client)("production")).to.throw(TypeError, 'Incorrect Environment')
  })

  it('getClient', function() {
    const client = getClient()
    const tenant = 'demo'
    const env = 'test'
    const expectConnected = () => expect(client.connected).to.eql(true)
    client.on('connect', expectConnected)
  })

  it.skip('saveResource', async function() {
  })
})

