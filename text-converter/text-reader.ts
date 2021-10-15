import { readFileSync } from 'fs'

export default class TextReader {
    private fullFilenameWithPath: string

    constructor(fullFilenameWithPath: string) {
        this.fullFilenameWithPath = fullFilenameWithPath
    }

    public getFilename() {
        return this.fullFilenameWithPath
    }

    public getText() {
        return readFileSync(this.fullFilenameWithPath).toString()
    }
}
