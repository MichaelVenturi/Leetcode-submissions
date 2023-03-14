class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
       int lo = 1, hi = *(std::max_element(piles.begin(), piles.end()));
       int ans = -1;
       while(lo <= hi){
           int mid = (hi + lo) / 2;
           long long hours = hoursToEatAll(piles, mid);
           if(hours > h){
               lo = mid + 1;
           }else if(hours <= h){
               ans = mid;
               hi = mid-1;
           }
       } 
       return ans;
    }

    long long hoursToEatAll(vector<int>& piles, int bph){
        long long hours = 0;
        for(auto it : piles){
            hours += ceil(it / (double)bph);
        }
        return hours;
    }
};