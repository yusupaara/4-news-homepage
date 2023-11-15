import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import menuClose from "../images/icon-menu-close.svg";

const navigation = [
  { name: "Home", href: "#" },
  { name: "New", href: "#" },
  { name: "Popular", href: "#" },
  { name: "Trending", href: "#" },
  { name: "Categories", href: "#" },
];

export default function Sidebar({ isopen, closemenu }) {
  return (
    <>
      <Transition appear show={isopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closemenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 grayscale backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed top-0 right-0 w-2/3 h-full bg-secondary-ofwhite z-50 shadow-xl transition-all">
              <div className="flex justify-end p-11">
                <img
                  src={menuClose}
                  alt="menu-close"
                  onClick={closemenu}
                  className="w-9 hover:cursor-pointer"
                />
              </div>
              <div className="flex flex-col space-y-5 px-7 pt-[10vh] h-full justify-start">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-secondary-vdrblue font-inter text-xl hover:text-primary-red transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
