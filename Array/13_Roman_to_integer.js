var romanToInt = function (s) {
  let sumNum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === 'M') {
      if (s.charAt(i - 1) === 'C') {
        sumNum = sumNum + 900;
        i--;
        continue;
      } else {
        sumNum = sumNum + 1000;
      }
    }
    if (s.charAt(i) === 'D') {
      if (s.charAt(i - 1) === 'C') {
        sumNum = sumNum + 400;
        i--;
        continue;
      } else {
        sumNum = sumNum + 500;
      }
    }
    if (s.charAt(i) === 'C') {
      if (s.charAt(i - 1) === 'X') {
        sumNum = sumNum + 90;
        i--;
        continue;
      } else {
        sumNum = sumNum + 100;
      }
    }
    if (s.charAt(i) === 'L') {
      if (s.charAt(i - 1) === 'X') {
        sumNum = sumNum + 40;
        i--;
        continue;
      } else {
        sumNum = sumNum + 50;
      }
    }
    if (s.charAt(i) === 'X') {
      if (s.charAt(i - 1) === 'I') {
        sumNum = sumNum + 9;
        i--;
        continue;
      } else {
        sumNum = sumNum + 10;
      }
    }
    if (s.charAt(i) === 'V') {
      if (s.charAt(i - 1) === 'I') {
        sumNum = sumNum + 4;
        i--;
        continue;
      } else {
        sumNum = sumNum + 5;
      }
    }
    if (s.charAt(i) === 'I') {
      sumNum = sumNum + 1;
    }
  }

  return sumNum;
};

romanToInt('MCMXCIV');
