import React from "react";
import { TrashIcon, EditIcon } from "../assets/icons";
import Client from "../core/Cliente";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  deletedClient?: (client: Client) => void;
}

export default function Table(props: TableProps) {

  const showActions = props.deletedClient || props.selectedClient

  function handleRenderHeader() {
    return (
      <tr>
        <th className={`text-left p-5`}>Código</th>
        <th className={`text-left p-5`}>Nome</th>
        <th className={`text-left p-5`}>Idade</th>
        {showActions ? <th className={`p-4`}>Actions</th> : false}
      </tr>
    );
  }

  function handleRenderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-blue-300" : "bg-blue-200"}`}
        >
          <td className="text-left p-5">{client.id}</td>
          <td className="text-left p-5">{client.name}</td>
          <td className="text-left p-5">{client.age}</td>
          {showActions ? handleRenderActions(client) : false}
        </tr>
      );
    });
  }

  function handleRenderActions(client: Client) {
    return (
      <td className={`flex justify-center`}>
        {props.selectedClient ? (
          <button
          onClick={()=> props.selectedClient?.(client)}
            className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-green-100`}
          >
            {EditIcon}
          </button>
        ) : (
          false
        )}

        {props.deletedClient ? (
          <button
          onClick={()=> props.deletedClient?.(client)}
            className={`flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-red-100`}
          >
            {TrashIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table
      className={`
        w-full rounded-xl overflow-hidden
      `}
    >
      <thead
        className={`
            text-white
            bg-gradient-to-r from-blue-900 to-black
            
            `}
      >
        {handleRenderHeader()}
      </thead>

      <tbody>{handleRenderData()}</tbody>
    </table>
  );
}
