/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const dict = {};
    for(const str of strs){
        let key = str.split('').sort().join('');
        if(!dict[key]) dict[key] = [];
        dict[key].push(str);
    }
    return Object.values(dict);
};