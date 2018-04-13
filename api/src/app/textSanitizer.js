// Dependencies
import { replace, trim, toLower, join, map, compose } from 'ramda'

//
export const removeInvalidChars = replace(/[^a-z0-9 -]/g, '')
export const collapseWhitespace = replace(/\s+/g, '-')
export const collapseDashes = replace(/-+/g, '-')
export const removeAccent = (c) => {
  // Default set of accents
  const from = "àáäâãèéëêìíïîòóöôõùúüûñç·/_,:;";
  const to   = "aaaaaeeeeiiiiooooouuuunc------";

  //
  const at = from.indexOf(c)

  //
  if (at === -1) return c

  //
  return replace(new RegExp((c), 'g'), to[at], c)
}
export const removeAccents = compose(join(''), map(removeAccent))

//
export const slugfy = compose(removeInvalidChars, removeAccents, collapseDashes, collapseWhitespace, toLower, trim)
