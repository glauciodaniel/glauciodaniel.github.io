/*

// Função nominal com parâmetro obrigatório

// undefined é um tipo de valor que não existe.
// null é um tipo de valor inválido.

// uma função sem return é uma subrotina.
function escreve(nome, sobrenome) {
  const a = sobrenome;
  if (a === undefined) {
    console.log("a é undefined");
    console.log("Valor de a", a, "\n");
    console.log("valor de sobrenome", sobrenome, "\n");
  }
  console.log(`${nome} ${sobrenome}`);
}

escreve("Glaucio");

// função nominal que retorna valor.
function soma(a, b) {
  return Number(a) + Number(b);
}

const resultado = soma(1, 2);

console.log(soma(3, 5));

// expressão de função = uma função é atribuida a um contexto por exemplo uma variável
const exibe = function (x) {
  return `Exibindo parâmetro ${x}`;
};

console.log(exibe("chocolate"));

// O JavaScript evolui a cada ano. Todo ano tem uma nova versão do JavaScript.
//2012-15
// Não tinha muita restrição da forma de escrever JavaScript.
// "use strict";
// 2015 - Muitas mudanças e algumas melhorias... o const e o let foram adicionados nesta versão.
//2018 - Os navegadores passaram a implementar o use strict;
//option explicit

//this === windows - true
//this === window - false;
//use strict - this é undefined.

//this - este. é uma variável interna para apontar atributos e métodos dentro de um objeto ou classe.

// Pessoa correr()   Pessoa.correr();
// Pessoa correr() parar() andar() sentar(); levantar(); velocidade =0;

// function andar(){ this.velocidade = 1;}
// --------------

//this.  Variável interna do JavaScript
//this ele tem comportamentos diferentes dependendo de onde ele está sendo usado.
// refere-se a um objeto.

*/
//objeto global
let empresa = this; // window

//quando criamos um objeto, criamos um escopo.
// quando usamos o this dentro de um objeto, o this é o objeto.
const aluno = {
  nome: "Glaucio",
  matricula: 123,
  executar: function () {
    return `Exibindo de dentro de um método ${this.nome}`;
  },
};

console.log(aluno.executar());
console.log(aluno.nome);

// estrito - this é undefined.
console.log("Quem é o this no contexto global", empresa);

//this dentro de uma função - também é um objeto global.

function globalObj() {
  //   "use strict"; //this vira undefined;
  return this;
}
window.document.write("<h2>Escrevendo no Body</h2>");
document.write(globalObj());

//globalObj().alert("Vai Corinthians!");

//Arrow Function - Função de seta, ela é mais curta, não tem o próprio contexto.
const novaFuncao = (a, b) => {
  console.log("Chamando de dentro de uma arrow function");
  //Interpolação de variáveis é chamar uma variável dentro de uma string; Template String.
  console.log(`Exibindo o valor de ${a}`);
  //Concatenação de variáveis.
  console.log("Exibindo o total de caracteres " + b.length);
  //indentação é um código escrito de forma legível, que respeita hierarquia { dá um espaço, para facilitar a leitura do código. um código indentado é uma das maneiras de manter um código limpo.}
};

const funcao3 = (a) =>
  console.log(`Exibindo o total de caracteres de ${a.length}`);

funcao3("Glaucio Daniel");

// novo JavaScript ES2017
//spread operator ...

const carros = (primeiro, segundo, ...restante) => {
  console.log(
    `Os carros informados foram: ${primeiro}, ${segundo} - ${
      restante[5]
    }. Todos os demais são ${restante.join(", ")}`
  );
};
carros(
  "DelRey",
  "Brasilia",
  "Belina",
  "Fusca",
  "Variant",
  "Parati",
  "Monza",
  "scort",
  "fiat 147",
  "D-20",
  "Kombi",
  "BWM",
  "Opala",
  "Land-Rover",
  "Gurgel",
  "Maverick",
  "Marea"
);
const frutas = ["Guaraná", "Cupuaçu", "Açaí"];
const todasFrutas = [...frutas, "banana", "abacaxi"];

// const {password, ...result} = await user.findById(50);
//password
//name, email, id, salary

console.log("Todas as Frutas", todasFrutas);

//destructuring assignment
// Atribuição por desestruturação.
let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log("Exibindo o primeiro: ", primeiro);
console.log("Exibindo o resto: ", resto);

const meuArray = [10, 20, 30, 40];
console.log(meuArray, meuArray.join(" - "));

// const [p, s, t, q] = meuArray;
// const [...p, q] = meuArray;
// console.log("exibindo o quarto elemento", q);
const [q, ...p] = meuArray.reverse();
console.log(p.reverse());
