//https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
    let mapMagazine = {};
    let matchCount = note.length;
    for(let i = 0; i < magazine.length; i++){
        if(mapMagazine[magazine[i]]){
            mapMagazine[magazine[i]].push(i);
        }
        else{
            mapMagazine[magazine[i]] = [];
            mapMagazine[magazine[i]].push(i);            
        }
    }
    note.map(el => {
        if(mapMagazine.hasOwnProperty(el)){
            if(mapMagazine[el].length > 0){
                mapMagazine[el].pop();
                matchCount--;
            }
        }
    })
    if(matchCount === 0) {
        console.log("Yes")
    } else{
        console.log("No")
    }
}