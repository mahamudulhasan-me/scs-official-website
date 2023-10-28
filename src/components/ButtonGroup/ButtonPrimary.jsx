"use client";

const ButtonPrimary = ({ children }) => {
  return (
    <button class="bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-bold py-3 px-6 rounded-md shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
      {children}
    </button>
  );
};

export default ButtonPrimary;
