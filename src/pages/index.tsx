import React, { useEffect } from "react";

import Table from "../components/Table";
import Cliente from "../core/Cliente";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Form from "../components/Form";
import ClientRepository from "../core/RepoClient";
import ColectionClient from "../backend/db/ColectionClient";

export default function Home() {

  const repo: ClientRepository = new ColectionClient()

  const [display, setDisplay] = React.useState<"table" | "form">("table");
  const [client, setClient] = React.useState<Cliente>(Cliente.empty());
  const [clients, setClients] = React.useState<Cliente[]>([]);

  useEffect(getAll, [])
  
  function getAll(){
    repo.getAll().then((clients)=>{
      setClients(clients)
      setDisplay("table")
    })
  }

  function selectedClient(client: Cliente) {
    setClient(client);
    setDisplay("form");
    console.log(`${client.name} selecionado`);
  }

  async function deletedClient(client: Cliente) {
    await repo.delete(client)
    getAll()
  }

  async function saveClient(client: Cliente) {
    await repo.save(client)
    getAll()
  }

  function newClient(){
    setClient(Cliente.empty)
    setDisplay("form")
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-900 to-black
      text-white
    `}
    >
      <Layout title="CRUD | Cadastro">
        {display === "table" ? (
          <>
            <Button onClick={() => newClient()} color="darkblue">
              Novo Cliente
            </Button>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deletedClient={deletedClient}
            ></Table>
          </>
        ) : (
          <Form
            changedClient={saveClient}
            client={client}
            cancel={() => setDisplay("table")}
          />
        )}
      </Layout>
    </div>
  );
}
