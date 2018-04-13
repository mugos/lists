import { expect } from './../helpers/chai'

import getClient from './../../src/app/storage/functions/getClient'
import purgeDatabase from './../../src/app/storage/functions/purgeDatabase'

import installTenant from './../../src/app/storage/functions/installTenant'
import hasTenant from './../../src/app/storage/functions/hasTenant'
// import deleteTenant from './../../src/app/storage/functions/deleteTenant'

const client = getClient()
const tenant = 'demo'
const env = 'test'

describe('Tenants', function() {
  beforeEach(async function () {
    // Purge the database
    await purgeDatabase(client)(env)
  })

  it('installTenant', async function() {
    // Install it
    await expect(installTenant(client)(tenant)).to.eventually.eql(true)
    await expect(installTenant(client)(tenant)).to.eventually.eql(false)
  })

  it('hasTenant', async function() {
    await expect(hasTenant(client)(tenant)).to.eventually.eql(false)
    await expect(installTenant(client)(tenant)).to.eventually.eql(true)
    await expect(hasTenant(client)(tenant)).to.eventually.eql(true)
  })

  it.skip('deleteTenant', async function() {
  })
})

