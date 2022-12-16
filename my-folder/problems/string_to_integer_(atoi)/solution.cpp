class Solution {
public:

    int myAtoi(string s) {
        
        long result;
        int sign = 1;
        int i = 0;
        result = 0;
        cout << "length: " << s.size() << endl;
      
            i = s.find_first_not_of(' ');
            if(i < 0) return 0;
            if(s[i] == '-' || s[i] == '+'){
                sign = (s[i] == '-') ? -1 : 1;
                i++;
            }
            while(s[i] >= '0' && s[i] <= '9'){
                cout << result << " " << s[i] << " " << i << endl;
                result = (result*10) + (s[i]-'0');
                
                i++;
                if(result * sign >= INT_MAX) return INT_MAX;
                if(result * sign <= INT_MIN) return INT_MIN;
            }
return result * sign;
        
      //return result;  
    }
};