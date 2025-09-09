/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = new Array(nums.length).fill(1);
    let curL = 1; let curR = 1; let l = 0;  let r = nums.length - 1;
    while(l < nums.length && r >= 0){
        res[l] *= curL;
        curL *= nums[l++];
        res[r] *= curR;
        curR *= nums[r--];
    }
    return res;
};