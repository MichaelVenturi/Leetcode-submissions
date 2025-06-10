class Solution {
public:
    int trap(vector<int>& height) {
        int l(0), r(height.size() - 1), count(0);
        int lmax(0), rmax(0);
        while(l < r){
            lmax = max(lmax, height[l]);
            rmax = max(rmax, height[r]);
            if(lmax < rmax){
                count += lmax - height[l];
                l++;
            }else{
                count += rmax - height[r];
                r--;
            }
        }
        return count;
    }
};