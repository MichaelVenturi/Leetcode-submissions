/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const dp = new Array(n+1);
    return rec(n, dp);
};

function rec(n, dp) {
    if(n <= 1) return n;
    if(n === 2) return 1;
    if(!dp[n]) dp[n] = rec(n-1,dp) + rec(n-2,dp) + rec(n-3,dp);
    return dp[n];
}