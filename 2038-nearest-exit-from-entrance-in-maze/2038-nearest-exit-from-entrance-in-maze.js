/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const q = [];
    q.push([entrance[0],entrance[1]]);
    let moves = 1;
    let m = maze.length;
    let n = maze[0].length;

    const xDir = [-1, 0, 1, 0];
    const yDir = [0, -1, 0, 1];

    maze[entrance[0]][entrance[1]] = '+';
    while(q.length > 0) {
        let size = q.length;
        while(size--){
            const cur = q.shift();
            const curRow = cur[0];
            const curCol = cur[1];
            for(let i = 0; i < 4; i++){
                const newRow = curRow + xDir[i];
                const newCol = curCol + yDir[i];
                // if invalid bounds or wall
                if(newRow < 0 || newCol < 0 || newRow >= m || newCol >= n || maze[newRow][newCol] === '+') continue;
                // edge of maze (exit)
                if(newRow === 0 || newCol === 0 || newRow === m-1 || newCol === n-1) return moves;
                maze[newRow][newCol] = '+';
                q.push([newRow, newCol]);
            }
        }
        moves++;
    }
    return -1;
};