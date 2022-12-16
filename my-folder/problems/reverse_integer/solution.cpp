class Solution {
public:
    int reverse(int x) {
        vector<int> digits;
        while(x != 0) {
            digits.push_back(x % 10);
            x /= 10;
        }
        long res = 0;
        int len = digits.size()-1;
        for(int i : digits){
            res += i * pow(10, len);
            if(res >= INT_MAX || res <= INT_MIN) return 0;
            len--;
        }
        return res;
    }
};