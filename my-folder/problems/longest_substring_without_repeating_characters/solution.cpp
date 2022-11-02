class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int left(0), right(0);
        map<char, int> m;
        int res(0);
        
        while(right < s.size()){
            res = max(res, right-left);
           if(m.find(s[right]) != m.end() && m[s[right]] >= m[s[left]]){
                left = m[s[right]] + 1;
            }
            m[s[right]] = right;
            right++;
             
        }
        
            res = max(res, right-left);
        
        return res;
    }
};