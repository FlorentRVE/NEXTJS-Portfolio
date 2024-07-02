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
            image="/projet/so_rh.png"
            titre="SO RH"
            description="Une application web permettant aux employés d'échanger plus rapidement avec le bureau RH via formulaire"
            stack="Symfony, TailwindCSS, Github, Docker, MYSQL"
            lienGitHub="https://github.com/FlorentRVE/Projet_So_rh"
          />
          <ProjetComponent
            image="/projet/faq.png"
            titre="FAQ"
            description="Une FAQ en intranet pour les employés d'un centre d'appels"
            stack="Symfony, TailwindCSS, Github, Docker, MYSQL"
            lienGitHub="https://github.com/FlorentRVE/Projet_faq"
          />
          <ProjetComponent
            image="/projet/musclebuster.png"
            titre="MuscleBuster"
            description="Un exercice de site ecommerce de vente de complément alimentaire"
            stack="React, TailwindCSS, Symfony, Github, StripeAPI, MongoDB"
            lienGitHub="https://github.com/FlorentRVE/MuscleBuster"
          />
          <ProjetComponent
            image="/projet/lakaz.png"
            titre="Recette Lakaz"
            description="Application visant à regrouper des recettes de cuisine triées par catégorie"
            stack="React, TailwindCSS, Symfony, Github, MYSQL"
            lienGitHub="https://github.com/FlorentRVE/Lakaz?tab=readme-ov-file"
          />
          <ProjetComponent
            image="/projet/python_chatroom.png"
            titre="Python Chatroom"
            description="Création d'une chatroom avec le langage python et socket.io"
            stack="Python, Socket.io, Github"
            lienGitHub="https://github.com/FlorentRVE/PythonChatRoom"
          />
          <ProjetComponent
            image="/projet/kanap.png"
            titre="Kanap"
            description="Exercice création front d'un site ecommerce de canap en Javascript"
            stack="Html, CSS, JS, Github"
            lienGitHub="https://github.com/FlorentRVE/OC_projet5/tree/projet_5"
          />
          <ProjetComponent
            image="/projet/ohmyfood.png"
            titre="Oh my food"
            description="Exercice frontend d'un site de recherche de restaurants"
            stack="Html, SCSS, Github"
            lienGitHub="https://github.com/FlorentRVE/OC_projet3"
          />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
