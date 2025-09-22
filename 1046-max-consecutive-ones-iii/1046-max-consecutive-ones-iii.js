/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let numZeroes = 0;
    let l = 0; let r = 0;
    let maxL = 0;

    while(r < nums.length){
        if(nums[r] === 0) numZeroes++;

        while(numZeroes > k){
            if(nums[l] === 0) numZeroes--;
            l++;
        }

        maxL = Math.max(maxL, r - l + 1);
        r++;
    }

    return maxL;
};