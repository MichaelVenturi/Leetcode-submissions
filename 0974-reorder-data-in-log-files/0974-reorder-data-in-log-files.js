/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const dLogs = [];
    const lLogs = [];
    const ans = [];
    for(const log of logs){
        let i = 0;
        while(log[i] !== ' ') i++;
        if(/[a-zA-Z]/.test(log[i+1])) lLogs.push([log.substring(0, i), log.substring(i + 1)]);
        else dLogs.push(log);
    }
    lLogs.sort((a,b) => {
        if(a[1] === b[1]){
            if(a[0] < b[0]) return -1;
            else return 1;
        }else{
            if(a[1] < b[1]) return -1;
            else return 1;
        }
    });
    for(const log of lLogs) ans.push(log[0] + " " + log[1]);
    for(const log of dLogs) ans.push(log);
    return ans;
};