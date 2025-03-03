class Solution {
public:
    vector<int> pivotArray(vector<int>& nums, int pivot) {
        vector<int> leftArr;
        vector<int> rightArr;
        vector<int> res;
        int pivotCount = 0;

        for(auto& num : nums){
            if(num < pivot){
                leftArr.push_back(num);
            }else if(num > pivot){
                rightArr.push_back(num);
            }else{
                pivotCount++;
            }
        }
        for(int i = 0; i < pivotCount; i++){
            leftArr.push_back(pivot);
        }
        res.reserve(leftArr.size() + rightArr.size());
        res.insert(res.end(), leftArr.begin(), leftArr.end());
        res.insert(res.end(), rightArr.begin(), rightArr.end());
        return res;
    }
};