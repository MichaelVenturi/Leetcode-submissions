class Solution {
public:
    int subtractProductAndSum(int n) {
        //int d2 = (n % 100 - d1) / 10;
        vector<int> digits;
        int count = n;
        digits.push_back(n % 10);
        count -= digits.back();
        int x = 10;
        
        while(count != 0){
            digits.push_back((count % (x*10))/x);
             count -= (digits.back()*x);
            x = x * 10;
        }
        
        int sum(0), product(1);
            for(auto i : digits){
                sum += i;
                product = product * i;
            }
        return product - sum;
    }
};