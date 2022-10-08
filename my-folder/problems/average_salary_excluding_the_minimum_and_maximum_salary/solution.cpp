class Solution {
public:
    double average(vector<int>& salary) {
        
        std::sort(salary.begin(), salary.end());
        int sum = 0;
        for(int i = 1; i < salary.size()-1; i++){
            sum+=salary.at(i);
        }
        return (double)sum/(salary.size()-2);
    }
};