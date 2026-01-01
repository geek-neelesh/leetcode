/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let setbitCount = 0;
    while(n!=0){
        if(n%2==1){
            setbitCount++;

        }
        n=Math.floor(n/2);
    }
    return setbitCount;
    
};