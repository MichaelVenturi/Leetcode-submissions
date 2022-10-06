class Solution {
public:
    int maxArea(vector<int>& height) {
        
        int i = 0;
        int j = height.size()-1;
        
        int maxArea = 0;
        
        while(i < j){
            maxArea = max(maxArea, (j-i)*min(height.at(i), height.at(j)));
            if(height.at(i) < height.at(j)){
                i++;
            }else if(height.at(i) > height.at(j)){
                j--;
            }else{
                i++;
                j--;
            }
        }
        
        return maxArea;
        
    }
};