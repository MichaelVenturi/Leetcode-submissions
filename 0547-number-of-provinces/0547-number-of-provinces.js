/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;

    const visited = new Array(n).fill(0);
    let count = 0;
    for(let i = 0; i < n; i++){
        if(visited[i] !== 1){
            count++;
            visited[i] = 1;
            const q = [];
            q.push(i);
            while(q.length > 0){
                const cur = q.shift();
                 for(let j = 0; j < n; j++){
                    if(visited[j] !== 1 && isConnected[j][cur] === 1)
                    {
                        visited[j] = 1;
                        q.push(j);
                    }
                }
            }
        }
    }
    
    return count;
};
