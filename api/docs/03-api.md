const redis = require('lists/redis')
const mock = require('lists/mock')

const storage = mock

const lists = require('lists/api')(storage)

lists.*

// Queries
AlltenantRefs()

AllUsers(tenantRef)
AllLists(tenantRef)
AllVariants(tenantRef)
AllCategories(tenantRef)

FindListByRef(tenantRef)(listRef)
FindUserLists(tenantRef)(userRef)
FindCategoryLists(tenantRef)(categoryRef)

// Mut
AddProductToList(tenantRef)(listRef)(productRef)
AddCategoryToList(tenantRef)(listRef)(categoryRef)
AssociateUserToList(tenantRef)(listRef)(userRef)

// Doesn't has user ref
CreateOfficialList(tenantRef)(data)
// Has User ref
CreateUserList(tenantRef)(data)

// User data
{
  ref: Integer,
  name: String,
  img: Text,
  slug: String,
  totalItems: Integer,
  countItems: Integer,
  userRef: Integer,
  tenantRef: Integer,
  official: Bollean,
  products: Array,
  categories: Array
}

//  ========= Basic CRUD
kinds = {
  'lists',
  'tenants',
  'products',
  'users',
  'categories'
}

// Compose funcion
KindCrud = CRUD(kind)(tenant)

KindAll = KindCrud.All
KindCreater = KindCrud.Creater
KindFinder = KindCrud.Finder
KindUpdater = KindCrud.Updater
KindDeleter = KindCrud.Deleter

KindAll()
KindCreate(data)
KindFinder(key, value)
KindUpdater(ref, data)
KindDeleter(ref)
