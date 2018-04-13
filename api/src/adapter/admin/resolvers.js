import list from './../../app/list'
// import {} from 'ramda'

// (root, { tenant }) => Adapter
const resolvers = models => ({
  Query: {
    allLists: (root, { tenant }) => list.allLists(tenant),
    allUsers: (root, { tenant }) => list.allUsers(tenant),
    allVariants: (root, { tenant }) => list.allVariants(tenant),
    allCategories: (root, { tenant }) => list.allCategories(tenant),
    allTenants: (root, args) => list.allTenants(),
    getListById: (root, { tenant }) => "",
    getListsByCategory: (root, { tenant }) => "",
    // getUserLists: (root, { tenant, user }) => list.getUserLists(tenant, user),
    getUsersListsByCategory: (root, { tenant }) => ""
  },
  Mutation: {
    createList: (root, payload) => list.createList(payload.tenant, payload.list),
    updateList: (root, { tenant }) => "",
    deleteList: (root, { tenant }) => "",
    createUser: (root, { tenant }) => "",
    updateUser: (root, { tenant }) => "",
    deleteUser: (root, { tenant }) => "",
    createVariant: (root, { tenant }) => "",
    updateVariant: (root, { tenant }) => "",
    deleteVariant: (root, { tenant }) => "",
    createCategory: (root, { tenant }) => "",
    updateCategory: (root, { tenant }) => "",
    deleteCategory: (root, { tenant }) => "",
    createTenant: (root, { tenant }) => "",
    deleteTenant: (root, { tenant }) => "",
    updateVariantPrice: (root, { tenant, variant }) => list.updateProductPrice(tenant),
    updateVariantQty: (root, { tenant }) => ""
  },
})

export default resolvers
