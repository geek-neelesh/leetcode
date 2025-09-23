/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let productArr = new Array(n).fill(1);
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(j!=i){
                productArr[i]*=nums[j];
            }

        }
    }
    return productArr;
    
};