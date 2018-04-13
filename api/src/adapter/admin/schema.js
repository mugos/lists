// TODO: Maybe a create tenant scalar
// http://dev.apollodata.com/tools/graphql-tools/scalars.html
export default `
# Types
type List {
  id: ID!
  name: String
  desc: String
  img: String
  slug: String
  countItems: Int
  totalItems: Int
  currency: String
  price: String
  start: String
  end: String
  official: Boolean
  users: [User]
  variants: [Variant]
  tenant: Tenant!
  categories: [Category]
}
type Variant {
  id: Int
  ref: Int
  currency: String
  price: String
  qty: Int
}
type User {
  ref: Int
}
type Tenant {
  ref: String
}
type Category {
  id: Int
  ref: Int
}

# Inputs
input ListInput {
  name: String!
  desc: String
  img: String
  slug: String
  start: String
  end: String
  official: Boolean
  users: [UserInput]!
  variants: [VariantInput]
  categories: [CategoryInput]
}
input VariantInput {
  id: Int
  ref: Int
  currency: String
  price: String
  qty: Int
}
input UserInput {
  ref: Int
}
input CategoryInput {
  id: Int
  ref: Int
}

# Queries
type Query {
  allLists(tenant: String!): [List]
  allUsers(tenant: String!): [User]
  allVariants(tenant: String!): [Variant]
  allCategories(tenant: String!): [Category]
  allTenants: [Tenant]
  getListById(tenant: String! id: ID!): List
  getListsByCategory(tenant: String! category: CategoryInput): [List]
  getUserLists(tenant: String! user: UserInput): [List]
  getUsersListsByCategory(tenant: String! user: UserInput categories: [CategoryInput]): [List]
}
# Mutations
type Mutation {
  createList(tenant: String! list: ListInput): List
  saveList(tenant: String! id: ID! list: ListInput): List
  deleteList(tenant: String! id: ID!): List

  createUser(tenant: String! user: UserInput): User
  updateUser(tenant: String! id: ID! user: UserInput): User
  deleteUser(tenant: String! id: ID!): User

  createVariant(tenant: String! variant: VariantInput): Variant
  updateVariant(tenant: String! id: ID! variant: VariantInput): Variant
  deleteVariant(tenant: String! id: ID!): Variant

  createCategory(tenant: String! category: CategoryInput): Category
  updateCategory(tenant: String! id: ID! category: CategoryInput): Category
  deleteCategory(tenant: String! id: ID!): Category

  createTenant(tenant: String!): Tenant
  deleteTenant(tenant: String!): Tenant

  updateVariantPrice(tenant: String! id: ID! price: String!): Variant
  updateVariantQty(tenant: String! id: ID! qty: Int!): Variant
}
# Schema
schema {
  query: Query
  mutation: Mutation
}
`

