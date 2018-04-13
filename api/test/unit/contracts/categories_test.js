// Dependencies
import { expect } from 'chai'
import { head, tail } from 'ramda'

// Import the contracts
import {
  getListCategories,
  setListCategories,
  addListCategory
} from './../../../src/app/contracts/categories'

// Test entry point
describe('Lists Categories', function() {
  //
  describe('Contracts', function() {
    //
    it('add multiple variants to a list', function() {
      let sampleList = setListCategories([ 1 ], {})

      expect(sampleList).to.have.property('categories')
      expect(getListCategories(sampleList)).to.with.lengthOf(1)

      sampleList = addListCategory(sampleList, 2)

      expect(getListCategories(sampleList)).to.with.lengthOf(2)
      expect(head(getListCategories(sampleList))).to.be.eq(1)
      expect(head(tail(getListCategories(sampleList)))).to.be.eq(2)
    })
  })
})
