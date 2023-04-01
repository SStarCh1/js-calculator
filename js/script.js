function calcular() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var operador = document.getElementById("operador").value;
    var resultado;

    if (operador == "+") {
      resultado = valor1 + valor2;
    } else if (operador == "-") {
      resultado = valor1 - valor2;
    } else if (operador == "*") {
      resultado = valor1 * valor2;
    } else if (operador == "/") {
      resultado = valor1 / valor2;
    }

    document.getElementById("result").value = resultado;
  }