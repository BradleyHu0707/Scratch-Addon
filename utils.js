class UTILS {
    constructor() {
    }

    getInfo() {
        return {
            "id": "UTILS",
            "name": "UTILS",
            "blocks": [{ "opcode": "commentBlock", "blocktype": "block", "text": "Comment:[txt1]", "arguments": {"txt1": {"type": "string", "defaultValue": "Comment"}}},{"opcode": "inlinecom", "blockType": "reporter", "text": "comment:[txt2] value:[actv1]", "arguments": {"txt2": {"type": "string", "defaultValue": "Inline Comment"}, "actv1": {"type": "string", "defaultValue": "Actual Value"}}},{"opcode": "unused", "blockType": "hat", "text": "Unused Code/Thread Tester", "arguments": null},{"opcode": "nullReport", "blockType": "reporter", "text": "null", "arguments": null},{"opcode": "bruh", "blockType": "bruh", "text": "bruh", "arguments":null}]
        }
    }
    inlinecom({txt2,actv1}){return actv1}
    nullReport(){return ""}
}

Scratch.extensions.register(new UTILS())
