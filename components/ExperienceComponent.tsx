import React from "react";

export default function ExperienceComponent() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Expérience</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col border-green-200 border-2 rounded-xl p-4 gap-2 bg-slate-800">
          <p>Ici va figurer les différentes expériences</p>
          <p>Ici va figurer les différentes expériences</p>
          <div className="flex justify-between">
            <ul className="list-disc p-3">
              <li>Une expérience</li>
              <li>une autre expérience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
