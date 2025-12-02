/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hp = new Map();
    for(let i=0;i<nums.length;i++){
        const secondPair = target - nums[i];
        if(hp.has(secondPair)){
            return [i,hp.get(secondPair)]
        }
        hp.set(nums[i],i);

    }
    return [-1,-1];

    
};