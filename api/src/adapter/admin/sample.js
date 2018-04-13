const sample = () => (`
  query allLists {
    allLists(tenant: "demo")
  }
  query allUsers {
    allUsers(tenant: "demo")
  }
  query allVariants {
    allVariants(tenant: "demo")
  }
  query allCategories {
    allCategories(tenant: "demo")
  }
  query allTenants {
    allTenants
  }
  query getListById {
    getListById(tenant: "demo" id: 1)
  }
  query getListsByCategory {
    getListsByCategory(tenant: "demo" category: { id: 1 ref: 1 })
  }
  query getUserLists {
    getUserLists(tenant: "demo" user: { id: 1 ref: 1 })
  }
  query getUsersListsByCategory {
    getUsersListsByCategory(tenant: "demo" user: { id: 1 ref: 1 } categories: [{ id: 1 ref: 1 }])
  }
  mutation createList {
    createList(tenant:"demo" list: {
      name: "asdasd"
      desc: "asdasd"
      slug: "asdasd"
      users: [ {id: 1 ref: 1} ]
    }) {
      id
      name
      users {
        id
      }
    }
  }
  mutation updateList {
    updateList(tenant: "demo" id: 1 list: { id: 1 ref: 1 })
  }
  mutation deleteList {
    deleteList(tenant: "demo" id: 1)
  }
  mutation createUser {
    createUser(tenant: "demo" user: { id: 1 ref: 1 })
  }
  mutation updateUser {
    updateUser(tenant: "demo" id: 1 user: { id: 1 ref: 1 })
  }
  mutation deleteUser {
    deleteUser(tenant: "demo" id: 1)
  }
  mutation createVariant {
    createVariant(tenant: "demo" variant: { id: 1 ref: 1 })
  }
  mutation updateVariant {
    updateVariant(tenant: "demo" id: 1 variant: { id: 1 ref: 1 })
  }
  mutation deleteVariant {
    deleteVariant(tenant: "demo" id: 1)
  }
  mutation createCategory {
    createCategory(tenant: "demo" category: { id: 1 ref: 1 })
  }
  mutation updateCategory {
    updateCategory(tenant: "demo" id: 1 category: { id: 1 ref: 1 })
  }
  mutation deleteCategory {
    deleteCategory(tenant: "demo" id: 1)
  }
  mutation createTenant {
    createTenant(tenant: "demo" tenant: { id: 1 ref: 1 })
  }
  mutation updateTenant {
    updateTenant(tenant: "demo" id: 1 tenant: { id: 1 ref: 1 })
  }
  mutation deleteTenant {
    deleteTenant(tenant: "demo" id: 1)
  }
  mutation updateVariantPrice {
    updateVariantPrice(tenant: "demo" id: 1 price: "9,99")
  }
  mutation updateVariantQty {
    updateVariantQty(tenant: "demo" id: 1 qty: 4)
  }

// Experimental
mutation createTenant {
  createTenant(tenant: ) {
    id
  }
}

mutation createList {
  createList(tenant: "demo", list: {
    name: "Sample",
    desc: "Hello List",
    users: [ 1 ],
    categories: [ 1 ]
  }) {
    id
  }
}

mutation saveList {
  addListCategory(tenant: "demo", list: 1, categories: [2, 3]) {
    categories
  }
  
  removeListCategory(tenant: "demo", list: 1, categories: [3]) {
    categories
  }
}
`)

export default sample
