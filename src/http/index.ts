import type ICategoria from "../interfaces/ICategorias";
import type IReceita from "../interfaces/IReceitas";

async function obterDadosURL<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function obterCategorias() {
  return obterDadosURL<ICategoria[]>('https://gist.githubusercontent.com/RomuloDeyvid/698a30717060bc3648176b4957bee82c/raw/e42e8652c87e1206b244d328ea5d145b45949af7/categorias.json');
}

export async function obterReceitas() {
  return obterDadosURL<IReceita[]>('https://gist.githubusercontent.com/RomuloDeyvid/690b00648af7a3def50ba0d6157160e7/raw/42330a42db148081fea502e0817d66b4cf6e6544/receitas.json');
}
