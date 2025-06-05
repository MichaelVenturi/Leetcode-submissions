/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = new Array(n+1);
    return fibRec(n, dp);
};

function fibRec (n, dp) {
    if(n <= 1) return n;
    if(dp[n]) return dp[n];
    return fib(n-1) + fib(n - 2);
}