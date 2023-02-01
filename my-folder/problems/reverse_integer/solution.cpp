class Solution {
public:
    int reverse(int x) {
        if(x > INT_MAX || x < INT_MIN) return 0;
        int r = 0;
        int digits = 0;
        int y = x;
        int z = 0;

        while(abs(y) > 0){
            y /= 10;
            digits++;
        }
        cout << digits << endl;
        
        while(abs(x) > 0){
            r = x % 10;
            x /= 10;
            cout << r << endl;
            if(z+r*pow(10, digits-1) > INT_MAX || z+r*pow(10, digits-1) < INT_MIN) return 0;
            z += r * pow(10, --digits);

            //cout << r << " "  << x << " " << digits << " " << z;
            
        }
        return z;
    }
};