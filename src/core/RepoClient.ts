import Cliente from "./Cliente";

export default interface ClientRepository {
  save(client: Cliente): Promise<Cliente | undefined>;
  delete(client: Cliente): Promise<void>;
  getAll(): Promise<Array<Cliente>>;
}
