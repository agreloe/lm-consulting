import React, { useState } from "react";
import LMConsultingShape from "../img/SVG/LMConsultingShape.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(!toggle);

    if (document.body.classList.contains("opacity")) {
      document.body.classList.remove("opacity");
    } else {
      document.body.classList.add("opacity");
    }
  };

  const closeMenu = () => {
    setToggle(false);
    if (document.body.classList.contains("opacity")) {
      document.body.classList.remove("opacity");
    }
  };

  return (
    <header className={`${styles.header}`}>
      <nav className="py-2 px-4 flex justify-between min-h-[80px]">
        <Link href="/" className="flex items-center gap-4">
          <Image src={LMConsultingShape} width={70} height={70} alt="/"></Image>
          <p className={`${styles.logo}`}>LM Consulting</p>
        </Link>
        <button
          id="button"
          onClick={openMenu}
          className={`${!toggle ? "" : styles.open}`}
        >
          <span></span>
        </button>
        <ul
          className={`flex items-center gap-4 ${!toggle ? "" : styles.active}`}
        >
          <li>
            <Link href={"/#nosotros"} onClick={closeMenu}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link href={"/#servicios"} onClick={closeMenu}>Servicios</Link>
          </li>
          <li>
            <Link href={"/#elegirnos"} onClick={closeMenu}>¿Por qué elegirnos?</Link>
          </li>
          <li>
            <Link href={"/#contacto"} onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
