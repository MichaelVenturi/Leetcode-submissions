/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let temp = x.toString();
    if(temp === temp.split("").reverse().join("")){
        return true;
    }
    return false;
};