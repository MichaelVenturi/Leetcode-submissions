/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b) => a - b);
    let l = 0; let r = nums.length-1;
    let count = 0;
    while(l < r) {
        const sum = nums[l] + nums[r];
        if(sum === k){
            count++; l++; r--;
        }else if(sum > k) r--;
        else l++;
    }

    return count;
};