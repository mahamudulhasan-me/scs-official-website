const SectionHeadTitle = ({ title }) => {
  return (
    <div className="flex items-center  gap-2  text-primary uppercase font-semibold">
      <div className="flex flex-col gap-1 items-end">
        <span className="w-6 h-0.5 bg-primary"></span>
        <span className="w-10 h-0.5 bg-primary"></span>
      </div>
      {title}
    </div>
  );
};

export default SectionHeadTitle;
