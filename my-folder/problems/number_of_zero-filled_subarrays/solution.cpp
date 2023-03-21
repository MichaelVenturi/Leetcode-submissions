class Solution {
public:
    long long zeroFilledSubarray(vector<int>& nums) {
        long long j = 0;
        long long res = 0;
        for(auto it : nums){
            if(it == 0) {
                res += ++j;
            }else{
                j = 0;
            }
        }
        return res;
    }
};