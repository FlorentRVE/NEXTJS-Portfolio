"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarComponent() {
  const router = usePathname();

  return (
    <div className="bg-slate-950 h-16">

      <div className="flex justify-between items-center md:w-1/2 mx-auto h-16 px-4">

        <Link href="/">
          <img src="/logo_rve.png" className="h-14 w-14" />
        </Link>

        <div className="flex gap-4 font-bold">
          
          {router === "/" ? (
            <Link href="/" className="border-b-4 border-b-green-500">
              Accueil
            </Link>
          ) : (
            <Link href="/">Accueil</Link>
          )}

          {router === "/projet" ? (
            <Link href="/projet" className="border-b-4 border-b-green-500">
              Projet
            </Link>
          ) : (
            <Link href="/projet">Projet</Link>
          )}

          {router === "/blog" ? (
            <Link href="/blog" className="border-b-4 border-b-green-500">
              Blog
            </Link>
          ) : (
            <Link href="/blog">Blog</Link>
          )}
          
          {router === "/cv" ? (
            <Link href="/cv" className="border-b-4 border-b-green-500">
              CV
            </Link>
          ) : (
            <Link href="/cv">CV</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
