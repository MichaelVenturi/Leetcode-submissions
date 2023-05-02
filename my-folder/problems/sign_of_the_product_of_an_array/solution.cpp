class Solution {
public:
    int arraySign(vector<int>& nums) {
        int i;
        for(int it : nums){
            if(it == 0) return 0;
            if(it < 0) i++;
        }
        if(i % 2 == 0) return 1;
        return -1;
    }
};