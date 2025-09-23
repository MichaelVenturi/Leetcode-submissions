/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for(const num of arr) {
        if(!map.get(num)) map.set(num, 1);
        else map.set(num, map.get(num)+1);
    }
    const set = new Set(map.values());

    return set.size === map.size;
};