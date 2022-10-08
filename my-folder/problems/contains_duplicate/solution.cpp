class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        map<int,int>dict;
        for(auto& it : nums){
            //cout << it;
            if(dict[it]) return true;
            dict[it] = 1;
        }
        return false;
    }
};