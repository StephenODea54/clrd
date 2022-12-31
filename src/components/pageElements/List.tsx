interface ListProps {
  elements: (string | JSX.Element)[];
};

const List = ({ elements }: ListProps) => {
  return(
    <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
      {elements.map(el => (
        <li className="relative pl-6 before:absolute before:top-[calc(50%-1px)] before:left-0 before:h-[2px] before:w-3 before:bg-slate-300">
          {el}
        </li>
      ))}
    </ul>
  );
};

export default List;
