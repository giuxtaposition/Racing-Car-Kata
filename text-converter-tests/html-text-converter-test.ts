import { expect } from 'chai'
import 'mocha'
import HtmlTextConverter from '../text-converter/html-text-converter'
import { convertedText } from './convertedTest'

// - [x] read correct file name
// - [x] convert from html to text correctly

describe('Html Text Converter', () => {
    it('Read correct file name', () => {
        const path =
            '/Users/yg/Desktop/Katas/Racing-Car-Kata/text-converter-tests/simpleHtml.html'

        const converter = new HtmlTextConverter(path)

        expect(converter.getFilename()).to.equal(path)
    })
    it('Return text converted correctly', () => {
        const path =
            '/Users/yg/Desktop/Katas/Racing-Car-Kata/text-converter-tests/simpleHtml.html'

        const converter = new HtmlTextConverter(path)

        const convertedHtml = converter.convertToHtml()

        expect(convertedHtml).to.equal(convertedText)
    })
})
