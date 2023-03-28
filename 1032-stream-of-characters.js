// https://leetcode.cn/problems/stream-of-characters/

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    this.words = words;
    this.charStream = [];
};

/**
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    // push to stream
    this.charStream.push(letter);
    // check if any word in words is in stream
    for (let i = 0; i < this.words.length; i++) {
        let word = this.words[i];
        let wordLen = word.length;
        let streamLen = this.charStream.length;
        if (wordLen > streamLen) {
            continue;
        }
        let streamStart = streamLen - wordLen;
        let streamEnd = streamLen;
        for(let i=streamEnd-1, j=wordLen-1; i>=streamStart; i--, j--) {
            if (this.charStream[i] !== word[j]) {
                break;
            }
            if (j === 0) {
                return true;
            }
        }
    }
    return false;

};

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */