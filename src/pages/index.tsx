import Table from "../components/Table";
import Cliente from "../core/Cliente";
import Layout from "../components/Layout";

export default function Home() {
  
  const clients = [
    new Cliente('Igor', 24, '01'),
    new Cliente('Bia', 25, '02'),
    new Cliente('Carlos', 26, '03'),
    new Cliente('Pedro', 27, '04'),
  ]

  function selectedClient(client: Cliente){
    console.log(`${client.name} selecionado`)
  }

  function deletedClient(client: Cliente){
    console.log(`${client.name} deletado`)
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
        <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient} ></Table>
      </Layout>
    </div>
  );
}
