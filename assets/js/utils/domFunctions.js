// SOLID
// Princípios de boas práticas de programação.
// S - SRP - Single Responsibility Principle
// Princípio da Responsabilidade Única.
//Funções bem escritas, devem mantidas simples, curtas e realizando um objetivo.
//quando precisamos acessar uma função em outro arquivo, é necessário exportá-la.
//CRUD - Create Read Update Delete
export function addTask() {
  alert("Cadastrando uma nova tarefa");
}
export function removeTask() {
  alert("Removendo uma nova tarefa");
}
export function updateTask() {
  alert("Alterando uma nova tarefa");
}
export function getAllTask() {
  alert("Listando todas tarefas");
}
export function getTaskById() {
  alert("Exibindo uma tarefa");
}
//quando for importar do arquivo domFunctions. o JS não sabe quantas funções estão disponíveis.
// Quando eu preciso extrair qualquer recurso, usando a desestruturação. Destructuring
//import { addTask } from './domFunctions.js';
