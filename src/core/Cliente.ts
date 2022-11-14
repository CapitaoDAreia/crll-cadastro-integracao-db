//Representação de domínio da aplicação. Simulação de como funcionaria o comportamento do backend
export default class Cliente {
  #id: string | null;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string | null = null) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  static empty(){
    return new Cliente('', 0, null)
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}
