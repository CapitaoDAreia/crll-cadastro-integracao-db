interface EntryProps {
  label: string;
  type: "text" | "number";
  value?: string | number;
  isReadonly?: boolean;
  className?: string;
  changedValue?: (value: any) => void;
}

export default function Entry(props: EntryProps) {
  return (
    <div
      className={`
        flex flex-col
        ${props.className}
    `}
    >
      <label className="mb-4">{props.label}</label>
      <input
        readOnly={props.isReadonly}
        type={props.type}
        value={props.value}
        onChange={(e) => props.changedValue?.(e.target.value)}
        className={`
            border border-blue-900 rounded-lg
            focus:outline-none bg-gray-100 px-4 py-2
            ${props.isReadonly ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
}
