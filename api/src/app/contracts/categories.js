// Dependencies
import { lens, prop, propOr, assoc, view, set, over, append, identity } from 'ramda'
import { toNumber } from './utils'

//
export const listCategoriesProp = lens(propOr([], 'categories'), assoc('categories'))

//
export const getListCategories = view(listCategoriesProp)

//
// export const setListCategory = set(categoryRefProp)
export const setListCategories = set(listCategoriesProp)
export const addListCategory = (list, category) => over(listCategoriesProp, append(category), list)
