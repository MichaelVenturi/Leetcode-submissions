class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        
        int strLen = s.size();
        int start(0), end(0);
        int result = 0;

        
        map<char, int> charMap;
        
        while(end < strLen) {
            result = max(result, end - start);
            // if the key exists, and it appears after the start index (appears in current substring)
            if(charMap.find(s[end]) != charMap.end() && charMap[s[end]] >= start){
                start = charMap[s[end]] + 1; 
                charMap[s[end]] = end;
                end++;
            // if it does not exist, or is outside of this substring
            }else {
                charMap[s[end]] = end;
                end++;
            }
        }
        result = max(result, end - start);
        return result;
    }
};