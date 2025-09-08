/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const res = new Array(candies.length).fill(false);
    let max = 0;
    for(const kid of candies){
        max = Math.max(max, kid);
    }
    for(let k = 0; k < candies.length; k++) {
        res[k] = candies[k] + extraCandies >= max;
    }
    return res;
};