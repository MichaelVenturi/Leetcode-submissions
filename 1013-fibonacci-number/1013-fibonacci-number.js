/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = new Array(n+1).fill(-1);
    return fibRec(n, dp);
};

function fibRec (n, dp) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(dp[n] > -1) return dp[n];
    return fib(n-1) + fib(n - 2);
}