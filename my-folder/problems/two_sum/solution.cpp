class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        map<int, int>compliments;
        int compliment;
        for(int i = 0; i < nums.size(); i++){
            
            compliment = target - nums[i];
            
            if(compliments.count(compliment)) return {compliments[compliment], i};
            
            compliments[nums[i]] = i;
            
            
        }
        return {0};
    }
};