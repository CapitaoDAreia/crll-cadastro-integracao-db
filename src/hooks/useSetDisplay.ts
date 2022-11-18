import { useState } from "react";

export default function useSetDisplay() {
  const [display, setDisplay] = useState<"table" | "form">("table");

  const showTable = () => setDisplay("table");
  const showForm = () => setDisplay("form");

  return {
    formVisible: display === "form",
    tableVisible: display === "table",
    showForm,
    showTable,
  };
}
