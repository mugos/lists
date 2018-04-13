// Dependencies
import { expect } from 'chai'
import { pipe } from 'ramda'

// Import the contracts
import {
  getListBeginDate,
  getListEndDate,
  getListSlug,
  getListCountItems,
  getListTotalItems,
  getListPrice,

  setListName,
  setListBeginDate,
  setListEndDate,
  setListSlug,
  setListCountItems,
  setListTotalItems,
  setListPrice,

  setListVariants,
  setItemVariant,
  addListVariant
} from './../../../src/app/contracts'

// Test entry point
describe('Lists', function() {
  //
  describe('Contracts', function() {
    //
    it('should genarate a slug', function() {
      const list = setListName('Some nice list', {})

      expect(setListSlug(list)).to.have.property('slug')
      expect(getListSlug(list)).to.eq('some-nice-list')
    })

    //
    it('should count items properly', function() {
      //
      let list = setListVariants([ setItemVariant(1, {}), setItemVariant(2, {}) ], {})

      expect(getListCountItems(list)).to.eq(2)
      expect(setListCountItems(list)).to.have.property('countItems').eq(2)

      // Add more
      list = addListVariant(list, setItemVariant(3, {}))
      list = addListVariant(list, setItemVariant(4, {}))

      expect(getListCountItems(list)).to.eq(4)
      expect(setListCountItems(list)).to.have.property('countItems').eq(4)
    })

    //
    it.skip('should get the items total', function() {
      //
      let list = setListVariants([ setItemVariant(1, {}), setItemVariant(2, {}) ], {})

      expect(getListCountItems(list)).to.eq(2)
      expect(setListCountItems(list)).to.have.property('countItems').eq(2)

      // Add more
      list = addListVariant(list, setItemVariant(3, {}))
      list = addListVariant(list, setItemVariant(4, {}))

      expect(getListCountItems(list)).to.eq(4)
      expect(setListCountItems(list)).to.have.property('countItems').eq(4)
    })
  })
})
