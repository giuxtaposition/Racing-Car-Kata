import { expect } from 'chai'
import 'mocha'
import HtmlTextConverter from '../text-converter/html-text-converter'
import TextReader from '../text-converter/text-reader'
import { convertedText } from './convertedHtml'

// - [x] read correct file name
// - [x] convert from text to html correctly

describe('Html Text Converter', () => {
    it('TextReader gets correct file name', () => {
        const path =
            '/Users/yg/Desktop/Katas/Racing-Car-Kata/text-converter-tests/simpleText.txt'

        const textReader = new TextReader(path)

        expect(textReader.getFilename()).to.equal(path)
    })

    it('TextReader gives correct text', () => {
        const path =
            '/Users/yg/Desktop/Katas/Racing-Car-Kata/text-converter-tests/simpleText.txt'
        const string =
            "I like potatoes.\nThey're very good.\nYou can bake them, fry them, boil them, mash them.\nPotatoes >> every other food."

        const textReader = new TextReader(path)

        expect(textReader.getText()).to.equal(string)
    })

    it('Return text converted correctly', () => {
        const path =
            '/Users/yg/Desktop/Katas/Racing-Car-Kata/text-converter-tests/simpleText.txt'

        const textReader = new TextReader(path)
        const converter = new HtmlTextConverter()

        const convertedHtml = converter.convertToHtml(textReader.getText())

        expect(convertedHtml).to.equal(convertedText)
    })
})
