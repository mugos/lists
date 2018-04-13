import * as storage from './storage'
import { emptyList, getUser } from './contracts'

// Default errors
const ErrorNotFound = (type) => { throw new Error(`Resource ${type} not found.`) }
const ErrorUnauthorized = () => { throw new Error(`Not authorized to perform this action.`) }

// This is the main app
//
// Here i will only invoke storage methods
// This module is responsable for validating input,
// and parsing response
//
// It's ok that the storage functions are eql to the main list functions
const list = stg => ({
  //
  getList: async (tenant, list, user) => {
    //
    const userRef = getUser(user)

    // Check if the list exists and its the user list
    if (!await stg.isListOwner(tenant, list, userRef) && !await stg.isOfficialList(tenant, list)) ErrorUnauthorized()

    // Get the list and return it
    const entity = await stg.getList(tenant, list)

    // Check if list exists
    if (entity === false) ErrorNotFound('List')

    // Return it
    return entity
  },
  // Create the list
  createList: async (tenant, list) => {
    // Create the list and return the id
    const id = await stg.createList(tenant, list)

    // Get details of the list
    return await stg.getList(tenant, id)
  },
  // Add Variants to the list
  saveListVariants: async (tenant, list, variants) => {
    // Check if the list exists
    if (!stg.listExists(tenant, list)) ErrorNotFound('List')

    // It should validate the variants within an Ecommerce
    // ...

    // Add it
    Promise.all(variants.map(v => stg.saveListItem(tenant, list, v)))

    // Return the list itself
    return await stg.getList(tenant, list)
  },
  // Remove Variants to the list
  removeListVariants: async (tenant, list, variants) => {
    // Check if the list exists
    if (!stg.listExists(tenant, list)) ErrorNotFound('List')

    // It should validate the variants within an Ecommerce
    // ...

    // Add it
    Promise.all(variants.map(v => stg.deleteListItem(tenant, list, v)))

    // Return the list itself
    return await stg.getList(tenant, list)
  },
  // Add Categories to the list
  saveListCategories: async (tenant, list, categories) => {
    // Check if the list exists
    if (!stg.listExists(tenant, list)) ErrorNotFound('List')

    // It should validate the cetegories within an Ecommerce
    // ...

    // Add it
    Promise.all(categories.map(c => stg.saveListCategory(tenant, list, c)))

    // Return the list itself
    return await stg.getList(tenant, list)
  }
})

export default list(storage)
