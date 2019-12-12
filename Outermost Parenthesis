var removeOuterParentheses = function(S) {
  let bal = 0;
  let res = '';

  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === '(') {
      if (bal !== 0) {
        res += S.charAt(i);
      }
      bal++;
    } else {
      if (bal !== 1) {
        res += S.charAt(i);
      }
      bal--;
    }
  }

  return res;
};
