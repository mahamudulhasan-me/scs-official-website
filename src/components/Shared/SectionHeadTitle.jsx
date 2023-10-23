const SectionHeadTitle = ({ title }) => {
  return (
    <p className="flex items-center gap-2  text-primary uppercase font-semibold tracking-widest">
      <span className="w-10 h-1 bg-primary"></span> {title}
    </p>
  );
};

export default SectionHeadTitle;
