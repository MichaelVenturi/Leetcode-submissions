/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i = 1; i < n; i++)
        if(!hasZero(i) && !hasZero(n - i)) return [i, n- i];
    
    return [0, 0]
};
const hasZero = (n) => {
    while(n >= 10){
        if(n % 10 === 0) return true;
        n = Math.floor(n / 10);
    }
    return false;
}