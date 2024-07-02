import { loading } from "../assets";

const Generate = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 text-base ${className}`}
    >
      <img src={loading} alt=" loading" className="w-5 h-5 mr-3" />
      Generating
    </div>
  );
};

export default Generate;
