/** 双指针判断回文串
 * @param {string} str
 * @return {boolean}
 */
var isPalindrome = function (str) {
    var len = str.length;
    var left = 0;
    var right = len - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var checkPalindromeFormation = function(a, b) {
    var singleCheck = function (a, b) {
        var len = a.length;
        var left = 0;
        var right = len - 1;
        while (left < right) {
            if(a[left] !== b[right]) {
                return isPalindrome(a.substring(left, right+1)) || isPalindrome(b.substring(left, right+1));
            }
            left++;
            right--;
        }
        return true;
    };
    return singleCheck(a, b) || singleCheck(b, a);
};

