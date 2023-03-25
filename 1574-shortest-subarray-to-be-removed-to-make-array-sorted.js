// https://leetcode.cn/problems/shortest-subarray-to-be-removed-to-make-array-sorted/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    // find the longest prefix and suffix
    // prefix [0, i]
    // suffix [j, arr.length-1]
    let i = 0;
    let j = arr.length - 1;
    while(arr[i+1] >= arr[i]) {
        i++;
    }
    while(arr[j-1] <= arr[j]) {
        j--;
    }

    // judge if the whole arr can be return
    if(i >= j) {
        return 0;
    }

    // choose the shortest between prefix and suffix
    let prefix_cut_length = j;
    let suffix_cut_length = arr.length - i - 1;

    let ans = Math.min(prefix_cut_length, suffix_cut_length);

    while(i >= 0) {
        j = prefix_cut_length;
        while(j < arr.length) {
            if(arr[i] <= arr[j]) {
                ans = Math.min(j - i - 1, ans);
            }
            j++;
        }
        i--;
    }

    return ans;
}