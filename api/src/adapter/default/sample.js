const sample = () => (`
query getList {
  getList(tenant: "demo" list: 2 user: { ref: 1, token: "" }) {
    id
    slug
    categories
  }
}

mutation createList {
  createList(tenant: "demo", list: {
    name: "Sample",
    users: [ { ref: 1, token: "" } ],
    categories: [ 1 ]
  }) {
    id
  }
}

mutation addItem {
  saveListVariants(tenant: "demo" list: 2 variants: [
    { ref: 1 , qty: 10 }
  ]) {
    variants {
      ref
    }
  }
}

mutation removeItem {
	removeListVariants(tenant: "demo" list: 2 variants: [1]) {
    variants {
      ref
    }
  }
}

mutation saveList {
  saveListCategories(tenant: "demo", list: 1, categories: [2, 3]) {
    categories
  }
}
`)

export default sample
