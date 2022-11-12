import Title from "./Title";

interface LayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export default function Layout(props: LayoutProps) {
  return (
    <div
      className={`
            flex flex-col w-2/3
            bg-white text-gray-800
            rounded-md
        `}
    >
      <Title>{props.title}</Title>
      <div
        className={`
        p-5
      `}
      >
        {props.children}
      </div>
    </div>
  );
}
