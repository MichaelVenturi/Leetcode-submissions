/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if(n === 0) return [0];
    const ans = [];
    ans.push(0);

    for(let i = 0; i <= n; i++){
        let sum = 0;
        sum += i%2;
        const leftShift = Math.floor(i / 2);
        sum += ans[leftShift];
        ans[i] = sum;   
    }
    return ans;
};