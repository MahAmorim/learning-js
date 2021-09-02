function doMath() {
  var one = eval(document.theForm.elements[0].value);
  var two = eval(document.theForm.elements[1].value);
  var prod = one * two;
  document.theForm.elements[2].value = prod;
}
