// TODO: Maybe a create tenant scalar
// http://dev.apollodata.com/tools/graphql-tools/scalars.html
export default `
# Types
type List {
  id: Int!
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
  categories: [Int!]
}
type Variant {
  ref: Int
  price: String
  qty: Int
}
type User {
  ref: Int
}
type Tenant {
  ref: String
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
  users: [UserInput!]!
  variants: [VariantInput]
  categories: [Int!]
}
input VariantInput {
  ref: Int
  qty: Int
}
input UserInput {
  ref: Int!
  token: String
}

# Queries
type Query {
  getOfficialLists(tenant: String!, categories: [Int!]): [List]
  getUserLists(tenant: String! user: UserInput! categories: [Int!]): [List]
  getList(tenant: String! user: UserInput list: Int!): List
}
# Mutations
type Mutation {
  createList(tenant: String! list: ListInput): List
  saveList(tenant: String! id: Int! list: ListInput): List
  deleteList(tenant: String! id: Int!): List

  saveListVariants(tenant: String! list: Int! variants: [VariantInput!]): List
  removeListVariants(tenant: String! list: Int! variants: [Int!]): List

  saveListCategories(tenant: String! list: Int! categories: [Int!]): List
  removeListCategories(tenant: String! list: Int! categories: [Int!]): List

  addListUsers(tenant: String! list: Int! users: [Int!]): List
  removeListUsers(tenant: String! list: Int! users: [Int!]): List
}
# Schema
schema {
  query: Query
  mutation: Mutation
}
`
