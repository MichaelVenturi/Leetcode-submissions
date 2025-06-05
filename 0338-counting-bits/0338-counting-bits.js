/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n === 0) return [0];
    const ans = Array.from({length: n+1}, () => -1);
    ans[0] = 0;

    for(let i = 0; i <= n; i++){
        let sum = 0;
        sum += i%2;
        const leftShift = Math.floor(i / 2);
        sum += ans[leftShift];
        ans[i] = sum;   
    }
    return ans;
};