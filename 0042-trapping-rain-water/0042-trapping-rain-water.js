/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let count = 0;
    const maxL = new Array(height.length).fill(0);
    const maxR = new Array(height.length).fill(0);
    for(let i = 1; i < height.length; i++){
        maxL[i] = Math.max(height[i-1], maxL[i-1]);
    }
    for(let i = height.length-2; i >= 0; i--){
        maxR[i] = Math.max(height[i+1], maxR[i+1]);
    }

    for(let i = 0; i < height.length; i++){
        let waterLvl = Math.min(maxL[i], maxR[i]);
        if(waterLvl >= height[i]) count += waterLvl - height[i];
    }

    console.log(maxL, maxR);
    return count;
};