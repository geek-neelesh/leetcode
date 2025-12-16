/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n=prices.length;
    let profit=0;
    let minprices=Number.POSITIVE_INFINITY;
    for(let i=0;i<n;i++){
        if(prices[i]<minprices){
            minprices=prices[i];   
        }
        profit=Math.max(profit,prices[i]-minprices);
    }
    return profit;
};