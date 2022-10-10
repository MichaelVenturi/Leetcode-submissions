class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int size = m + n;
        for(int i = 0; i < n; i++){
            nums1[size-n+i] = nums2[i];
        }
        return std::sort(nums1.begin(), nums1.end());
    }
};