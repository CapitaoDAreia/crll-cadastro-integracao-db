import Layout from "./api/components/Layout";

export default function Home() {
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-900 to-black
      text-white
    `}
    >
      <Layout title="CRUD | Cadastro">
        <div>Content</div>
      </Layout>
    </div>
  );
}
