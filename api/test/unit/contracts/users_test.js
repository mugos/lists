// Dependencies
import { expect } from 'chai'
import { head, tail } from 'ramda'

// Import the contracts
import {
  getListUsers,
  getUser,
  setListUser,
  setListUsers,
  addListUser
} from './../../../src/app/contracts/users'

// Test entry point
describe('Lists Users', function() {
  //
  describe('Contracts', function() {
    //
    it('should have a reference', function() {
      expect(setListUser('1', {})).to.have.property('ref')
      expect(getUser(setListUser('1', {}))).to.be.eq(1)
      expect(getUser(setListUser('1', {}))).to.be.eq(1)
      expect(getUser(setListUser(1, {}))).to.be.eq(1)
      expect(getUser({})).to.be.eq(undefined)
    })

    //
    it('add multiple variants to a list', function() {
      let sampleList = setListUsers([ setListUser(1, {}) ], {})

      expect(sampleList).to.have.property('users')
      expect(getListUsers(sampleList)).to.with.lengthOf(1)

      sampleList = addListUser(sampleList, setListUser(2, {}))

      expect(getListUsers(sampleList)).to.with.lengthOf(2)
      expect(head(getListUsers(sampleList))).to.have.property('ref').eq(1)
      expect(head(tail(getListUsers(sampleList)))).to.have.property('ref').eq(2)
    })
  })
})
