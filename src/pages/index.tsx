import React from "react";

import Table from "../components/Table";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Form from "../components/Form";
import useClient from "../hooks/useClient";

export default function Home() {
  const {
    selectClient,
    deletedClient,
    newClient,
    saveClient,
    showTable,
    client,
    clients,
    tableVisible,
  } = useClient();

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-900 to-black
      text-white
    `}
    >
      <Layout title="CRUD | Cadastro">
        {tableVisible  ? (
          <>
            <Button onClick={() => newClient()} color="darkblue">
              Novo Cliente
            </Button>
            <Table
              clients={clients}
              selectedClient={selectClient}
              deletedClient={deletedClient}
            ></Table>
          </>
        ) : (
          <Form
            changedClient={saveClient}
            client={client}
            cancel={showTable}
          />
        )}
      </Layout>
    </div>
  );
}
