"use client";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const hiddenClass = toggle ? "" : "hidden";

  const handleToggle = () => setToggle(!toggle);

  return (
    <aside
      className={`flex flex-col fixed top-0 bg-white ${
        toggle ? "h-screen w-screen" : "w-20"
      }`}
    >
      <header className="grid grid-cols-3 py-5 bg-transparent justify-items-center">
        <img
          src="https://www.muylinux.com/wp-content/uploads/2022/05/muylinux-small-logo.jpg"
          alt="imagen de Muy linux"
          className={`max-w-full h-auto col-start-2 ${hiddenClass}`}
        />
        <button
          className="pb-6 ml-12 mx-2 h-0 bg-transparent cursor-pointer rounded-2xl"
          onClick={handleToggle}
        >
          Sidebar
        </button>
      </header>

      <nav
        className={`flex flex-col justify-center items-center gap-6 ${hiddenClass}`}
      >
        <Link href="/#inicio" onClick={handleToggle}>
          INICIO
        </Link>
      </nav>

      <footer className={`flex h-screen flex-col justify-end ${hiddenClass}`}>
        <p className={`text-center ${hiddenClass}`}>CONECTA CON NOSOTROS</p>
        <ul className={`mx-auto text-center flex gap-2 py-8 ${hiddenClass}`}>
          <li>
            <a href="https://www.facebook.com/muylinux?fref=ts" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com/muylinux" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://t.me/muylinux" target="_blank">
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://recursos-tpnet.es/landing/muylinux-suscripcion"
              target="_blank"
            >
              Tpnet
            </a>
          </li>
          <li>
            <a href="https://www.muylinux.com/feed/" target="_blank">
              Feed
            </a>
          </li>
        </ul>
      </footer>
    </aside>
  );
}
