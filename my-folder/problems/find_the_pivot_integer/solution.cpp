class Solution {
public:
    int pivotInteger(int n) {
        if ( n == 1 ) return n;
        int left(1), right(n);
        int leftSum(0), rightSum(0);
        while(left < right){
            
            if(leftSum < rightSum) leftSum+=left++;
            else if (leftSum > rightSum) rightSum += right--;
            else {
                leftSum+=left++;
                rightSum += right--;
            }
            cout << leftSum << " " << rightSum << endl;
        }
        
        if(leftSum == rightSum) return left;
        else return -1;
    }
};