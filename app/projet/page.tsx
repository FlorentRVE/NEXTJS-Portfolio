import NavbarComponent from "@/components/NavbarComponent";
import Link from "next/link";

export default function projet() {
  return (
    <div className="flex flex-col h-screen bg-slate-800 text-slate-100">
      <div className="flex flex-col gap-4 w-2/3 mx-auto h-screen bg-slate-900 shadow-xl p-8">
        <NavbarComponent />

        <h1 className="text-3xl font-bold text-center">Projet</h1>

        <div className="flex flex-col border-pink-100 border-2 rounded-xl p-4">
          <p>Projet1</p>
          <p>Projet2</p>
        </div>

      </div>
    </div>
  );
}
