function paren(left, right, string) {

  if (left == 0 && right == 0) {
    console.log(string);
  }
  if (left > right) {
    return;
  }
  if (right > 0) {
    paren(left, right - 1, string + ')');
  }
  if (left > 0) {
    paren(left - 1, right, string + '(');
  }
}

function parentheses(n) {
  paren(n / 2, n / 2, '');
}

parentheses(120);
