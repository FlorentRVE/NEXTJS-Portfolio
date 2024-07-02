import CompetencesComponent from "@/components/CompetencesComponent";
import ExperienceComponent from "@/components/ExperienceComponent";
import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default function Home() {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-100">

      <NavbarComponent />

      <div className="flex flex-col md:w-2/3 md:mx-auto lg:w-1/2 bg-slate-900 shadow-xl p-8 gap-8">

        <h1 className="text-3xl font-bold">Concepteur Développeur d'Application</h1>

        <div className="border-l-4 border-l-green-600 h-10 flex items-center pl-2">
          <p>🌴 Bienvenue, je suis un développeur basé à l'île de la réunion</p>
        </div>

        <CompetencesComponent />

        <ExperienceComponent />


      </div>

      <FooterComponent />
    </div>
  );
}
