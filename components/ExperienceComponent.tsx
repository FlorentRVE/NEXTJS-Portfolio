import React from "react";

export default function ExperienceComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Expériences en développement</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col border-green-200 border-2 rounded-xl p-4 gap-2 bg-slate-800">
          <p>
            J&apos;ai commencé à apprendre le développement en autodidacte et
            aujourd&apos;hui encore je continue à apprendre par la réalisation
            de divers projets.
          </p>
          <div className="flex justify-between">
            <ul className="list-disc p-3">
              <li>
                Premier pas en développement sur Freecodecamp et sa
                certification Responsive Web Design
              </li>
              <li>
                Obtention de mon diplôme de développeur web et web mobile avec
                OpenClassrooms. Cette formation m&apos;a permis
                d&apos;approfondir mes bases en développement web. J&apos;ai pu
                ainsi mettre en application ces connaissances en réalisant
                plusieurs projets.
              </li>
              <li>
                Réalisation de divers projets personnels tel que Lakaz, une
                application web de recette de cuisine avec valeurs
                nutritionnelles
              </li>
              <li>
                Alternance chez Osipro avec une période en entreprise. Cette
                période m&apos;a permis de travailler dans un environnement de
                travail professionnel et d&apos;apprendre la gestion d&apos;un
                projet de la conception au déploiement. De plus la formation
                était articulée autours de la réalisation de nombreux projets
                permettant la découverte de diverses technologies{" "}
              </li>
              <li>
                Développement en cours d&apos;un projet personnel
                d&apos;application mobile
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
