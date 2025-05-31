/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n === 1) return 1;
    const adj = createList(trust);
    for(const [key, val] of Object.entries(adj)){
        if(val[0] === (n-1) && val[1] === 0) return +key;
    }
    return -1;
};

const createList = (trust) => {
    const adjList = {};
    for(const [a, b] of trust){
        if(!adjList[a]) adjList[a] = [0, 0];
        if(!adjList[b]) adjList[b] = [0, 0];
        adjList[a][1]++;
        adjList[b][0]++;
    }
    return adjList;
}

/*
    {
       person: [how many trust them, how many they trust]
    }
*/