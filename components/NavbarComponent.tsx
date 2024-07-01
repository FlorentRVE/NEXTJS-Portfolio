"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarComponent() {
  const router = usePathname();

  return (
    <div className="bg-slate-950 h-14">

      <div className="flex justify-between items-center w-1/2 mx-auto h-14 px-4">

        <p className="text-xl font-extrabold text-yellow-500">LOGO</p>

        <div className="flex gap-4">
          {router === "/" ? (
            <Link href="/" className="border-b-2 border-b-yellow-500">
              Accueil
            </Link>
          ) : (
            <Link href="/">Accueil</Link>
          )}

          {router === "/projet" ? (
            <Link href="/projet" className="border-b-2 border-b-yellow-500">
              Projet
            </Link>
          ) : (
            <Link href="/projet">Projet</Link>
          )}

          {router === "/resume" ? (
            <Link href="/resume" className="border-b-2 border-b-yellow-500">
              Resume
            </Link>
          ) : (
            <Link href="/resume">Resume</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
