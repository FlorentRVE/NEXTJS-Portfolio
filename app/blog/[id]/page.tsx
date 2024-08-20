"use client";

// ! corriger le <any>

import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import { useEffect, useState } from "react";
import * as api from "@/utils/api";

export default function Page({ params }: { params: { id: number } }) {
  const [article, setArticle] = useState<any>([]);

  useEffect(() => {
    api.getDataById(params.id).then((data) => {
      setArticle(data.data.attributes);
    });
  }, []);

  // console.log(article.couverture.data.attributes.url);

  return (
    <div className="flex flex-col bg-slate-800 text-slate-100 min-h-screen">
      <NavbarComponent />

      <div className="flex flex-col md:w-2/3 md:mx-auto lg:w-1/2 bg-slate-900 shadow-xl p-8 gap-8 min-h-screen">
        <h1 className="text-3xl font-bold">{article.titre}</h1>

        {/* <img src={"http://localhost:1337" + article.couverture.data.attributes.url} className="h-20 w-screen lg:h-36 lg:w-36 object-cover" /> */}

        <div className="border-l-4 border-l-green-600 h-10 flex items-center pl-2">
          <p>⚒️ {article.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col border-green-200 border-2 rounded-xl p-4 gap-2 bg-slate-800">
              <p>🔗 {article.corps}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3"></div>
      </div>

      <FooterComponent />
    </div>
  );
}
