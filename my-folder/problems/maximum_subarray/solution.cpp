class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
        int curMax = 0, allMax = INT_MIN;
        for(int i : nums){
            curMax = max(i, curMax+i);
            allMax = max(allMax, curMax);
        }
        return allMax;
    }
};