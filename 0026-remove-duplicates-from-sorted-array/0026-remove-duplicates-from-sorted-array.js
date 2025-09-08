/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const uniqSet = new Set(nums);
    const uniqArr = Array.from(uniqSet);
    
    for(let i=0;i<uniqArr.length;i++){
        nums[i]=uniqArr[i];
    }
    return uniqArr.length;
    
};