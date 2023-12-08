"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosInformationCircle } from "react-icons/io";
import { FaReddit } from "react-icons/fa";

import { links } from "./links";

const styles = {
  iconName:
    "text-xl font-semibold whitespace-nowrap dark:text-white ml-3 font-body",
  navElement: "block py-2 pr-4 pl-3 text-white hover:text-blue-400 rounded ",
  navSomething:
    "block py-2 pr-4 pl-3 text-[#BBF7D0] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700",
  connectButton:
    "text-[#BBF7D0] bg-white hover:bg-gray-100 border-2 border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inLinkne-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 mr-2 mb-2 shadow shaadow-lg shadow-gray-400",
  button:
    "items-center w-300 h-10 flex text-gray-900 bg-white hover:bg-gray-100 border-2 border-gray-200 focus:ring-4 focus:ring-gray-100 rounded-xl text-sm px-5 py- text-center inLinkne-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 mr-2 mb-2 shadow  shadow-gray-400",
};

const NavElement = ({ href, name }: any) => {
  const router = useRouter();
  //   const active = router.asPath === href;

  return (
    <Link href={href} className={styles.navElement} aria-current="page">
      {name}
    </Link>
  );
};

const Navbar = () => {
  const router = useRouter();
  return (
    <footer className="p-4 bg-black sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <div className="m-4">
            <Link href="/" className="flex place-items-center">
              <div className="grid grid-cols-2 align-middle">
                <div className=" align-center text-xl font-semibold whitespace-nowrap m-4 text-white">
                  Cantonese Jyutcitzi Converter | 漢字粵切字轉換器 ｜ {" "}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="https://flowbite.com" target="_blank" className="hover:underline">Apocrypha</Link>. All Rights Reserved.
        </span> */}
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Twitter */}
            <Link
              href={links.twitter}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5 fill-white hover:fill-blue-400"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            {/* Github */}
            <Link
              href={links.github}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5 fill-white hover:fill-blue-400"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Telegram */}
            <Link
              href={links.telegram}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5 fill-white hover:fill-blue-400"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* Jyutcitzi */}
            <Link
              href={links.information}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <IoIosInformationCircle className="w-5 h-5 fill-white hover:fill-blue-400" />
            </Link>

            {/* Reddit */}
            <Link
              href={links.reddit}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaReddit className="w-5 h-5 fill-white hover:fill-blue-400" />
            </Link>
          </div>
        </div>
      </div>
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </footer>
  );
  // const router = useRouter();

  // return (
  //   <nav className="bg-black px-2 sm:px-4 py-2.5 rounded ">
  //     <div className="flex items-center">
  //       <div className="m-4">
  //         <Link href="/" className="flex place-items-center">
  //           <div className="grid grid-cols-2 align-middle">
  //             <div className=" align-center text-xl  font-semibold whitespace-nowrap m-4 ">
  //               Cantonese Jyutcitzi Converter | 漢字粵切字轉換器 ｜ {" "}
  //             </div>
  //           </div>
  //         </Link>
  //       </div>

  //       <div className="flex-grow m-4"></div>

  //       <div className="hidden w-full md:block md:w-auto " id="navbar-default">
  //         <ul className="flex flex-cols place-items-center p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //           <NavElement href={"/"} name={"Home"} />
  //           <Link href="/">
  //             <svg
  //               className="w-5 h-5 fill-white hover:fill-blue-400"
  //               viewBox="0 0 24 24"
  //               aria-hidden="true"
  //             >
  //               <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
  //             </svg>
  //           </Link>
  //           <Link
  //             href="https://t.me/oxcanto"
  //             className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
  //           >
  //             <svg
  //               className="w-5 h-5 fill-white hover:fill-blue-400"
  //               viewBox="0 0 24 24"
  //               aria-hidden="true"
  //             >
  //               <path
  //                 fillRule="evenodd"
  //                 d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"
  //                 clipRule="evenodd"
  //               />
  //             </svg>
  //           </Link>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default Navbar;
