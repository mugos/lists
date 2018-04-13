// Dependencies
import { lens, prop, propOr, assoc, view, set, defaultTo, pipe, over, append, curry } from 'ramda'
import { extractProps, publicProp, toNumber } from './utils'

// Properties
export const itemVariantProp = lens(toNumber(prop('ref')), curry((v, o) => assoc('ref', Number(v), o)))
export const itemQuantityProp = lens((o) => defaultTo(1, toNumber(prop('qty'))(o)), curry((v, o) => assoc('qty', Number(v), o)))
export const listVariantsProp = lens(propOr([], 'variants'), assoc('variants'))

// Getters
export const getItemVariant = view(itemVariantProp)
export const getItemQuantity = view(itemQuantityProp)
export const getItemInfos = extractProps(itemQuantityProp)
export const getListVariants = view(listVariantsProp)

// Setters
export const setItemVariant = set(itemVariantProp)
export const setItemQuantity = set(itemQuantityProp)
export const setListVariants = set(listVariantsProp)
export const addListVariant = (list, variant) => over(listVariantsProp, append(variant), list)
export const generateItem = (ref, qty, def = {}) => pipe(setItemVariant(ref), setItemQuantity(qty))(def)

//
export const itemPublicProps = ds => pipe(publicProp(itemVariantProp, setItemVariant)(ds), publicProp(itemQuantityProp, setItemQuantity)(ds))({})
