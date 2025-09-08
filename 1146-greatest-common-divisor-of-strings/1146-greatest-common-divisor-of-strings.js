/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return "";
    if(str1.length === str2.length) return str1;
    let i = str1.length;
    let j = str2.length;
    while(j) {
        let temp = j;
        j = i % j;
        i = temp;
    }
    return str1.substring(0, i);
};