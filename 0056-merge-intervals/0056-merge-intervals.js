/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    const res = [];
    let prev = intervals[0];
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] <= prev[1]) prev[1] = Math.max(prev[1],intervals[i][1]);
        else {
            res.push(prev);
            prev = intervals[i];
        }
    }
    res.push(prev);
    return res;
};