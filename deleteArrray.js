// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length - 1; ) {
        if(nums[i]===nums[i+1]) {
            nums.splice(i,1);
            continue;
        }
        i++;
    }
    return nums.length;
};

let ans = removeDuplicates([])
console.log()