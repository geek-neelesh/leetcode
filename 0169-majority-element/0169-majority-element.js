/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const len = nums.length;
    if(len == 1){
        return nums[0];
    }
    const freqMap = new Map();
    for(let i=0;i<len;i++){
        if(freqMap.has(nums[i])){
            let freq = freqMap.get(nums[i]);
            freqMap.set(nums[i],++freq);
            if(freq>len/2){
                return nums[i];
            }

        }else{
            freqMap.set(nums[i],1);
        }


    }
    return -1;
    
};