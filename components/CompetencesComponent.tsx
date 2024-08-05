import React from "react";
import SVGComponent from "./ReactSvgComponent";
import SVGComponentNode from "./NodeSvgComponent";

export default function CompetencesComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Compétences</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col border-green-200 border-2 rounded-xl p-4 gap-6 bg-slate-800">
          <h3 className="bg-gradient-to-r from-green-500 to-lime-500 p-1 text-slate-950 w-28 text-center rounded-md font-light uppercase">
            Frontend
          </h3>

          <div className="flex justify-between">
            <ul className="list-disc p-3">
              <li>JavaScript moderne et Typescript</li>

              <li>
                Framework frontend :{" "}
                <a href="https://reactjs.org" className="text-lime-500">
                  React
                </a>
                {" et "}
                <a href="https://nextjs.org/" className="text-lime-500">
                  Next.Js
                </a>
              </li>

              <li>
                Gestion des états :{" "}
                <a href="https://redux.js.org" className="text-lime-500">
                  Redux
                </a>
                {" et "}
                <a
                  href="https://docs.pmnd.rs/zustand/getting-started/introduction"
                  className="text-lime-500"
                >
                  Zustand
                </a>
              </li>
              <li>
                Styling avec CSS/SCSS et{" "}
                <a href="https://tailwindcss.com/" className="text-lime-500">
                  TailwindCSS
                </a>
              </li>

              <li>
                Bibliothèque de composants :{" "}
                <a href="https://daisyui.com/" className="text-lime-500">
                  DaisyUi
                </a>
                {" / "}
                <a href="https://ui.shadcn.com/" className="text-lime-500">
                  Shadcn
                </a>
                {" / "}
                <a href="https://primereact.org/" className="text-lime-500">
                  Primereact
                </a>
              </li>

              <li>
                Apprentissage du développement mobile avec{" "}
                <a href="https://reactnative.dev" className="text-lime-500">
                  React Native
                </a>
              </li>
            </ul>

            <SVGComponent className="w-48 h-auto" />
          </div>
        </div>

        <div className="flex flex-col border-green-200 border-2 rounded-xl p-4 gap-6 bg-slate-800">
          <h3 className="bg-gradient-to-r from-green-500 to-lime-500 p-1 text-slate-950 w-28 text-center rounded-md font-light uppercase">
            Backend
          </h3>

          <div className="flex justify-between">
            <ul className="list-disc p-3">
              <li>
                Framework backend :{" "}
                <a href="https://adonisjs.com/" className="text-lime-500">
                  AdonisJs
                </a>
              </li>
              <li>
                Nodejs et son framework{" "}
                <a href="https://expressjs.com/fr/" className="text-lime-500">
                  Express.Js
                </a>
              </li>
              <li>
                Headless CMS avec{" "}
                <a href="https://strapi.io/" className="text-lime-500">
                  Strapi
                </a>
              </li>
              <li>
                Le framework PHP{" "}
                <a href="https://symfony.com" className="text-lime-500">
                  Symfony
                </a>
              </li>
              <li>Base de données : MySQL / MongoDB</li>
            </ul>

            <SVGComponentNode className="w-48 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
