/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rows = new Map();
    for(const row of grid) {
        const key = JSON.stringify(row);
        rows.set(key, (rows.get(key) || 0) + 1);
    }
    let res = 0;
    for(let i = 0; i < grid.length; i++){
        const col = [];
        for(let j = 0; j < grid.length; j++){
            col.push(grid[j][i]);
        }
        const key = JSON.stringify(col);
        if(rows.has(key)) res += rows.get(key);
    }
    return res;
};