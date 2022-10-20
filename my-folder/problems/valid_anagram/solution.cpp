class Solution {
public:
    bool isAnagram(string s, string t) {
        map<char, int>m;
        for(auto i : s){
            m[i]++;
        }
        for(auto i : t){
            if(!m[i]) return false;
            m[i]--;
            if(m[i] == 0) m.erase(i);
        }
        
        return m.size() == 0;
    }
};