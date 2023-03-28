/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function(str1, str2) {
    let cache = {}
    function dfs(i, j) {
        if (cache[i] === undefined) {
            cache[i] = {};
        }
        if (cache[i][j] !== undefined) {
            return cache[i][j];
        }

        if (i === -1) {
            return j + 1;
        }
        if (j === -1) {
            return i + 1;
        }
        if (str1[i] === str2[j]) {
            cache[i][j] = dfs(i-1, j-1) + 1;
        }
        else {
            cache[i][j] = Math.min(dfs(i-1, j), dfs(i, j-1)) + 1;
        }
        return cache[i][j];
    }

    /**
     *
     * @param {string} str1
     * @param {string} str2
     * @return {*}
     */
    function getAns(str1, str2) {
        if (str1 === '') {
            return str2;
        }
        if (str2 === '') {
            return str1;
        }
        if (str1[str1.length - 1] === str2[str2.length - 1]) {
            return getAns(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1)) + str1[str1.length - 1];
        }
        else {
            if (dfs(str1.length - 2, str2.length - 1) + 1 === dfs(str1.length - 1, str2.length - 1)) {
                return getAns(str1.substring(0, str1.length - 1), str2) + str1[str1.length - 1];
            }
            else {
                return getAns(str1, str2.substring(0, str2.length - 1)) + str2[str2.length - 1];
            }
        }
    }

    return getAns(str1, str2);
};