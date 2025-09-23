/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let curL = 0;
    for(let i = 0; i < gain.length; i++){
        curL += gain[i];
        max = Math.max(max, curL);
    }
    return max;
};