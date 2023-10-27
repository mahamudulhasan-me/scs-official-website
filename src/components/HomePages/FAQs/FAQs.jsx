"use client";
import SectionHeadTitle from "@/components/Shared/SectionHeadTitle";
import Image from "next/image";
import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import AccordionItem from "./AccordionItem";
import "./FaqItem.css";
const faqs = [
  {
    id: 1,
    header: "What is Lorem Ipsum?",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    id: 2,
    header: "Where does it come from?",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: "Why do we use it?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header: "Where can I get some?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
  {
    id: 5,
    header: "Where can I get some?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];
const FAQs = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <div className="px-[5%] relative mt-28 mb-20 grid grid-cols-12 gap-20 justify-center items-start">
      <div className="col-span-7">
        <SectionHeadTitle title={"FAQs"} />
        <h1 className="text-4xl">Frequently Asked Questions</h1>
        <div className="mt-5 mb-5">
          <div className="card">
            {faqs.map((faq, index) => {
              return (
                <AccordionItem
                  key={index}
                  active={active}
                  handleToggle={handleToggle}
                  faq={faq}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-span-5 border relative w-full h-fit bg-white">
        <div className="absolute animation-container bg-primary -left-16 top-4 px-4 py-3 rounded-lg text-white  z-20">
          <p className="text-lg tracking-widest ">For More Information</p>
          <h4 className="text-2xl flex items-center gap-2">
            <BiSolidPhoneCall /> 09612003003
          </h4>
        </div>
        <Image
          src="/images/FAQs.gif"
          alt="FAQs"
          width={500}
          height={500}
          className=""
        />
        {/* <Image
          src="/images/24_7_service2.svg"
          alt="FAQs"
          width={500}
          height={500}
          className="w-1/2 absolute -left-10 -bottom-10 z-20"
        /> */}
      </div>
    </div>
  );
};

export default FAQs;
