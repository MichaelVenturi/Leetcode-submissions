class Solution {
public:
    int longestPalindrome(string s) {
        map<char, int>letters;
        int count = 0;
        
        for(int i = 0; i < s.length(); i++){
            if(letters.count(s[i])){
                letters[s[i]]++;
            }else{
                letters[s[i]] = 1;
            }
        }
        for(auto const [key, val] : letters){
            if(val > 1 && val % 2 == 0) count += val;
            else if(val > 1) count = count + val - 1;
        }
        if(count % 2 == 0 && count != s.length()) count++;
        
        return count;
    }
};