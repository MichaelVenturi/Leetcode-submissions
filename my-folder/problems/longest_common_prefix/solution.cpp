class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        
        int n = strs.size();
        string prefix = strs.at(0);
        string temp;
        for(int i = 1; i < n; i++){
            int j = 0;
            if(strs.at(i)[0] != prefix[0]){
                return "";
            }
            while(strs.at(i)[j] == prefix[j] && j < prefix.length()){
                temp = prefix.substr(0, j+1);
               // cout << prefix << endl;
                j++;
            }
            prefix = temp;
            if(prefix.length() < 1){
                return "";
            }
        }
        return prefix;
    }
};