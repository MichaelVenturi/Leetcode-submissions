/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxes = new Array(candies.length).fill(0);
    const res = new Array(candies.length).fill(false);
    let i = 1; let j = candies.length - 2;
    while(i < candies.length && j >= 0) {
        maxes[i] = Math.max(maxes[i], maxes[i-1], candies[i-1]);
        maxes[j] = Math.max(maxes[j], maxes[j+1], candies[j+1]);
        i++; j--;
    }
    console.log(maxes);
    for(let k = 0; k < candies.length; k++) {
        res[k] = candies[k] + extraCandies >= maxes[k];
    }
    return res;
};