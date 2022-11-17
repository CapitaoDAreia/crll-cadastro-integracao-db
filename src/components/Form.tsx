import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import Entry from "./Entry";

interface FormProps {
  client: Cliente;
  cancel?: () => void;
  changedClient?: (client: Cliente) => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? "");

  return (
    <div>
      {id ? (
        <Entry
          className="mb-5"
          label="Código"
          type="text"
          value={id}
          isReadonly={true}
        />
      ) : (
        false
      )}
      <Entry
        className="mb-5"
        type="text"
        label="Nome"
        value={name}
        changedValue={setName}
      />
      <Entry type="text" label="Idade" value={age} changedValue={setAge} />

      <div className="flex justify-end mt-2">
        <Button
          onClick={() => props.changedClient?.(new Cliente(name, +age, id))}
          color="green"
          className="mr-2"
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.cancel} color="red">
          Cancelar
        </Button>
      </div>
    </div>
  );
}
