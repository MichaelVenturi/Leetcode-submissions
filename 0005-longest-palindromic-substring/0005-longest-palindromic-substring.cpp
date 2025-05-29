class Solution {
public:
    string longestPalindrome(string s) {
        int size = s.size();
        if(size == 0) return "";
        int start(0), maxLength(1);
        vector<vector<bool>> dp(size, vector<bool>(size, false));
        for(int i = 0; i < size; i++){
            dp[i][i] = true;
        }

        for(int len = 2; len <= size; len++){
            for(int left = 0; left <= size - len; left++){
                int right = len + left - 1;
                if(s[left] == s[right]){
                    if(len == 2) dp[left][right] = true;
                    else dp[left][right] = dp[left + 1][right - 1];

                    if(dp[left][right] && len > maxLength){
                        start = left;
                        maxLength = len;
                    }
                }
            }
        }
        return s.substr(start, maxLength);
    }
};