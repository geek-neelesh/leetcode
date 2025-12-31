/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const n = strs.length;
    
    let prefix = strs[0];
    if(prefix==""){
        return "";
    }
    for(let i=1;i<n;i++){
        let j=0;
        while(prefix[j]== strs[i][j]){
            j++;
            
        }
        prefix=prefix.substring(0,j);

    }
    if(prefix.length==0){
        return "";
    }else{
        return prefix;
    }
};