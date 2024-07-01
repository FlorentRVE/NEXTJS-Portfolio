import React from "react";

export default function ExperienceProComponent() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border-green-200 border-2 rounded-xl p-4 gap-2 bg-slate-800">
        <div className="flex justify-between">
          <p>Date</p>
          <p>Localisation</p>
        </div>

        <p>Poste chez entreprise</p>
        <p>Description de la mission</p>
        <ul className="list-disc p-3">
          <li>Mission 1</li>
          <li>Mission 2</li>
          <li>Mission 3</li>
        </ul>
      </div>
    </div>
  );
}
