/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const getHours = (bph) => {
        let curH = 0;
        for(const pile of piles) curH += Math.ceil(pile/bph);
        return curH;
    }
    let left = 1;  
    let right = Math.max(...piles);
    let ans = right;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        const hours = getHours(mid);
        if(hours <= h){
            ans = mid;
            right = mid - 1;
        } else left = mid + 1;
    }
    return ans;



};