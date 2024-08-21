import React from "react";
import Link from "next/link";

export default function ProjetComponent({
  imageURL,
  titre,
  description,
  lienArticle,
  tag,
}: {
  imageURL: string;
  titre: string;
  description: string;
  lienArticle: string;
  tag: Array<string>;
}) {
  return (
    <div className="hover:scale-105 hover:shadow-2xl hover:brightness-125">
      <Link href={"/blog/" + lienArticle} target="">
        <div className="flex items-center border-green-200 border-2 rounded-xl p-4 gap-2 bg-slate-800">
          <img
            src={imageURL}
            className="h-20 w-20 lg:h-36 lg:w-36 object-cover"
          />

          <div className="flex flex-col items-center justify-center gap-2 mx-auto flex-1">
            <p className="text-lg font-bold text-green-500">{titre}</p>
            <p>{description}</p>
            <div className="flex gap-2 mt-3">
              {tag.map((tag) => (
                <p
                  className="border-2 border-slate-800 rounded-lg py-1 px-2 bg-green-500 text-slate-950 text-sm"
                  key={tag}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
