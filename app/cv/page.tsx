import ExperienceProComponent from "@/components/ExperienceProComponent";
import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";

export default function resume() {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-100 min-h-screen">
      <NavbarComponent />

      <div className="flex flex-col sm:w-2/3 sm:mx-auto lg:w-1/2 bg-slate-900 shadow-xl p-8 gap-8">
        <div className="flex flex-col-reverse items-center gap-3 lg:flex-row lg:gap-0 lg:justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-2">
              Concepteur Développeur d'Application
            </h1>
            <p>🌴 Rivière Florent, 32 ans</p>
            <p>📌 Île de La Réunion (974)</p>
            <p>📧 florent.rve@gmail.com</p>
          </div>

          <img src="/me.png" className="h-36 w-36" />
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
          <h2 className="text-2xl font-bold mb-2">Technologie</h2>
          <div className="flex flex-col border-green-200 border-2 rounded-xl px-2 bg-slate-800">
            <ul className="list-disc p-3 flex flex-col gap-1">
              <li>
                Frontend: JavaScript, Typescript, React, Next.js, TailwindCSS,
                DaisyUi
              </li>
              <li>
                Backend: Node.js, Symfony (PHP), Adonis.js, Strapi, APIs, Express.js,
                MongoDB, MySQL
              </li>
              <li>Mobile: React Native (prochainement), Flutter </li>
              <li>Autres: Docker, Git, Vercel, Git Action, Wordpress, Divi </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Expérence professionnelle</h2>

          <div className="flex flex-col gap-3">
            <ExperienceProComponent
              poste="Developeur Web"
              du="01/01/2022"
              au="01/01/2022"
              localisation="Saint-denis (La Réunion)"
              entreprise="Nom de l'entreprise"
              description="description de la mission"
              mission1="description de la mission"
              mission2="description de la mission"
              mission3="description de la mission"
            />
            <ExperienceProComponent
              poste="Developeur Web"
              du="01/01/2022"
              au="01/01/2022"
              localisation="Saint-denis (La Réunion)"
              entreprise="Nom de l'entreprise"
              description="description de la mission"
              mission1="description de la mission"
              mission2="description de la mission"
              mission3="description de la mission"
            />
            <ExperienceProComponent
              poste="Developeur Web"
              du="01/01/2022"
              au="01/01/2022"
              localisation="Saint-denis (La Réunion)"
              entreprise="Nom de l'entreprise"
              description="description de la mission"
              mission1="description de la mission"
              mission2="description de la mission"
              mission3="description de la mission"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div className="border-l-4 border-l-green-600 h-10 flex items-center pl-2">
            <ul>
              <li>🎓 Bac</li>
              <li>🎓 etc</li>
            </ul>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
