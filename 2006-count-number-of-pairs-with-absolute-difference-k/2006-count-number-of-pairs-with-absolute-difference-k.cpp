class Solution {
public:
    int countKDifference(vector<int>& nums, int k) {
        unordered_map<int,int>map;
        int difference=0;
        for(int i=0;i<nums.size();i++){
            int number1=nums[i]+k;
            int number2=nums[i]-k;
            difference+=map[number1];
            difference+=map[number2];
            map[nums[i]]++;

        }
        return difference;
        
    }
};