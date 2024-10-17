import ExperienceProComponent from "@/components/ExperienceProComponent";
import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default function resume() {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-100 min-h-screen">
      <NavbarComponent />

      <div className="flex flex-col sm:w-2/3 sm:mx-auto lg:w-1/2 bg-slate-900 shadow-xl p-8 gap-8">
        <div className="flex flex-col-reverse gap-3 lg:flex-row lg:gap-0 lg:justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2">
              Concepteur Développeur d'Application
            </h1>
            <p>🌴 Rivière Florent, 32 ans</p>
            <p>📌 Île de La Réunion (974)</p>
            <p>📧 florent.rve@gmail.com</p>
          </div>

          <img src="/me.png" className="h-36 w-36 self-center" />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Langues</h2>
          <div>
            <ul>
              <li>🇫🇷 Français</li>
              <li>🇬🇧 Anglais</li>
              <li>🇷🇪 Créole (La Réunion)</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Technologies</h2>
          <div className="flex flex-col border-green-200 border-2 rounded-xl px-2 bg-slate-800">
            <ul className="list-disc p-3 flex flex-col gap-1">
              <li>
                <span className="font-bold text-green-500">Frontend:</span>{" "}
                JavaScript, Typescript, React, Next.js, TailwindCSS,
                DaisyUi/Shadcn/primereact
              </li>
              <li>
                <span className="font-bold text-green-500">Backend:</span>{" "}
                Adonis.js, Strapi, Node.js, Symfony (PHP), APIs, Express.js,
                MongoDB, MySQL
              </li>
              <li>
                <span className="font-bold text-green-500">Mobile:</span> React
                Native, Flutter{" "}
              </li>
              <li>
                <span className="font-bold text-green-500">Autres:</span>{" "}
                Docker, Git, Vercel, Git Action, Wordpress, Divi{" "}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">
            Expérences professionnelles
          </h2>

          <div className="flex flex-col gap-3">
            <ExperienceProComponent
              poste="Concepteur développeur d'application (alternance)"
              du="05/10/2023"
              au="30/09/2024"
              localisation="Saint-denis (La Réunion)"
              entreprise="SODIPARC"
              description="J'ai effectué une année d'alternance dans l'entreprise SODIPARC pour la préparation de mon titre CDA. Durant cette année j'ai pu concevoir de zéro des applications vouées à être déployés en interne. La technologie principale utilisé était Symfony."
              mission1="- Concevoir des applications répondant aux besoins des services de l'entreprise"
              mission2="- Adapter la logique métier des applications pour correspondre à la demande"
              mission3="- Déployer les applications sur un serveur en intranet"
            />
            <ExperienceProComponent
              poste="Technicien réseau et déploiement"
              du="01/10/2018"
              au="01/12/2019"
              localisation="Toulouse"
              entreprise="Manpower"
              description="Diverses missions d'intérim dans le domaine du réseau et télécom"
              mission1="- Dépannage et assistance utilisateurs"
              mission2="- Déploiement à distance"
              mission3="- Installation de postes et logiciels"
            />
            <ExperienceProComponent
              poste="Militaire"
              du="05/04/2011"
              au="05/04/2016"
              localisation="Le Valdahon"
              entreprise="Armée de terre"
              description="Engagé volontaire dans l'armée de terre durant 5 ans."
              mission1=""
              mission2=""
              mission3=""
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Diplôme</h2>
          <div className="border-l-4 border-l-green-600 pl-2">
            <ul>
              <li>🎓 Concepteur Développeur d'applications (Osipro)</li>
              <li>🎓 Développeur web et mobile (Openclassrooms)</li>
              <li>🎓 Technicien réseau et télécom (Adrar)</li>
            </ul>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
