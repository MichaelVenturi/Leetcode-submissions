class Solution {
public:
    string addBinary(string a, string b) {
        string res = "";
        int C = 0;
        if(b.size() > a.size()) swap(a,b);
        while(b.size() < a.size()) b = "0" + b;

        for(int i = a.size()-1; i >=0; i--){
            if(a[i] == '1' && b[i] == '1'){
                if(C==0) res = "0" + res;
                else res = "1" + res;
                C = 1;
            }
            else if(a[i] == '0' && b[i] == '0'){
                if(C==0) res = "0"+res;
                else {
                    res = "1" + res; 
                    C = 0;
                }
            }
            else if(a[i] == '0' && b[i] == '1' ||
                a[i] == '1' && b[i] == '0'){
                    if(C==0)res = "1" + res;
                    else res = "0" + res;
                }
        }
        if(C==1) res = "1" + res;


        return res;
    }
};