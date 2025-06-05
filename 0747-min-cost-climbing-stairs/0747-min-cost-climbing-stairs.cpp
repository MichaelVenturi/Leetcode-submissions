class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int size = cost.size();
        for(int i = 2; i < size; i++){
            // first loop: is it cheaper to start on step 0 or 1?
            cost[i] += min(cost[i-1], cost[i-2]);
        }
        return min(cost[size-1], cost[size-2]);
    }
};