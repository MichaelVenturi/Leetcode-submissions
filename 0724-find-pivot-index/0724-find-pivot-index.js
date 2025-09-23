/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((a, c) => a + c, 0);
    let left = 0;

    for(let i = 0; i < nums.length; i++){
        if(sum - nums[i] === left) return i;
        else {
            left += nums[i];
            sum -= nums[i];
        }
    }
    return -1;
};