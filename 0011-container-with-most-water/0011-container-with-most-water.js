/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let maxA = 0;
    while(l < r){
        const curHeight = Math.min(height[l], height[r]);
        const curWidth = r - l;
        const curArea = curHeight * curWidth;
        maxA = Math.max(curArea, maxA);
        if(height[l] < height[r]) l++;
        else r--;
    }
    return maxA;
};