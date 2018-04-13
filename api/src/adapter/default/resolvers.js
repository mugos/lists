//
import listConcept from './../../app/list'

//
const resolvers = models => ({
  Query: {
    getList: async (_, { tenant, list, user }) => await listConcept.getList(tenant, list, user),
    // getUserLists: (root, { tenant, user }) => list.getUserLists(tenant, user)
  },
  Mutation: {
    createList: async (_, { tenant, list }) => await listConcept.createList(tenant, list),
    // saveList: (root, { tenant }) => "",
    // deleteList: (root, { tenant }) => "",
    saveListCategories: async (_, { tenant, list, categories }) => await listConcept.saveListCategories(tenant, list, categories),
    saveListVariants: async (_, { tenant, list, variants }) => await listConcept.saveListVariants(tenant, list, variants),
    removeListVariants: async (_, { tenant, list, variants }) => await listConcept.removeListVariants(tenant, list, variants)
  },
})

//
export default resolvers
