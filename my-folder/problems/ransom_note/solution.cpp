class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        map<char, int>m;
        for(auto i : magazine){
            m[i]++;
        }
        
        for(auto i : ransomNote){
            if(!m[i]) return false;
            m[i]--;
                
        }
        return true;
    }
};