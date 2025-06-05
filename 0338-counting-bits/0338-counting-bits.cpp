class Solution {
public:
    vector<int> countBits(int n) {
        if(n == 0) return {0};
        vector<int> ans(n+1, -1);
        ans[0] = 0;
        for(int i = 1; i <= n; i++){
            int sum = 0;
            sum += i % 2;
            sum += ans[i / 2];
            ans[i] = sum;
        }
        return ans;
    }
};