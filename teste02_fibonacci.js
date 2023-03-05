let num;
while (isNaN(num) || num < 0) {
  num = parseInt(prompt("Por favor, informe um número inteiro positivo: "));
}

let fib = [0, 1];
while (fib[fib.length - 1] < num) {
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
}

let pertence = false;
if (fib[fib.length - 1] === num) {
  pertence = true;
}

alert("Sequência de Fibonacci até " + num + ": " + fib);
if (pertence) {
  alert(num + " pertence à sequência de Fibonacci.");
} else {
  alert(num + " não pertence à sequência de Fibonacci.");
}
