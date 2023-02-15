class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
        reverse(num.begin(), num.end());
        int i = 0;
        while(i < num.size() || k > 0){
            if(i == num.size() && k > 0) num.push_back(k%10);
            else num[i] += k % 10;
            if(num[i] > 9){
                num[i] -= 10;
                if(i == num.size()-1) num.push_back(1);
                else num[i+1] += 1;
            }    
            k/=10;
            i++;
        }
        reverse(num.begin(), num.end());
        return num;
    }
};