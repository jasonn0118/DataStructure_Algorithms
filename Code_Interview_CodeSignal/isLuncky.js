// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ/drafts

// My solution
function isLucky(n) {
    var convertToString = n.toString();
    var beginningDigit =0;
    var lastDigit = 0;

    for(let i = 0; i < convertToString.length/2; i++){
        beginningDigit += parseInt(convertToString[i]);
        lastDigit += parseInt(convertToString[convertToString.length-1-i]);
    }
    
    if(beginningDigit === lastDigit){
        return true;
    }
    
    return false;
}


// Another approach
// function isLucky(n) {
//     var count = 0;
//     n = String(n).split('').map(t => {return parseInt(t)});
//     n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
//     return count == 0;
// }
