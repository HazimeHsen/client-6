import React from "react";
import { BsWhatsapp, BsInstagram, BsTiktok } from "react-icons/bs";

const Socials = [
  {
    title: "Whatsapp",
    icon: BsWhatsapp,
    link: "#",
  },
  {
    title: "TikTok",
    icon: BsInstagram,
    link: "#",
  },
  {
    title: "Instagram",
    icon: BsTiktok,
    link: "#",
  },
];
const Footer = () => {
  return (
    <footer className="relative">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between ">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Ruby
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {Socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="text-gray-500 hover:text-primary ">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
