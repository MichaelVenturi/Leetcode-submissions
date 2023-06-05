class Solution {
public:
    int mySqrt(int x) {
        if(x == 0) return 0;
        if(x <= 3) return 1;
        int left = 1;
        int right = x / 2;
        while(left <= right){
            long long mid = left + (right - left) / 2;
            if(mid * mid == x) return mid;

            if(mid * mid > x) right = mid - 1;
            else if(mid * mid < x) left = mid + 1;
        }
        return right;
    }
};