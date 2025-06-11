/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const q = [];
    const n = grid.length;
    const m = grid[0].length;
    let fresh = time = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] === 2) {
                q.push([i, j]);
            }
            else if(grid[i][j] === 1) fresh++;
        }
    }
    const xDir = [-1, 0, 1, 0];
    const yDir = [0, 1, 0, -1];
    while(q.length > 0){
        let wasInfected = false;
        let size = q.length;
        while(size--){
            const cur = q.shift();
            const curRow = cur[0];
            const curCol = cur[1];
            for(let i = 0; i < 4; i++){
                let nRow = curRow + xDir[i];
                let nCol = curCol + yDir[i];
                if(nRow >= 0 && nRow < n && nCol >= 0 && nCol < m && grid[nRow][nCol] == 1){
                    grid[nRow][nCol] = 2;
                    fresh--;
                    q.push([nRow, nCol]);
                    wasInfected = true;
                }
            }
        }
        if(wasInfected) time++;
    }
    if(fresh > 0) return -1;
    return time;

};