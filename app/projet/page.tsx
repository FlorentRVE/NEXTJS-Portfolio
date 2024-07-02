import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import ProjetComponent from "@/components/ProjetComponent";

export default function projet() {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-100 min-h-screen">
      <NavbarComponent />

      <div className="flex flex-col md:w-2/3 md:mx-auto lg:w-1/2 bg-slate-900 shadow-xl p-8 gap-8 min-h-screen">
        <h1 className="text-3xl font-bold">Projets</h1>

        <div className="border-l-4 border-l-green-600 h-10 flex items-center pl-2">
          <p>⚒️ Retrouvez ici mes projets</p>
        </div>

        <div className="flex flex-col gap-3">
          <ProjetComponent
            image="/me.png"
            titre="titre du projet"
            description="une description du projet"
            stack="React, Tailwind, Next.js, Github"
            lienGitHub="https://github.com/FlorentRVE/exoCandidat?tab=readme-ov-file"
          />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
