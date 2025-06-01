/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
    const color = Array.from({length: n+1}, () => 0);
    const adj = Array.from({length: n+1}, () => []);
    for(const [a, b] of paths){
        adj[b].push(a);
        adj[a].push(b);
    }

    for(let i = 1; i <= n; i++)
        if(color[i] === 0) dfs(i, color, adj);


    return color.slice(1);  
    
};

const dfs = (cur, color, adj) => {
    for(let i = 1; i <= 4; i++){
        let flag = false;
        for(const adjGarden of adj[cur]){
            if(color[adjGarden] === i){// if adjacent garden has this color/plant already
                flag = true;
                break;
            } 
        }
        if(!flag){  // if no adjacent gardens have this color
            color[cur] = i;
            break;
        }
    }
}
