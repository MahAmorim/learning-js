function doMath() {
  var one = eval(document.theForm.elements[0].value);
  var two = 2;
  var prod = one * two;
  document.theForm.elements[1].value = prod;
}
