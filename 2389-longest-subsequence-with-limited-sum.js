// https://leetcode.cn/problems/longest-subsequence-with-limited-sum/

/**
 * @param {number[]} nums
 * @param {number} query
 * @return {number}
 */
var getLongestSubsequence = function (nums, query) {
    // nums should be sorted before call this function
    adder = 0;
    for (var i = 0; i < nums.length; i++) {
        if(adder+nums[i]>query)
            return i;
        adder += nums[i];
    }
    return nums.length;
}



/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    var ans = [];
    nums = nums.sort(function (a, b) {
        return a-b;
    });
    for (var i = 0; i < queries.length; i++) {
        ans.push(getLongestSubsequence(nums, queries[i]));
    }
    return ans;
};

// test
nums = [736411,184882,914641,37925,214915];
queries = [331244,273144,118983,118252,305688,718089,665450];

console.log(answerQueries(nums, queries));