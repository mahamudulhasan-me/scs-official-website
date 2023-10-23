import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import ActiveLink from "../ActiveLink/ActiveLink";
import ButtonOutline from "../ButtonGroup/ButtonOutline";
import ButtonPrimary from "../ButtonGroup/ButtonPrimary";

const Header = () => {
  return (
    <>
      <div className="bg-violet-600 text-white px-[10%] py-1">
        <div className="flex items-center gap-5">
          <p className="flex items-center gap-1">
            <HiPhone size={22} color="#ed502e" /> <span>09612003003</span>
          </p>
          <p className="flex items-center gap-1">
            <HiOutlineMail size={22} color="#ed502e" />
            <span>admin@sundarbancourier.com.bd</span>
          </p>
        </div>
      </div>
      <nav className="bg-gray-800 text-white py-2 px-[10%]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/scs-logo.png"
              alt="SCS"
              width={60}
              height={60}
            />
          </Link>
          <div className="flex items-center gap-10">
            <ul className="flex gap-4">
              <ActiveLink to="/">Home</ActiveLink>
              <ActiveLink to="/about">About Us</ActiveLink>
              <ActiveLink to="/services">Services</ActiveLink>
              <ActiveLink to="/contact">Contact</ActiveLink>
              <ActiveLink to="/Contact">Support</ActiveLink>
            </ul>

            <div className="space-x-4">
              <Link href="/">
                <ButtonOutline />
              </Link>
              <Link href="/">
                <ButtonPrimary />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
