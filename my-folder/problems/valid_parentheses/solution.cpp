class Solution {
public:
    bool isValid(string s) {
        
        bool p(true), c(true), b(true);
        vector<char> lastBracket;
        
        for(int i = 0; i < s.length(); i++){
            char c = s[i];
            if(c == '(' || c == '{' || c == '['){
                lastBracket.push_back(c);
            }else{
                if(c == ')' || c == '}' || c == ']'){
                    if(lastBracket.empty()) return false;
                    char last = lastBracket.back();
                    if(c == ')' && last != '(') return false;
                    if(c == '}' && last != '{') return false;
                    if(c == ']' && last != '[') return false;
                
                    lastBracket.pop_back();
                }
                
            }
        }
        
        
        return lastBracket.empty();
      
        
    }
};