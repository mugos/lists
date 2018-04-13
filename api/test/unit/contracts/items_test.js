// Dependencies
import { expect } from 'chai'
import { head, tail } from 'ramda'

// Import the contracts
import {
  getItemVariant,
  getItemQuantity,
  getItemInfos,
  getListVariants,
  setItemVariant,
  setItemQuantity,
  setListVariants,
  addListVariant,
  generateItem,
  itemPublicProps
} from './../../../src/app/contracts/items'

// Test entry point
describe('Lists Variants', function() {
  //
  describe('Contracts', function() {
    //
    it('should have a item variant', function() {
      expect(setItemVariant('1', {})).to.have.property('ref')
      expect(getItemVariant(setItemVariant('1', {}))).to.be.eq(1)
      expect(getItemVariant(setItemVariant(1, {}))).to.be.eq(1)
      expect(getItemVariant({})).to.be.eq(undefined)
    })

    //
    it('should have a item quantity', function() {
      expect(setItemQuantity(1, {})).to.have.property('qty')
      expect(getItemQuantity(setItemQuantity('3', {}))).to.be.eq(3)
      expect(getItemQuantity(setItemQuantity(5, {}))).to.be.eq(5)
      expect(getItemQuantity(setItemQuantity(1, {}))).to.be.eq(1)
      expect(getItemQuantity({})).to.be.eq(1)
    })

    //
    it('should generate item', function() {
      // Generate the item
      const item = generateItem(5, 3)

      expect(getItemVariant(item)).to.be.eq(5)
      expect(getItemQuantity(item)).to.be.eq(3)
      expect(setItemVariant(2, item)).to.have.property('ref').eq(2)
      expect(setItemQuantity(10, item)).to.have.property('qty').eq(10)
    })

    //
    it('should get full item information', function() {
      // Generate the item
      const item = generateItem(5, 3)

      expect(item).to.have.property('ref')
      expect(getItemInfos({})).to.have.property('qty')
      expect(getItemInfos({})).to.not.have.property('ref')
      expect(getItemInfos(item)).to.have.property('qty')
      expect(getItemInfos(item)).to.not.have.property('ref')
      expect(getItemInfos(item)).to.have.property('qty').eq(3)
    })

    //
    it('add multiple variants to a list', function() {
      let sampleList = setListVariants([ generateItem(1, 1) ], {})

      expect(sampleList).to.have.property('variants')
      expect(getListVariants(sampleList)).to.with.lengthOf(1)

      sampleList = addListVariant(sampleList, generateItem(5, 3))

      expect(getListVariants(sampleList)).to.with.lengthOf(2)
      expect(head(getListVariants(sampleList))).to.have.property('ref').eq(1)
      expect(head(tail(getListVariants(sampleList)))).to.have.property('ref').eq(5)
    })

    //
    it('should generate the public fields of an item', function() {
      // Generate the item
      const item = generateItem(5, 3)

      expect(itemPublicProps(item)).to.be.an('object')
    })
  })
})
