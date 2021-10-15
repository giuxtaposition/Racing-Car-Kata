export default class HtmlTextConverter {
    public convertToHtml(string: string): string {
        return HtmlEscapeUtils.prototype.escape(string)
    }
}

class HtmlEscapeUtils implements StringEscapeUtils {
    public escape(input: string): string {
        let output = input
        output = output.replace(/&/g, '&amp;')
        output = output.replace(/</g, '&lt;')
        output = output.replace(/>/g, '&gt;')
        output = output.replace(/\n/g, '<br />')
        return output
    }
}

interface StringEscapeUtils {
    escape(input: string): string
}
