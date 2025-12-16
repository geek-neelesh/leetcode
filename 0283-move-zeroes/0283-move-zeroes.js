/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer=-1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0){
            pointer= i;
        break;
        }
    }

    if(pointer == -1){
        return nums;
    }
    
    let i=pointer+1;
    while(i<nums.length){
        if(nums[i]!=0){
            [nums[pointer],nums[i]] = [nums[i],nums[pointer]];
            i++;
            pointer++;
        }else{
            i++;
        }
    }
    return nums;
    
};