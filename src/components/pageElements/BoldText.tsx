interface BoldTextProps {
  text: string;
};

const BoldText = ({ text }: BoldTextProps) => {
  return(
    <span className="font-medium text-red-500">
      {text}
    </span>
  );
};

export default BoldText;
