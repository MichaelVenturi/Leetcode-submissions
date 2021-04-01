class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
        int currentSub = nums[0];
        int maxSub = currentSub;
        for(int i = 1; i < nums.size(); i++){
            if(currentSub + nums[i] < nums[i]){
                currentSub = nums[i];
            }
        else{
            currentSub += nums[i];
        }
        maxSub = max(maxSub, currentSub);
        
        }
        return maxSub;
    }
};