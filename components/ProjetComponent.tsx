import React from "react";
import SVGComponentGithub from "./GithubSvgComponent";

export default function ProjetComponent({
  image,
  titre,
  description,
  lienGitHub,
  stack,
}: {
  image: string;
  titre: string;
  description: string;
  lienGitHub: string;
  stack: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center border-green-200 border-2 rounded-xl p-4 gap-2 bg-slate-800">
        <img src={image} className="h-20 w-20 lg:h-36 lg:w-36 object-cover" />

        <div className="flex flex-col gap-2 flex-1 pl-5 md:pl-24">
          <p className="text-lg font-bold text-green-500">{titre}</p>
          <p>{description}</p>
          <p className="text-green-500">{stack}</p>
        </div>

        <a href={lienGitHub} target="_blank">
          <SVGComponentGithub className="w-12 h-auto" />
        </a>
      </div>
    </div>
  );
}
