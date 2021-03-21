/**
 * 0: vowel [a,e,i,o,u,y]
 * 1: Consonant
 * 
 * Find a same pattern in a string.
 * For example.
 * 010 - vowel + consonant + vowel 
 * given string is "amazing"
 * 
 * it checks connected string and if it is same pattern with '010'
 * it counts.
 * 
 * expected result is 2, because ["ama", "azi"]
 */

 function patternMatching(pattern, str){
    const vowel = 'aeiouy';
  
    const regexStr = new RegExp(
      pattern.replace(/0/gm, `[${vowel}]`)
      .replace(/1/gm, `[^${vowel}]`),
      'gm'
    );
    const match = matchOverLap(str, regexStr);
    return match.length;
  }
  function matchOverLap(input, res) {
    var r =[];
    var m;
    if(!res.global){
      res = new RegExp(
        res.source, (re+'').split('/').pop()+'g'
      )
    }
    while (m=res.exec(input)){
      res.lastIndex -= m[0].length-1;
      r.push(m[0]);
    }
    return r;
  }
  //example
  patternMatching("010", "amazing");
