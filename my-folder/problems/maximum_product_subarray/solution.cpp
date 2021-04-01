class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int currentSub;
        int maxSub = -1000000000;
        for(int i = 0; i < nums.size(); i++){
            currentSub = 1;
           for(int j = i; j < nums.size(); j++){
               currentSub *= nums[j];
               maxSub = max(maxSub, currentSub);
           }
            
            
        }
        return maxSub;
    }
};