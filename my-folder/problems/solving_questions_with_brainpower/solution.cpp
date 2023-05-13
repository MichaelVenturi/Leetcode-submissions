class Solution {
public:

    long long rec(int i, vector<vector<int>>& questions, vector<long long>& dp){
        if(i >= questions.size()) return 0;
        if(dp[i] != -1) return dp[i];

        long long dontSkip = questions[i][0] + rec(i + questions[i][1] + 1, questions, dp);
        long long skip = rec(i + 1, questions, dp);
        dp[i] = max(dontSkip, skip);
        return dp[i];
    }
    long long mostPoints(vector<vector<int>>& questions) {
        vector<long long> dp(questions.size(), -1);
        return rec(0, questions, dp);
    }
};