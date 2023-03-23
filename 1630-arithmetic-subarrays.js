// https://leetcode.cn/problems/arithmetic-subarrays/

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let ans = new Array(l.length);
    let cur = [];
    for(let i=0;i<l.length;i++) {
        cur = nums.slice(l[i], r[i]+1).sort((a, b) => {
            return a-b;
        });
        for(j=0;j+1<cur.length;j++) {
            if(cur[1]-cur[0]!==cur[j+1]-cur[j]) {
                ans[i] = false;
                break;
            }
        }
        if(ans[i]===undefined) {
            ans[i] = true;
        }
    }
    return ans;
};