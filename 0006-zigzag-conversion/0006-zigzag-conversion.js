/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1 || numRows >= s.length) return s;

    let i = 0;
    let d = 1;
    const rows = Array.from({length: numRows}, () => []);
    for(const c of s){
        rows[i].push(c);
        if(i === 0) d = 1;
        else if(i === numRows - 1) d = -1;
        i += d;
    }
    let res = '';
    for(let i = 0; i < numRows; i++){
        res += rows[i].join('');
    }
    return res;
};
