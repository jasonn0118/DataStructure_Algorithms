//https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function isLucky(n) {
    var count = 0;
    n = String(n).split('').map(t => {return parseInt(t)});
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}
