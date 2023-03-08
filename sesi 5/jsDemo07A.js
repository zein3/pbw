for (var ii = 4, jj = 3; jj >= 0; ii++, jj--) {
  const round = (x) => Number.parseFloat(x).toFixed(3);
  document.writeln(ii + " * " + jj + " = " + round(ii * jj) + "<br>")
  document.writeln(ii + " / " + jj + " = " + round(ii / jj) + "<br>")
  document.writeln("log(" + jj + ") = " + round(Math.log(jj)) + "<br>")
  document.writeln("sqrt(" + (jj - 1) + ") = " + round(Math.sqrt(jj - 1)) + "<br><br>")
}