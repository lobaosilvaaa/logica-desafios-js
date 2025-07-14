// Conversão de String para Inteiro com uma função
function converterParaInteiro(valorString) {
    return parseInt(valorString);
}

// Exemplo de uso
let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro); // Saída: 42

// Calculadora
function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Erro: Divisão por zero';
    }
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'adicao':
            return adicao(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            return 'Operação inválida';
    }
}

// Exemplo de uso
let resultado = calculadora('adicao', 5, 3);
console.log(resultado); // Saída: 8

// Verificação de Números Pares e Ímpares
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

// Exemplo de uso
let numero = 7;
let resultadoParImpar = verificarParOuImpar(numero);
console.log(resultadoParImpar); // Saída: Ímpar

// Conversão de Temperatura
function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

// Exemplo de uso
let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  // Saída esperada: 77