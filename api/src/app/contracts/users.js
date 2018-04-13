// Dependencies
import { lens, prop, propOr, assoc, view, set, over, append } from 'ramda'
import { toNumber } from './utils'

//
export const listUsersProp = lens(propOr([], 'users'), assoc('users'))
export const userRefProp = lens(toNumber(prop('ref')), assoc('ref'))

//
export const getListUsers = view(listUsersProp)
export const getUser = view(userRefProp)

//
export const setListUsers = set(listUsersProp)
export const setListUser = set(userRefProp)
export const addListUser = (list, user) => over(listUsersProp, append(user), list)
