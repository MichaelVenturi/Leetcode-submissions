/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;

    const res = new Array(n).fill(1);
    let curLeft = 1;
    let curRight = 1;
    for(let i = 0; i < n; i++){
        res[i] *= curLeft;
        let j = n - i - 1;
        res[j] *= curRight;
        curLeft *= nums[i];
        curRight *= nums[j];
    }
    // product except self will be the product of everything to left * the right
    return res;
};