class Solution {
public:
    bool isIsomorphic(string s, string t) {
        int sLen = s.length();
        int tLen = t.length();
        if(sLen != tLen) return false;
        
        for(int i = 0; i < sLen; i++){
            int x = s.find(s[i], i+1);
            int y = t.find(t[i], i+1);
            if(x == y){
                continue;
            }
            return false;
        }
        return true;
    }
};