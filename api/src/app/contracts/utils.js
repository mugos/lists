// Dependencies
import { mergeAll, set, view, curry, ifElse, isNil, identity } from 'ramda'

//
export const extractProps = (...props) => data => mergeAll(props.map((prop) => set(prop, view(prop, data), {})))
export const publicProp = (prop, setter) => data => dest => setter(view(prop, data))(dest)
export const toNumber = curry((fn, value) => ifElse(isNil, identity, Number)(fn(value)))
