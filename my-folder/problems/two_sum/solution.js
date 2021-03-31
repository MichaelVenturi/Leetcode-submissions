/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices= [];
    let flag = false;
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                indices.push(i);
                indices.push(j);
                flag = true;
            }
            if(flag === true){
                break;
            }
        }
    }
    return indices;
};