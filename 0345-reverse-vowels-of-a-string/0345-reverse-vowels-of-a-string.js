/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const str = s.split('');
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        if(!isVowel(str[i])) {
            i++;
        } else if(!isVowel(str[j])){
            j--;
        }
        else{
            const temp = str[j];
            str[j] = str[i];
            str[i] = temp;
            i++;
            j--;
        }
    }
    return str.join('');
};
const isVowel = (c) => {
    switch(c.toLowerCase()){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        return false;
    }
}