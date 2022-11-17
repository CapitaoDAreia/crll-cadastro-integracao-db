//Representação de domínio da aplicação. Simulação de como funcionaria o comportamento do backend
export default class Cliente {
  #id: string | undefined;
  #name: string;
  #age: number;

  constructor(name: string, age: number, id: string | undefined = undefined) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
  }

  static empty() {
    return new Cliente("", 0, undefined);
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
