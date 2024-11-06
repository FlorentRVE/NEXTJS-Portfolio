import FooterComponent from "@/components/FooterComponent";

export default function Privacy() {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-100">
      <div className="flex flex-col md:w-2/3 md:mx-auto lg:w-1/2 bg-slate-900 shadow-xl p-8 gap-8">
        <h1 className="text-3xl font-bold text-center">Règles de confidentialité</h1>

        <p>Dernière mise à jour : 06 novembre 2024</p>

        <div className="border-l-4 border-l-green-600 flex flex-col gap-4 pl-2">
          <section className="p-4 flex flex-col gap-2">
            <h2>Introduction</h2>
            <p>
              Bienvenue sur Batay Pump,votre vie privée est une
              priorité, et nous prenons au sérieux la protection de vos données
              personnelles.
            </p>
          </section>

          <section className="p-4 flex flex-col gap-2">
            <h2>Aucune Collecte de Données Utilisateur</h2>
            <p>
              Batay Pump est conçu pour fonctionner sans collecter, stocker ou
              partager vos données personnelles. Voici les détails :
            </p>
            <ul>
              <li>
                <strong>Pas de Collecte de Données Personnelles</strong>
                <p>
                  Nous ne collectons aucune information personnelle telle que :
                </p>
                <ul>
                  <li>Nom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Informations de localisation</li>
                  <li>Données financières</li>
                </ul>
              </li>
              <li>
                <strong>Pas de Suivi</strong>
                <p>
                  Batay Pump ne suit ni ne surveille vos activités à l'intérieur
                  ou à l'extérieur de l'application.
                </p>
              </li>
              <li>
                <strong>Pas de Partage de Données avec des Tiers</strong>
                <p>
                  Puisque nous ne collectons aucune donnée utilisateur, il n'y a
                  rien à partager avec des tiers.
                </p>
              </li>
              <li>
                <strong>Pas de Stockage de Données</strong>
                <p>
                  Aucune donnée personnelle ou comportementale n'est stockée sur
                  nos serveurs ou sur l'appareil de l'utilisateur.
                </p>
              </li>
            </ul>
          </section>

          <section className="p-4 flex flex-col gap-2">
            <h2>Utilisation de l'Application</h2>
            <p>
              Vous pouvez utiliser Batay Pump en toute tranquillité d'esprit,
              sachant que vos données restent privées et protégées.
            </p>
          </section>

          <section className="p-4 flex flex-col gap-2">
            <h2>Modifications de la Politique de Confidentialité</h2>
            <p>
              Nous nous réservons le droit de mettre à jour cette politique de
              confidentialité à tout moment. Si nous apportons des
              modifications, nous mettrons à jour la date de révision ci-dessus.
              Nous vous encourageons à consulter périodiquement cette page pour
              rester informé des dernières mises à jour.
            </p>
          </section>

          <section className="p-4 flex flex-col gap-2">
            <h2>Contact</h2>
            <p>
              Si vous avez des questions ou des préoccupations concernant cette
              politique de confidentialité, veuillez nous contacter à florent.rve@gmail.com
            </p>
          </section>
        </div>
      </div>

    </div>
  );
}
