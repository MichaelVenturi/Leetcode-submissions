class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int n = grid.size();
        int m = grid[0].size();
        queue<pair<int, int>> q;
        int fresh = 0;
        for(int i = 0; i < n; i++)
            for(int j = 0; j < m; j++){
                if(grid[i][j] == 2) q.push({i, j});
                else if(grid[i][j]==1) fresh++;
            }
       
        if(fresh == 0) return 0;
        if(q.empty()) return -1;
        int time = 0;
        int xDir[4] = {-1, 0, 1, 0};
        int yDir[4] = {0, -1, 0, 1};
        while(!q.empty() && fresh > 0){
            time++;
            int curSize = q.size();
            while(curSize--){
                pair<int, int> cur = q.front();
                int curX = cur.first;
                int curY = cur.second;
                q.pop();
                for(int i = 0; i < 4; i++){
                    int nX = curX + xDir[i];
                    int nY = curY + yDir[i];
                    if(nX >= 0 && nX < n && nY >= 0 && nY < m && grid[nX][nY] == 1){
                        q.push({nX, nY});
                        grid[nX][nY] = 2;
                        fresh--;
                    }
                }
            }
        }
        if(fresh > 0) return -1;
        return time;
    }
};