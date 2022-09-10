import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../public/logo.svg";
import vector from "../public/Vector.svg";
import uzb from "../public/uzb.png";
import ru from "../public/ru.svg";
import eng from "../public/eng.png";
import shop from "../public/ShoppingBag.svg";
import Link from "next/link";
import useTrans from 'next-translate/useTranslation';


export default function Navbar() {
    const { t: i18n } = useTrans();
    let ozbek
    if (i18n('lang:hello') === "Salom") {
         ozbek = "uz"
    } else if (i18n('lang:hello') === "Привет!") {
         ozbek = "ru"
    }
    const [tillar, setTillar] = useState(ozbek || "uz");
    const [drop, setDrop] = useState(false);
    const [til, setTil] = useState(false);
    
  return (
    <div className="bg-white navbar">
      <div className="container ctn">
        <ul className="flex items-center  justify-between">
          <li className="mt-6 mb-6">
            <a href="/home">
              <Image src={logo}></Image>
            </a>
          </li>
          <li>
            <ul className="flex relative items-center justify-between gap-16 font-medium">
              <li>
                <a className="hover:text-lime-400" href={"/home"}>
                {i18n('lang:home')}
                </a>
              </li>
              <li>
                <a className="hover:text-lime-400" href={"/product"}>
                {i18n('lang:tavar')}
                </a>
              </li>
              <li
                onClick={() => {setDrop(!drop)}}
                className="hover:text-lime-400 flex items-center cursor-pointer gap-3"
              >
                <p className="pb-1"> {i18n('lang:Biz')}</p>
                <Image className="cursor-pointer" src={vector} alt="vector" />
              </li>
              <li>
                <a className="hover:text-lime-400" href={"/contact"}>
                {i18n('lang:kantakt')}
                </a>
              </li>
              <li>
                <a className="hover:text-lime-400" href={"/mijoz"}>
                {i18n('lang:mijoz')}
                </a>
              </li>
              {drop && (
                <li className="absolute">
                  <ul className="flex w-56 p-7 flex-col top-2 left-56 absolute tam bg-white gap-6">
                    <li>
                      <a className="hover:text-lime-400" href="#">
                      {i18n('lang:Biz')}
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-lime-400" href="#">
                      {i18n('lang:Mahsulot')}
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-lime-400" href="#">
                      {i18n('lang:dastav')}
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-lime-400" href="#">
                      {i18n('lang:olcha')}
                      </a>
                    </li>
                    <li>
                      <a className="hover:text-lime-400" href="#">
                      {i18n('lang:Ism')}
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </li>
          <li
            onClick={() => setTil(!til)} className="flex items-center cursor-pointer ml-12 justify-between gap-2"
          >
            <Image
              width={20}
              height={20}
              src={
                tillar == "uz"
                  ? uzb
                  : ru
              }
            ></Image>
            <p>
              {tillar == "uz"
                ? "Uzb"
                : "Рус"}
            </p>
            <Image className="cursor-pointer " src={vector} alt="vector" />
          </li>
          {til && (
            <li className="absolute">
              <ul className="flex w-44 p-7 z-10 flex-col top-2 lef absolute tam  bg-white gap-5">
                <li onClick={() => setTillar("uz")}>
                  <a href={"/uz"} onClick={() => setTillar("uz")} className="flex gap-2">
                    <Image
                      width={24}
                      height={24}
                      src={uzb}></Image>
                    <p>Uzb</p>
                  </a>
                </li>
                <li onClick={() => setTillar("ru")}>
                  <a  href={'/ru'} onClick={() => setTillar("ru")}  className="flex gap-2">
                    <Image
                      width={26}
                      height={26}
                      src={ru}></Image>
                    <p>Rus</p>
                  </a>
                </li>
              </ul>
            </li>
          )}
          <li>
            <a
              className="flex cursor-pointer relative items-center justify-between gap-1"
              href="/karzinka"
            >
              <Image width={24} height={24} src={shop}></Image>
              <p> {i18n('lang:kashlok')}</p>
              <span className="absolute text-xs py-1 px-2 text-white rounded-full bg-green-500 d-block bottom-3 left-3">
                0
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
