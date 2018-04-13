//
import { installTenant } from './../../src/app/storage'

//
export const createTestTenant = async () => await installTenant('test')
export const sampleListData = () => ({
  id: 1,
  name: "nome",
  img: "image link",
  slug: "slug",
  countItems: 6,
  totalItems: 10,
  desc: "desc desc",
  currency: "brl",
  price: "R$39,90",
  start: "",
  end: "",
  official: false,
  tenant: { ref: "demo" },
  variants: [
    { id: 1, ref: 1, qty: 7 },
    { id: 2, ref: 2, qty: 2 },
    { id: 3, ref: 3, qty: 1 }
  ],
  users: [
    { id: 1, ref: 1 },
    { id: 2, ref: 2 },
    { id: 3, ref: 3 }
  ],
  categories: [
    { id: 1, ref: 1 },
    { id: 2, ref: 2 },
    { id: 3, ref: 3 }
  ]
})
