/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const set = new Set(nums);
    const setArr = Array.from(set);
    for(let i=0;i<setArr.length;i++){
        nums[i]=setArr[i];
    }
    return setArr.length;
    

    
};