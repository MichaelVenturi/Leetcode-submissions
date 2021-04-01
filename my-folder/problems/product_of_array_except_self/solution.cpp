class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        
        vector<int> products(nums.size(), 1);
        int left = 0, right = nums.size() - 1, leftVal = 1, rightVal = 1;
        
        while(left < nums.size()){
            
            products[left] *= leftVal;
            products[right] *= rightVal;
            
            leftVal *= nums[left];
            rightVal *= nums[right];
            
            left++;
            right--;
            
            
            
            
        }
        
       
        
        return products;
    }
};