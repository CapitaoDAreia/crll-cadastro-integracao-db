import React from "react";

import Table from "../components/Table";
import Cliente from "../core/Cliente";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Form from "../components/Form";

export default function Home() {
  const [display, setDisplay] = React.useState<"table" | "form">("table");
  const [client, setClient] = React.useState<Cliente>(Cliente.empty());

  const clients = [
    new Cliente("Igor", 24, "01"),
    new Cliente("Bia", 25, "02"),
    new Cliente("Carlos", 26, "03"),
    new Cliente("Pedro", 27, "04"),
  ];

  function selectedClient(client: Cliente) {
    setClient(client);
    setDisplay("form");
    console.log(`${client.name} selecionado`);
  }

  function deletedClient(client: Cliente) {
    console.log(`${client.name} deletado`);
  }

  function saveClient(client: Cliente) {
    console.log(client);
    setDisplay("table");
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
            <Button onClick={() => newClient()} color="blue">
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
