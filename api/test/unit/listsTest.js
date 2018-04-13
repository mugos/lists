import { expect } from './../helpers/chai'
import { pipe } from 'ramda'


import saveList from './../../src/app/storage/functions/saveList'
import incrListsCount from './../../src/app/storage/functions/incrListsCount'
// import createList from './../../src/app/storage/functions/createList'
// import deleteList from './../../src/app/storage/functions/deleteList'
import getList from './../../src/app/storage/functions/getList'
import isOfficialList from './../../src/app/storage/functions/isOfficialList'
import listExists from './../../src/app/storage/functions/listExists'

// Contracts
import {
  setListName,
  setListSlug,
  setListVariants,
  setListUsers,
  generateItem,
  setListTenant,
  setListUser,
  setListOfficial,
  getListRef,
  getListSlug,
  getListVariants
} from './../../src/app/contracts'

// Common
import getClient from './../../src/app/storage/functions/getClient'
import purgeDatabase from './../../src/app/storage/functions/purgeDatabase'

const client = getClient()
const tenant = 'demo'
const env = 'test'

describe('Lists', function() {
  beforeEach(async function () {
    // Purge the database
    await purgeDatabase(client)(env)
  })

  it('incrListsCount ', async function() {
    await expect(incrListsCount(client)(tenant)).to.eventually.eql(1)
    await expect(incrListsCount(client)(tenant)).to.eventually.eql(2)
  })

  it('saveList', async function() {
    //
    const list = pipe(
      setListName('Sample List'),
      setListSlug,
      setListVariants([ generateItem(1, 1), generateItem(2, 5), generateItem(3, 1) ]),
      setListUsers([ setListUser(1, {}), setListUser(2, {}) ]),
      setListOfficial(true),
      setListTenant(tenant)
    )({})

    // Generate an ID
    const id = await incrListsCount(client)(tenant)

    //
    await expect(saveList(client)(tenant, id, list)).to.eventually.eql(true)

    // Get the saved list
    const savedList = await getList(client)(tenant, id)
    expect(getListRef(savedList)).to.be.eq(id)
    expect(getListSlug(savedList)).to.be.eq(getListSlug(list))
    expect(getListVariants(savedList)).to.be.with.lengthOf(getListVariants(list).length)
  })

  //
  it('should check if a list is official', async function() {
    //
    const list = pipe(
      setListName('Sample List'),
      setListSlug,
      setListVariants([ generateItem(1, 1), generateItem(2, 5), generateItem(3, 1) ]),
      setListUsers([ setListUser(1, {}), setListUser(2, {}) ]),
      setListOfficial(true),
      setListTenant(tenant)
    )({})

    // Generate an ID
    const id = await incrListsCount(client)(tenant)

    // Save the list
    await saveList(client)(tenant, id, list)

    // Check t
    expect(await isOfficialList(client)(tenant, id)).to.be.eq(true)
  })

  //
  it('should check if a list exists', async function() {
    //
    const list = pipe(
      setListName('Sample List'),
      setListSlug,
      setListVariants([ generateItem(1, 1), generateItem(2, 5), generateItem(3, 1) ]),
      setListUsers([ setListUser(1, {}), setListUser(2, {}) ]),
      setListOfficial(true),
      setListTenant(tenant)
    )({})

    // Generate an ID
    const id = await incrListsCount(client)(tenant)

    // Save the list
    await saveList(client)(tenant, id, list)

    //
    expect(await listExists(client)(tenant, id)).to.be.eq(true)
  })

  it.skip('createList', async function() {
  })

  it.skip('deleteList', async function() {
  })

  it.skip('getList', async function() {
  })
})

