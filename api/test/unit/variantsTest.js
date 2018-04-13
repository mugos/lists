import { expect } from './../helpers/chai'

import saveListItem from './../../src/app/storage/functions/saveListItem'
import saveListItems from './../../src/app/storage/functions/saveListItems'
import deleteListItem from './../../src/app/storage/functions/deleteListItem'
import getListItem from './../../src/app/storage/functions/getListItem'
// import deleteListsItem from './../../src/app/storage/functions/deleteListsItem'
// import getListItems from './../../src/app/storage/functions/getListItems'

// Contracts
import { getVariants } from './../../src/app/contracts'

// Common
import getClient from './../../src/app/storage/functions/getClient'
import purgeDatabase from './../../src/app/storage/functions/purgeDatabase'
import incrListsCount from './../../src/app/storage/functions/incrListsCount'

const client = getClient()
const tenant = 'demo'
const env = 'test'

describe('Variants', function() {
  beforeEach(async function () {
    // Purge the database
    await purgeDatabase(client)(env)
  })

  it('saveListItem', async function() {
    const item = { ref: 1, qty: 3 }
    const id = await incrListsCount(client)(tenant)

    await expect(saveListItem(client)(tenant, id, item)).to.eventually.eql([ 1, 'OK' ])
  })

  it('getListItem', async function() {
    const variant = { ref: 1, qty: 3 }
    const listId = await incrListsCount(client)(tenant)
    await saveListItem(client)(tenant, listId, variant)

    await expect(getListItem(client)(tenant, listId, variant.ref)).to.eventually.not.eq(null)
    await expect(getListItem(client)(tenant, listId, variant.ref)).to.eventually.eql({ ref: 1, qty: 3 })
  })

  it('deleteListItem', async function() {
    // Setup
    const variant = { ref: 1, qty: 3 }
    const listId = await incrListsCount(client)(tenant)
    await saveListItem(client)(tenant, listId, variant)

    const variantId = 1
    await expect(deleteListItem(client)(tenant, listId, variantId)).to.eventually.eql([ 1, 1 ])
  })

  it.skip('saveListItems', async function() {
    const id = await incrListsCount(client)(tenant)
    const items = getVariants({ variants: [ { ref: 1, qty: 1 } ] })

    await expect(saveListItems(client)(tenant, id, items)).to.eventually.eql([ 1, 'OK' ])
  })

  it.skip('deleteListsItem ', async function() {
  })

  it.skip('getListItems  ', async function() {
  })
})

