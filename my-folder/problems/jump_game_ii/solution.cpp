class Solution {
public:
    int jump(vector<int>& nums) {
        int last = 0;
        int reach = 0;
        int count = 0;

        for(int i = 0; i < nums.size()-1; i++){
            reach = max(reach, i + nums[i]);
            if(i == last){
                last = reach;
                count++;
            }
               
        }

        return count;
    }
};