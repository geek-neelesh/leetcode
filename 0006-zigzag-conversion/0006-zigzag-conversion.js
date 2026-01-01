/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1 || numRows >= s.length){
        return s;
    }

    let ind = 0;
    let direction = 1;
    let rowsArr = new Array(numRows).fill().map(()=>[]);
    for(const char of s){
        rowsArr[ind].push(char);
        if(ind == 0){
            direction = 1;
        }
        if(ind == numRows-1){
            direction = -1;
        }
        ind +=direction;
        
        
    }

    for(let i=0;i<numRows;i++){
        rowsArr[i] = rowsArr[i].join('');
    }
    return rowsArr.join('');
    
};