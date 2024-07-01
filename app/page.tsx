import NavbarComponent from "@/components/NavbarComponent";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-slate-800 text-slate-100">

      <NavbarComponent />
      
      <div className="flex flex-col w-1/2 mx-auto h-screen bg-slate-900 shadow-xl p-8 gap-8">


        <h1 className="text-3xl font-bold">
          Concepteur Développeur d'Application
        </h1>

        <div className="border-l-4 border-l-green-600">
          <p>
            🌴 Bienvenue, je suis un développeur basé à l'île de la
            réunion.
          </p>
        </div>

        <div className="flex flex-col border-pink-100 border-2 rounded-xl p-4">
          <p>Presentation</p>
          <p>skills</p>
        </div>
      </div>
    </div>
  );
}
