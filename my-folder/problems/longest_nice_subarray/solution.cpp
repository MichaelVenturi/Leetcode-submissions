class Solution {
public:
    int longestNiceSubarray(vector<int>& nums) {
        int sum = 0;
        int left(0), right(0), count(0);
        while(right < nums.size()){
            //right++;
            while((sum & nums[right]) != 0){
                sum ^= nums[left];
                left++;
            }
            sum |= nums[right];
            count = max(count, right-left+1);
            right++;
        }

        return count;
    }
};