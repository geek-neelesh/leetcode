/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length;
    for(let i=0;i<len;i++){
        let count = 0;
        for(let j=0;j<len;j++){
            if(nums[i]==nums[j]){
                count++;
            }
        }
        if(count>len/2){
            return nums[i];
        }
    }
    return -1;
    
};