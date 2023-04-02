class Solution {
public:
    vector<int> successfulPairs(vector<int>& spells, vector<int>& potions, long long success) {
        vector<int> pairs;
        long long lowest;
        std::sort(potions.begin(), potions.end());

        for(long long spell : spells){
            lowest = ceil((double)success/spell);
            cout << endl<< lowest << endl;
            int l = 0, r = potions.size();
            while(l < r){
                int mid = l + (r-l)/2;
                if(potions[mid] >= lowest) r = mid;
                else l = mid + 1;
            }
            cout << l;
            pairs.push_back(potions.size() - l);
        }


        return pairs;
    }
};
// potion * spell >= succes
// potion >= success / spell
// 1 2 3 4 5
// 1   3   5