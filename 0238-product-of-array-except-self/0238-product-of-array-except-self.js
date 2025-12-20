var productExceptSelf = function(nums) {
    let length = nums.length;
    let totalProduct = 1;
    let zeroCount = 0;
    
    for (let num of nums) {
        if (num !== 0) {
            totalProduct *= num;
        } else {
            zeroCount++;
        }
    }

    let result = new Array(length).fill(0);
    
    for (let i = 0; i < length; i++) {
        if (nums[i] === 0) {
            if (zeroCount > 1) {
                result[i] = 0;
            } else {
                result[i] = totalProduct; 
            }
        } else {
            if (zeroCount > 0) {
                result[i] = 0; 
            } else {
                result[i] = totalProduct / nums[i]; // Normal division
            }
        }
    }
    
    return result;
};