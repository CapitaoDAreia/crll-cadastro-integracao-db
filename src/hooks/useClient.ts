import React from "react";
import { useEffect } from "react";
import ColectionClient from "../backend/db/ColectionClient";
import Cliente from "../core/Cliente";
import ClientRepository from "../core/RepoClient";
import useSetDisplay from "./useSetDisplay";

export default function useClient() {
  const repo: ClientRepository = new ColectionClient();

  const { showForm, showTable, tableVisible, formVisible } = useSetDisplay()
  const [client, setClient] = React.useState<Cliente>(Cliente.empty());
  const [clients, setClients] = React.useState<Cliente[]>([]);

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable()
    });
  }

  function selectClient(client: Cliente) {
    setClient(client);
    showForm()
  }

  async function deletedClient(client: Cliente) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Cliente) {
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setClient(Cliente.empty);
    showForm()
  }

  return {
    saveClient,
    newClient,
    deletedClient,
    selectClient,
    getAll,
    showTable,
    client,
    clients,
    tableVisible, 
  };
}
