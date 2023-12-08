"use client"; // This is a client component 👈🏽

import Image from "next/image";
import Link from "next/link";
import InstantChoicefulTranslator from "./components/instantChoicefulTranslator";

const s = {
  main: "min-h-full p-4 grid grid-cols-1 rounded-lg m-4 p-4 font-jcz",
  title: "text-5xl text-center font-underline",
  title2:
    "text-3xl text-center font-underline leading-loose text-[5eead4] hover:text-green-400",
  description: "text-center m-10 text-[#bbf7d0]",
  grid: "m-1 p-1 border-8 border-black grid grid-cols-2 gap-4 ",
  card: "m-8 max-w-0.5 grid grid-col-2 border-2 border-[#6ee7b7] hover:border-blue-400 ease-in duration-100 m-4 p-4  text-start rounded-lg",
  line1: "leading-7 text-2xl m-6",
  line2: "leading-7 text-xl lg:text-md 2m-4",
};

export default function Home() {
  return (
    <main>
      <div className="m-7 p-7">
        <div className={s.title}></div>
        <div className="m-4 p-10 text-center">
          粵語，悲乃一無文學、無哲學、無科學的語言。何解我等受盡此等的文學貧況呼？唉，無非乃我地冇自己嘅文字噉解。
        </div>
      </div>
      <div className="flex justify-center"></div>

      <div className="flex flex-col">
        <InstantChoicefulTranslator />
      </div>
    </main>
  );
}
