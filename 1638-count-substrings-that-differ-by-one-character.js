/** https://leetcode.cn/problems/count-substrings-that-differ-by-one-character/
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    function calDiff(s, t) {
        let diffNum = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== t[i]) {
                if (diffNum > 0) {
                    return false;
                }
                diffNum++;
            }
        }
        return diffNum !== 0;
    }

    let ans = 0;
    for (let len = 0; len <= s.length; len++) {
        for (let i = 0; i + len <= s.length; i++) {
            for (let j = 0; j + len <= t.length; j++) {
                if (calDiff(s.substr(i, len), t.substr(j, len)))
                    ans++;
            }
        }
    }

    return ans;
};