class Solution {
public:
    bool checkStraightLine(vector<vector<int>>& coordinates) {
        if(coordinates.size() < 2) return 1;
        
        int x0(coordinates[0][0]), y0(coordinates[0][1]);
        int x1(coordinates[1][0]), y1(coordinates[1][1]);

        for(int i = 2; i < coordinates.size(); i++){
            int x(coordinates[i][0]), y(coordinates[i][1]);
            if((x-x0)*(y1-y0) != (y-y0)*(x1-x0)) return false;
        }
        return 1;
    }

    /*
        slope between first 2 points:                y1 - y0 / x1 - x0
        slope between cur point and first point:     y - y0 / x - x0
        slopes must be equal:
          y1 - y0 / x1 - x0 = y - y0 / x - x0
          cross multiply to eliminate possible division by 0
          (y1 - y0) * (x - x0) = (y - y0) * (x1 - x0)



    */

    
};