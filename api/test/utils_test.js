// Helpers
import { expect } from './helpers/chai'

// Import the utils
import { removeInvalidChars, collapseWhitespace, collapseDashes, removeAccent, removeAccents, slugfy } from './../src/app/textSanitizer'

//
describe('Text Helpers', function() {
  //
  it('should remove invalid chars', function() {
    expect(removeInvalidChars('a*b!c@d#e')).to.be.eq('abcde')
    expect(removeInvalidChars('1@2!3#4*5')).to.be.eq('12345')
    expect(removeInvalidChars('a#1@b*2!c')).to.be.eq('a1b2c')
  })

  //
  it('should collapse whitespaces', function() {
    expect(collapseWhitespace('some long phrase')).to.be.eq('some-long-phrase')
    expect(collapseWhitespace('some other long phrase')).to.be.eq('some-other-long-phrase')
    expect(collapseWhitespace('some long    phrase with  crazy   space')).to.be.eq('some-long-phrase-with-crazy-space')
  })

  //
  it('should collapse dashes', function() {
    expect(collapseDashes('some---phrase--with-dashes')).to.be.eq('some-phrase-with-dashes')
    expect(collapseDashes('some-phrase-------with----dashes')).to.be.eq('some-phrase-with-dashes')
  })

  //
  it('should remove accent', function() {
    expect(removeAccent('ä')).to.be.eq('a')
    expect(removeAccent('é')).to.be.eq('e')
    expect(removeAccent('ç')).to.be.eq('c')
  })

  //
  it('should remove accents', function() {
    expect(removeAccents('äéìôú')).to.be.eq('aeiou')
    expect(removeAccents('ç/;:')).to.be.eq('c---')
  })

  //
  it('should slugfy a string', function() {
    expect(slugfy('Hello World Slugfied')).to.be.eq('hello-world-slugfied')
    expect(slugfy('Macarrão ao forno')).to.be.eq('macarrao-ao-forno')
    expect(slugfy('Pudim de Maracujá')).to.be.eq('pudim-de-maracuja')
    expect(slugfy('Kit Natal 2')).to.be.eq('kit-natal-2')
  })
})
