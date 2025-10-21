class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        int profit=0;
        int minprices=INT_MAX;
        for(int i=0;i<n;i++){
        if(prices[i]<minprices){
            minprices=prices[i];
            
        }
            else{
                profit=max(profit,prices[i]-minprices);
        }
        }
        return profit;
        
    }
};