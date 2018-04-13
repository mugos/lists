import { expect } from './../helpers/chai'

import saveListCategories from './../../src/app/storage/functions/saveListCategories'
import saveListCategory from './../../src/app/storage/functions/saveListCategory'
// import deleteListCategory from './../../src/app/storage/functions/deleteListCategory'
// import getListCategories from './../../src/app/storage/functions/getListCategories'

// Contracts
import { getCategories } from './../../src/app/contracts'

// Common
import getClient from './../../src/app/storage/functions/getClient'
import purgeDatabase from './../../src/app/storage/functions/purgeDatabase'
import incrListsCount from './../../src/app/storage/functions/incrListsCount'

const client = getClient()
const tenant = 'demo'
const env = 'test'

describe('Categories', function() {
  beforeEach(async function () {
    // Purge the database
    await purgeDatabase(client)(env)
  })

  it('saveListCategory ', async function() {
    const category = 1
    const id = await incrListsCount(client)(tenant)

    await expect(saveListCategory(client)(tenant, id, category)).to.eventually.eql([ 1, 1 ])
  })

  it.skip('saveListCategories', async function() {
    const id = await incrListsCount(client)(tenant)
    const categories = getCategories({ categories: [ 1 ] })

    await expect(saveListCategories(client)(tenant, id, categories)).to.eventually.eql([ 1, 'OK' ])
  })

  it.skip('deleteListCategory', async function() {
  })

  it.skip('getListCategories', async function() {
  })
})

