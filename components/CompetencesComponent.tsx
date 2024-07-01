import React from 'react'
import SVGComponent from './ReactSvgComponent';
import SVGComponentNode from './NodeSvgComponent';

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
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
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
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>

            <SVGComponentNode className="w-48 h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}