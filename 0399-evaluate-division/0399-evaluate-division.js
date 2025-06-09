/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const adj = {};
    equations.forEach(([a,b], i) => {
        if(!adj[a]) adj[a] = [];
        if(!adj[b]) adj[b] = [];
        adj[a].push([b, values[i]]);
        adj[b].push([a, 1 / values[i]]);
    });
    
    const dfs = (src, dest, visited) => {
        if(!adj[src] || !adj[dest])return -1.0;
        if(src === dest) return 1.0;
        visited[src] = 1;
        for(const [div, quo] of adj[src]){
            if(!visited[div]){
                const res = dfs(div, dest, visited);
                if(res !== -1.0) return res * quo;
            }
        }
        return -1.0;
    }
    return queries.map(([a,b])=> dfs(a, b, {}));
};