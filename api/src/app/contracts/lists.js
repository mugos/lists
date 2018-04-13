// Dependencies
import { lens, lensPath, prop, propOr, assoc, view, set, ifElse, has, over, identity } from 'ramda'
import { extractProps } from './utils'
import { slugfy } from './../textSanitizer'
import { getListVariants } from './items'

// Generators
const generateListSlug = ds => slugfy(getListName(ds))
const generateCountItems = ds => getListVariants(ds).length

// Properties
export const listRefProp = lens(prop('id'), assoc('id'))
export const listNameProp = lens(propOr('', 'name'), assoc('name'))
export const listDescProp = lens(prop('desc'), assoc('desc'))
export const listCurrencyProp = lens(propOr('brl', 'currency'), assoc('currency'))
export const listTenantProp = lensPath(['tenant', 'ref'])
export const listBeginDateProp = lens(prop('start'), assoc('start'))
export const listEndDateProp = lens(prop('end'), assoc('end'))
export const listOfficialProp = lens(propOr(false, 'official'), assoc('official'))
export const listSlugProp = lens(ifElse(has('slug'), prop('slug'), generateListSlug), assoc('slug'))
export const listImgProp = lens(prop('img'), assoc('img'))
export const listCountItemsProp = lens(generateCountItems, assoc('countItems'))
export const listTotalItemsProp = lens(prop('totalItems'), assoc('totalItems'))
export const listPriceProp = lens(prop('price'), assoc('price'))

// Getters
export const getListRef = view(listRefProp)
export const getListName = view(listNameProp)
export const getListDesc = view(listDescProp)
export const getListCurrency = view(listCurrencyProp)
export const getListTenant = view(listTenantProp)
export const getListBeginDate = view(listBeginDateProp)
export const getListEndDate = view(listEndDateProp)
export const getListOfficial = view(listOfficialProp)
export const getListSlug = view(listSlugProp)
export const getListImg = view(listImgProp)
export const getListCountItems = view(listCountItemsProp)
export const getListTotalItems = view(listTotalItemsProp)
export const getListPrice = view(listPriceProp)

// Setters
export const setListRef = set(listRefProp)
export const setListName = set(listNameProp)
export const setListDesc = set(listDescProp)
export const setListCurrency = set(listCurrencyProp)
export const setListTenant = set(listTenantProp)
export const setListBeginDate = set(listBeginDateProp)
export const setListEndDate = set(listEndDateProp)
export const setListOfficial = set(listOfficialProp)
export const setListSlug = over(listSlugProp, identity)
export const setListImg = set(listImgProp)
export const setListCountItems = over(listCountItemsProp, identity)
export const setListTotalItems = over(listTotalItemsProp, identity)
export const setListPrice = set(listPriceProp)

// Predefined
export const emptyList = (tenant) => setListRef(-1, setListTenant(tenant, {}))

// Infos
export const getListInfos = extractProps(listNameProp, listCountItemsProp, listDescProp, listCurrencyProp, listImgProp, listPriceProp, listSlugProp)
