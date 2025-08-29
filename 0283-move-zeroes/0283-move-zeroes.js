/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const temp = [];
    for(let ele of nums){
        if(ele!=0){
            temp.push(ele);
        }
    }
    const tempLen = temp.length;
    for(let i=0;i<tempLen;i++){
        nums[i]=temp[i];
    }
    for(let i= tempLen;i<nums.length;i++){
        nums[i]=0;
    }
    return nums;
    
};