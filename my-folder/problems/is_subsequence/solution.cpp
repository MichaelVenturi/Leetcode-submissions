class Solution {
public:
    bool isSubsequence(string s, string t) {
        int tLen = t.length();
        int sLen = s.length();
        int j = 0;
        int i = 0;
        while(i < tLen && j < sLen){
            if(s[j] == t[i]){
                j++;
            }
            i++;
        }
        return j == sLen;
    }
};