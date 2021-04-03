class Solution {
public:
    int climbStairs(int n) {
        int* combos = new int[n+1];
        return climb_Stairs(0, n, combos);
    }
    int climb_Stairs(int i, int n, int combos[]){
        if(i > n){
            return 0;
        }
        if(i == n){
            return 1;
        }
        if(combos[i] > 0){
            return combos[i];
        }
        combos[i] = climb_Stairs(i + 1, n, combos) + climb_Stairs(i + 2, n, combos);
        return combos[i];
    }
};