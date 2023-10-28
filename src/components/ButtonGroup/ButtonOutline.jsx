"use client";

const ButtonOutline = ({ children }) => {
  return (
    <button
      class="relative text-slate-900 shadow-[0px_0_15px_rgb(237,80,46)]  font-semibold px-8 py-3 rounded-md bg-white isolation-auto z-10 border-2 border-primary
    before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-primary  before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
