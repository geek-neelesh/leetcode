class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int n=nums.size();
        unordered_map<int,int>m;
        for(int i=0;i<n;i++){
            m[nums[i]]++;

        }
        int ans=0;
        for(auto x:m){
            if(x.second==1){
                ans=x.first;
                
            }

        }
        return ans;
        
    }
};