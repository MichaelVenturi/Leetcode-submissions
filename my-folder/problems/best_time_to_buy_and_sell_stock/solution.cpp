class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int profit = 0;
        
        int start(0), end(1);
        
        while(start < prices.size() && end < prices.size()){
            
            profit = max(profit, prices[end] - prices[start]);
            
            if(prices[end] < prices[start]){
                start++;
            }else{
                end++;
            }
            
            
        }
        return profit;
    }
};