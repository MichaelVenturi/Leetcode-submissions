/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if(n <= 2) return Array.from({length: n}, (_, i) => i)
    const adj = Array.from({length: n}, () => []);
    for(const [a, b] of edges){
        adj[a].push(b);
        adj[b].push(a);
    }
    let leaves = [];
    for(let i = 0; i < n; i++) if(adj[i].length === 1) leaves.push(i);
    while(n > 2) {
        n -= leaves.length;
        const newLeaves = [];
        for(const leaf of leaves){
            const neighbor = adj[leaf][0];
            const del = adj[neighbor].indexOf(leaf);
            adj[neighbor].splice(del, 1);
            if(adj[neighbor].length === 1) newLeaves.push(neighbor);
        }
        leaves = newLeaves;
    }
    return leaves;
};
