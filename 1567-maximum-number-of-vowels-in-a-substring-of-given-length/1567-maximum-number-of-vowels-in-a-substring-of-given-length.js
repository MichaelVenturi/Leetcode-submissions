/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let sum = 0;
    for(let i = 0; i < k; i++) sum += isVowel(s[i]);

    let maxS = sum;

    for(let i = k; i < s.length; i++){
        sum += isVowel(s[i]) - isVowel(s[i-k]);
        maxS = Math.max(sum, maxS);
    }

    return maxS;

};

    const isVowel = (c) => {
        if("aeiou".includes(c)) return 1;
        return 0;
    }