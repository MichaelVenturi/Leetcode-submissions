class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        unordered_map<int,int> m;
        int left(0),right(0), count(0);

        while(right < fruits.size()){
            m[fruits[right]]++;

            if(m.size() > 2){
                m[fruits[left]]--;
                if(m[fruits[left]] == 0) m.erase(fruits[left]);
                left++;
            }
            else{
                count = max(count, right - left + 1);
            }
            
            right++;

        }

        return count;
    }
};