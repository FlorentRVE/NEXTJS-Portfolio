import ExperienceProComponent from "@/components/ExperienceProComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default function resume() {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-100 min-h-screen">
      <NavbarComponent />

      <div className="flex flex-col w-1/2 mx-auto bg-slate-900 shadow-xl p-8 gap-8">
        <h1 className="text-3xl font-bold">
          Concepteur Développeur d'Application
        </h1>

        <div className="flex flex-col">
          <p>🌴 Rivière Florent, 32 ans</p>
          <p>📌 Île de la réunion (974)</p>
          <p>📧 florent.rve@gmail.com</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Langues</h2>
          <div className="">
            <ul className="">
              <li>🇫🇷 Français</li>
              <li>🇬🇧 Anglais</li>
              <li>🇷🇪 Créole (La Réunion)</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Technologie</h2>
          <div className="flex flex-col border-green-200 border-2 rounded-xl px-2 bg-slate-800">
            <ul className="list-disc p-3 flex flex-col gap-1">
              <li>
                Frontend: JavaScript, Typescript, React, Nextjs, TailwindCSS,
                DaisyUi
              </li>
              <li>
                Backend: Node, Symfony (PHP), Adonis, Strapi, APIs, Express,
                MongoDB, MySQL
              </li>
              <li>Mobile: React Native (prochainement), Flutter </li>
              <li>Autres: Docker, Git, Vercel, Git Action, Wordpress </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Expérence professionnelle</h2>

          <div className="flex flex-col gap-3">
            <ExperienceProComponent />
            <ExperienceProComponent />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div className="border-l-4 border-l-green-600 h-10 flex items-center pl-2">
            <ul className="list-disc p-3">
              <li>Bac</li>
              <li>etc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
