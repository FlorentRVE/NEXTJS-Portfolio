import React from "react";

export default function ExperienceProComponent({
  poste,
  du,
  au,
  localisation,
  entreprise,
  description,
  mission1,
  mission2,
  mission3,
}: {
  poste: string;
  du: string;
  au: string;
  localisation: string;
  entreprise: string;
  description: string;
  mission1: string;
  mission2: string;
  mission3: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border-green-200 border-2 rounded-xl p-4 gap-2 bg-slate-800">
        <div className="flex flex-col justify-between text-green-500 md:flex-row">
          <p>
            📅 {du} {"=>"} {au}
          </p>
          <p>🏢 {localisation}</p>
        </div>

        <p>
          <span>{poste}</span> chez{" "}
          <span className="text-green-500 uppercase">{entreprise}</span>
        </p>
        <p>{description}</p>
        <ul className="list-disc px-3">
          <li>{mission1}</li>
          <li>{mission2}</li>
          <li>{mission3}</li>
        </ul>
      </div>
    </div>
  );
}
