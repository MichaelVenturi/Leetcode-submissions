/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adjList = {};
    const visited = new Array(n).fill(0);
    for(const [a, b] of edges){
        if(adjList[a]) adjList[a].push(b);
        else adjList[a] = [b];
        if(adjList[b]) adjList[b].push(a);
        else adjList[b] = [a];
    }

console.log(visited)
    return dfs(source);
    
    function dfs(cur){
        if(cur === destination) return true;
        
        visited[cur]++;
        
        return adjList[cur].some((vertex) => {
            if(visited[vertex] < 1) return dfs(vertex); 
            return false;
        });
    }
};