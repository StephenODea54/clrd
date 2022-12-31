interface HyperlinkProps {
  url: string;
  text: string;
  color: "red" | "lime" | "sky";
};
  
const Hyperlink = ({ url, text, color }: HyperlinkProps) => {
  let className = "";

  if (color === "red") {
    className = "text-red-600 no-underline hover:text-red-300";
  } else if (color === "lime") {
    className = "text-lime-600 no-underline hover:text-lime-300"
  } else {
    className = "text-sky-600 no-underline hover:text-sky-300"
  }

  return(
    <a href={url}>
      <span className={className}>
        {text}
      </span>
    </a>
  );
};

export default Hyperlink;
