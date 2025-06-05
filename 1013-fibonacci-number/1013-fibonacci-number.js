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
    if(!dp[n]) dp[n] = fibRec(n-1, dp) + fibRec(n-2, dp);
    return dp[n]
    
}