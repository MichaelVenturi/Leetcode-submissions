/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(source === destination) return true;
    const adj = Array.from({length: n}, () => []);
    for(const [a,b] of edges){
        adj[a].push(b);
        adj[b].push(a);
    }
    const visited = new Array(n).fill(0);
    visited[source] = 1;
    const q = [...adj[source]];
    while(q.length > 0) {
        const cur = q.shift();
        if(cur === destination) return true;
        for(const n of adj[cur]){
            if(visited[n] === 0){
                visited[n] = 1;
                q.push(n);
            }
        }
    }
    return false;

};