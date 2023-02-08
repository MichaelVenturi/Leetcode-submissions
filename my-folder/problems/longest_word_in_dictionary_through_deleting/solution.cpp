class Solution {
public:
    string findLongestWord(string s, vector<string>& dictionary) {
        string res = "";
        for(auto word : dictionary){

            int i(0), j(0);
            while(i < word.size() && j < s.size()){
                if(word[i] == s[j]) i++;
                j++;
            }

            if(i == word.size()){
                if(word.size() > res.size() || 
                (word.size() == res.size() && word < res)){
                    res = word;
                }               
            }

        }
        return res;
    }
};