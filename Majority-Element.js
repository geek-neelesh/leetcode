/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const freqMap = new Map();
    for(const value of nums){
        let freqValue =  freqMap.get(value)||0; 
        freqMap.set(value,++freqValue);
        if(freqValue>n/2){
            return value;
        }
    }
    
};