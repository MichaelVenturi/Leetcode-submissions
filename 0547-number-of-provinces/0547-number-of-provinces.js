/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const adj = Array.from({length: n}, () => []);
    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j < n; j++){
            if(isConnected[i][j] === 1){
                adj[i].push(j);
                adj[j].push(i);
            }
        }
    }
    const visited = new Array(n).fill(0);
    let count = 0;
    for(let i = 0; i < n; i++){
        console.log(visited);
        if(visited[i] !== 1){
            count++;
            visited[i] = 1;
            const q = [];
            q.push(i);
            while(q.length > 0){
                const cur = q.shift();
                 for(const neighbor of adj[cur]){
                    if(visited[neighbor] !== 1){
                        visited[neighbor] = 1;
                        q.push(neighbor);
                    }
                }
            }
        }
    }
    
    return count;
};
