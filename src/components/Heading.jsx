import TagLine from "./TagLine";

const Heading = ({ className, title, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <TagLine className="md:justify-center mb-4">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
