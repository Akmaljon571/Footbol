import Image from "next/image";
import { useEffect, useState } from "react";
import logo from '../public/logo.svg'
import vector from '../public/Vector.svg'
import uzb from '../public/uzb.png'
import ru from '../public/ru.svg'
import eng from '../public/eng.png'


export default function Navbar() {
    // let tokenTil = localStorage.getItem("tokenTil")
    
    const [tillar, setTillar] = useState("uz")

    useEffect(() => {
       localStorage.setItem("tokenTil", JSON.stringify(tillar))
    }, [tillar])


    return (
        <div className="navbar">
            <div className="container ctn">
                <ul>
                    <li>
                        <a href="/home">
                            <Image src={logo}></Image>
                        </a>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <a href={"/home"}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href={"/product"}>
                                Product
                                </a>
                            </li>
                            <li>
                                About us
                                <Image className="cursor-pointer " src={vector} alt="vector" />
                            </li>
                            <li>
                                <a href={"/contact"}>
                                Contact
                                </a>
                            </li>
                            <li>
                                <a href={"/mijoz"}>
                                Mijozlarimiz fikrlari 
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <Image width={20} height={20} src={tillar == "uz" ? uzb : tillar == "ru" ? ru : tillar == "en" ? eng : uzb }></Image>
                    <p>{tillar == "uz" ? "Uzb" : tillar == "ru" ? "Rus" : tillar == "en" ? "Eng" : "Uzb" }</p>
                    <Image className="cursor-pointer " src={vector} alt="vector" />
                    </li> 
                </ul>
            </div>
        </div>
    );
}