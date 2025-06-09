/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length + 1;
    const adj = Array.from({length: n}, () => []);
    const visited = new Array(n);
    for(const [a, b] of edges){
        visited.fill(false);
        adj[a].push(b);
        adj[b].push(a);
        if(dfs(adj, visited, a)) return [a, b];
    }
    console.log(adj);

    function dfs (adj, visited, cur, parent = -1) {
        if(visited[cur])return true;
        visited[cur] = true;
        for(const neighbor of adj[cur]){
        if(neighbor !== parent && dfs(adj, visited, neighbor, cur))return true;
        }
        return false;
    }
    return [];
};