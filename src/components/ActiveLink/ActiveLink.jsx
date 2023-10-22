"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ to, children }) => {
  const pathName = usePathname();
  const isActive = pathName === to; // Check if the current path matches the link

  return (
    <li
      className={`${
        isActive ? "text-primary ease-linear" : "hover:text-primary"
      }  transition-colors hover:duration-300 ease-out hover:ease-in`}
    >
      <Link href={to}>{children}</Link>
    </li>
  );
};

export default ActiveLink;
