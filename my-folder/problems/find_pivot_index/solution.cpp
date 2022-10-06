class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int leftSum;
        int left;
        left = -1;

        
        int sum = 0;
        
        leftSum = 0;
   
        for(int i : nums){
            sum += i;
        }
        
        for(int i = 0; i < nums.size(); i++){
            if(sum - nums.at(i) == leftSum){
                return i;
            }else{
                leftSum += nums.at(i);
                sum -= nums.at(i);
            }
        }
        return -1;

    }
};

// [1,2,1,1,1,1,1]