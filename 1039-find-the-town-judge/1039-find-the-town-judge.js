/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n === 1) return 1;
    const list = Array.from({length: n+1}, () => [0, 0]);
    for(const [a, b] of trust){
        list[a][0]++;
        list[b][1]++;
    }
    for(let i = 1; i <= n; i++){
        if(list[i][1] === n - 1 && list[i][0] === 0) return i
    }
    return -1;
};
