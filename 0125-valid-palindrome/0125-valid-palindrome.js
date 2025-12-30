/**
 * @param {string} s
 * @return {boolean}
 */

function checkPalindrome(s,start,end){
    if(start>=end){
        return true;
    }

    if(s[start]==s[end]){
        return checkPalindrome(s,start+1,end-1);

    }
    return false;
}
var isPalindrome = function(s) {
    s=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    return checkPalindrome(s,0,s.length-1);
    
};