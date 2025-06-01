class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int n = nums.size();
        if(n == 0 || target <= nums[0]) return 0;
        if(target > nums[n - 1]) return n;

        int low(0), high(n - 1);
        int mid;

        while(high >= low){
            
            mid = low + (high - low)/2;
            cout << mid << endl;
            if(nums[mid] == target) return mid;
            if(nums[mid] > target) high = mid - 1;
            else low = mid + 1;
        }
        if(nums[mid] < target) return mid + 1;
        if(nums[mid] > target) return mid;
        return -1;
    }
};