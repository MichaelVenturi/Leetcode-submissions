class Solution {
public:
    int reverse(int x) {
        if(x > INT_MAX || x < INT_MIN) return 0;
        int r = 0;
       // int digits = 0;
       // int y = x;
        int z = 0;

       
        
        while(abs(x) > 0){
            r = x % 10;
            x /= 10;
            cout << r << endl;
            if(z > INT_MAX/10 || 
                z < INT_MIN/10)            
                return 0;
            z = z*10+r;

            //cout << r << " "  << x << " " << digits << " " << z;
            
        }
        return z;
    }
};