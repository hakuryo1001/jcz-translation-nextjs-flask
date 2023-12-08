"use client"; // This is a client component 👈🏽

import Image from "next/image";
import Link from "next/link";
import Translator from "./components/translator";
import Dumb from "./components/dumb";

import InstantTranslator from "./components/instantTranslator";
import InstantChoicefulTranslator from "./components/instantChoicefulTranslator";
import ChoicefulTranslator from "./components/choicefulTranslator";

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
      <div className="flex justify-center">
        {/* <Image
          src="/hakuryo_signature_final_white.png"
          alt="Vercel Logo"
          width={72}
          height={16}
        /> */}
      </div>

      <div className="flex flex-col">
        <InstantChoicefulTranslator />
        {/* <Dumb /> */}
        {/* <div>
          咁都係果啲嘢㗎啦，廿鯪蚊個餐又湯又剩唔通有得你食天九翅咩？求求其其有啲肉有啲菜蛋白質澱粉質撈撈埋埋打個白汁茄汁黑椒汁咁撐得你懵口懵面咪纍返去返工返學返廠返寫字樓囉。唔係你估真係搵餐晏仔咁簡單啊。咁跟飯定跟意粉啊？
        </div> */}

        {/* <Translator /> */}
        {/* <div> Choiceful translator </div> */}
        {/* <ChoicefulTranslator /> */}
        {/* <InstantTranslator /> */}
      </div>
      <div></div>
    </main>
  );
}
