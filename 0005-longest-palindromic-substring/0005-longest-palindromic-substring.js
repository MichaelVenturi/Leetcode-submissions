/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const size = s.length;
    if(size === 0) return '';

    let start = 0, maxLength = 1;
    const dp = Array.from({length: size}, () => new Array(size).fill(false));
    console.log(dp);
    for(let i = 0; i < size; i++){
        dp[i][i] = true;
    }

    for(let i = 2; i <= size; i++){
        for(let left = 0; left <= size - i; left++){
            const right = i + left - 1;
            if(s[left] === s[right]){
               if(i === 2) dp[left][right] = true;
               else dp[left][right] = dp[left + 1][right - 1];

               if(dp[left][right] && i > maxLength){
                start = left;
                maxLength = i;
               }
            }
        }
    }
    return s.substring(start, start + maxLength);
};