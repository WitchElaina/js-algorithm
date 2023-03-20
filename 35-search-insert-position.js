// https://leetcode.cn/problems/search-insert-position/

/**
 *
 * @param {number} left
 * @param {number} right
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (left, right, nums, target) {
    if(right-left<=1) {
        if(target===nums[left])
            return left;
        if(target===nums[right])
            return right;
        if(target<nums[left])
            return left ? left-1 : 0;
        if(target>nums[right])
            return right+1;
        else
            return left+1;
    }

    if(target===nums[Math.floor((left+right)/2)])
        return Math.floor((left+right)/2);
    else if(target<nums[Math.floor((left+right)/2)])
        return binarySearch(left, Math.floor((left+right)/2), nums, target);
    else
        return binarySearch(Math.floor((left+right)/2), right, nums, target);
}


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return binarySearch(0, nums.length-1, nums, target);
};
