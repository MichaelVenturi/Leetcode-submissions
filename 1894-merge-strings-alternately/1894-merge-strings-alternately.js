/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let res = "";
    while(i < word1.length && i < word2.length){
        res += word1[i];
        res += word2[i++];
    }
    res += word1.length > word2.length ? word1.substring(i) : word2.substring(i);
    return res;
};