// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let end = st = 0;
    let set = new Set();
    while (end < s.length) {    
        if (!set.has(s[end])) {
            set.add(s[end]);
            end++;
            max = Math.max(max, set.size);
        } else {
            set.delete(s[st]);
            st++;
            max = Math.max(max, set.size);
        }
    }   
    return max;
};
