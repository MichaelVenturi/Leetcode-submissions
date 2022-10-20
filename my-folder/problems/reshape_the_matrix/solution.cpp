class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        int m = mat.size();
        int n = mat[0].size();
        if(n * m != r * c){
            return mat;
        }
        int total = n * m;
        vector<vector<int>>res(r, vector<int>(c));
        for(int i = 0; i < total; i++){
            res[i / c][i % c] = mat[i / n][i % n];
        }
        return res;
    }
};