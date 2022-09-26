class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        
        
        // merge 2 sorted arrays
        int n = nums1.size();
        int m = nums2.size();
        double result;
        
        vector<int>mergedNums;
        
        int i(0), j(0);
        while(i < n && j < m){
            
            if(nums1.at(i) < nums2.at(j)){
                mergedNums.push_back(nums1.at(i));
                i++;
            } else {
                mergedNums.push_back(nums2.at(j));
                j++;
            }
        }
        while(i < n){
            mergedNums.push_back(nums1.at(i));
            i++;
        }
        while(j < m){
            mergedNums.push_back(nums2.at(j));
            j++;
        }
            
        // cut size in half
        int middle = (n + m) / 2;
        if((n+m) % 2 == 0){
            result = (double)(mergedNums.at(middle) + mergedNums.at(middle - 1))/2;
        }else{
            result = mergedNums.at(middle);
        }
        
        
        
        return result;
    }
};