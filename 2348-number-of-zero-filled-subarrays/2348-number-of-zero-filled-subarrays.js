/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    const len = nums.length;
    let totalOccurence = 0;
    for(let i=0;i<len;i++){
        let count = 0;
        if (nums[i] == 0) {
            // count consecutive zeros starting at i
            count++;
            let j = i + 1;
            while (j < len && nums[j] == 0) {
                count++;
                j++;
            }
            totalOccurence += (count * (count + 1)) / 2;
            i = j - 1; // move i to the end of the zero sequence
        }

    }
    return totalOccurence;
    
};