import { expect } from './../helpers/chai'

import saveListOwner from './../../src/app/storage/functions/saveListOwner'
import saveListOwners from './../../src/app/storage/functions/saveListOwners'
import isListOwner from './../../src/app/storage/functions/isListOwner'
// import deleteListOwner from './../../src/app/storage/functions/deleteListOwner'
import getListOwners from './../../src/app/storage/functions/getListOwners'

// Contracts
import { getUser, getUsers } from './../../src/app/contracts'

// Common
import getClient from './../../src/app/storage/functions/getClient'
import purgeDatabase from './../../src/app/storage/functions/purgeDatabase'
import incrListsCount from './../../src/app/storage/functions/incrListsCount'

const client = getClient()
const tenant = 'demo'
const env = 'test'

describe('Owners', function() {
  beforeEach(async function () {
    // Purge the database
    await purgeDatabase(client)(env)
  })

  it('saveListOwner', async function() {
    const owner = { ref: 1 }
    const id = await incrListsCount(client)(tenant)

    await expect(saveListOwner(client)(tenant, id, owner)).to.eventually.eql([ 1, 1 ])
  })

  //
  it('should check if the user is owner of an list', async function() {
    const owner = { ref: 1 }
    const id = await incrListsCount(client)(tenant)

    // Save the list with user
    await saveListOwner(client)(tenant, id, owner)

    // Check it
    expect(await isListOwner(client)(tenant, id, getUser(owner))).to.be.eq(true)
  })

  it.skip('saveListOwners', async function() {
    const id = await incrListsCount(client)(tenant)
    const users = getUsers({ users: [ { ref: 1 } ] })

    await expect(saveListOwners(client)(tenant, id, users)).to.eventually.eql([ 1, 'OK' ])
  })

  it.skip('getListOwners', async function() {
  })

  it.skip('deleteListOwners', async function() {
  })
})

