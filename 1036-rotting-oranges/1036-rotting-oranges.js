/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const q = []; // BFS : queue to track where each rotten orange is
    const n = grid.length;
    const m = grid[0].length;
    let fresh = time = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] === 2) q.push([i, j]);    // if rotten, add to queue
            else if(grid[i][j] === 1) fresh++;  // if fresh, increase the fresh count
        }
    }
    if(q.length === 0 && fresh === 0) return 0; // if no rotten oranges and no fresh oranges, 0 minutes must elapse to have no fresh oranges
    else if(q.length === 0) return -1;  // if no rotten oranges but there are fresh oranges, it is impossible to have zero fresh oranges
    const xDir = [-1, 0, 1, 0]; // for moving left/right
    const yDir = [0, 1, 0, -1]; // for moving up/down
    while(q.length > 0){ // while there are still rotten oranges
        time++;
        let size = q.length;
        while(size--){ // loop for how large the queue currently is (do not keep looping here when oranges are added)
            const cur = q.shift();
            const curRow = cur[0];
            const curCol = cur[1];
            for(let i = 0; i < 4; i++){
                let nRow = curRow + xDir[i];
                let nCol = curCol + yDir[i];
                if(nRow >= 0 && nRow < n && nCol >= 0 && nCol < m && grid[nRow][nCol] == 1){ // if in bounes and this orange is fresh
                    grid[nRow][nCol] = 2; // now it is rotten
                    fresh--;
                    q.push([nRow, nCol]); // add new rotten orange to queue
                }
            }
        }
    }
    if(fresh > 0) return -1;
    return time - 1; // the last loop will always have no infections.  so the last minute is spent checking, take that last minute away

};