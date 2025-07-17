// Desafios: hora da prática

// 1. Crie uma função que valide se um número é positivo, negativo ou zero.
function validarNumero(numero) {
    if (numero > 0) {
        return 'Positivo';
    } else if (numero < 0) {
        return 'Negativco';
    } else {
        return 'Zero';
    }
}

console.log(validarNumero(10)); // Positivo
console.log(validarNumero(-1)); // Negativo
console.log(validarNumero(0)); // Zero

// 2. Implemente uma função que verifique se uma pessoa é maior de idade.
function verificarIdade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(verificarIdade(20)); // Maior de idade
console.log(verificarIdade(16)); // Menor de idade

// 3. Desenvolva uma função que valide se uma string é vazia ou não.
function validarString(texto) {
    return texto === '' ? 'String vazia' : 'String não vazia';
}

console.log(validarString('Aqui há um texto')); // String não vazia
console.log(validarString('')); // String vazia

// 4. Crie uma função que determine se um ano é bissexto
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return `${ano} é um ano bissexto`;
    } else {
        return `${ano} não é um ano bissexto`;
    }
}

console.log(verificarAnoBissexto(2025)); // 2025 não é um ano bissexto
console.log(verificarAnoBissexto(2020)); // 2020 é um ano bissexto

// 5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return 'Um dos números não é válido.';
    }
    return (num1 + num2) /2;
}

console.log(calcularMedia(8, 5)); // 6.5
console.log(calcularMedia(8, 'a')); // Um dos números não é válido.

// 6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
function obterTamanhoArray(arr) {
    return arr.length;
}

// Exemplo de uso
const minhaLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(obterTamanhoArray(minhaLista)); // 10

// 7. Crie um array e utilize a função includes para verificar se um elemento específico está presente
const meuArray = [10, 20, 30, 40, 50];
console.log('O array contém o número 30?', meuArray.includes(30)); // true

// 8. Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.
// Função para verificar se um elemento está presente em um array
function verificarElementoArray(arr, elemento) {
    return arr.includes(elemento);
}

// Exemplo de uso
const meuArray2 = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

// Utilizando a função para verificar se o elemento está presente
const elementoEstaPresente = verificarElementoArray(meuArray2, elementoProcurado);

// Exibindo o resultado
if (elementoEstaPresente) {
    console.log(`O elemento ${elementoProcurado} está presente no array.`);
} else {
    console.log(`O elemento ${elementoProcurado} não está presente no array.`);
}

// 9. Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
const palavras = ['apple', 'banana', 'orange', 'grape'];
console.log('A palavra "banana" está no array?', palavras.includes('banana')); // true

// 10. Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.
// Função para verificar se um objeto está presente no array
function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

// Array de objetos representando alunos
const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade: 21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

// Objeto que queremos verificar se está presente no array
const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

// Utilizando a função para verificar se o objeto está presente
const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

// Exibindo o resultado
if (objetoEstaPresente) {
    console.log(`O aluno ${alunoProcurado.nome} está presente no array.`);
} else {
    console.log(`O aluno ${alunoProcurado.nome} não está presente no array.`);
}

// 11. Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.
function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return {
        somaPares,
        produtoImpares
    };
}

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = calcularSomaProduto(numeros);
console.log(`Soma dos pares: ${resultado.somaPares}`); // Soma dos pares: 12
console.log(`Produto dos ímpares: ${resultado.produtoImpares}`); // Produto dos ímpares: 15