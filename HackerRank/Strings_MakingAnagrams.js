// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function makeAnagram(a, b) {
    let arr = [];
    for(let i = 0; i<a.length; i++){
        arr.push(a[i]);
    }
    arr.map(el => {
        if(b.includes(el)){
         b = b.replace(el, "!");
         a = a.replace(el, "!");  
        }
    })
    b = b.replace(/!/g,"");
    a = a.replace(/!/g,"");

    return a.length + b.length;
}
