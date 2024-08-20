"use client";

// ! corriger le <any>

import FooterComponent from "@/components/FooterComponent";
import NavbarComponent from "@/components/NavbarComponent";
import ArticleComponent from "@/components/ArticleComponent";
import { useEffect, useState } from "react";
import * as api from "@/utils/api";

export default function Page() {

  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    api.getData().then((data: { data: any; }) => {
      setArticles(data.data);
    });
  }, []);

  return (
    <div className="flex flex-col bg-slate-800 text-slate-100 min-h-screen">
      <NavbarComponent />

      <div className="flex flex-col md:w-2/3 md:mx-auto lg:w-1/2 bg-slate-900 shadow-xl p-8 gap-8 min-h-screen">
        <h1 className="text-3xl font-bold">Blog</h1>

        <div className="border-l-4 border-l-green-600 h-10 flex items-center pl-2">
          <p>⚒️ Retrouvez ici mes articles de blog</p>
        </div>

        <div className="flex flex-col gap-3">

          {articles.map((article:any) => (

            < ArticleComponent
              key={article.id}
              image={"http://localhost:1337" + article.attributes.couverture.data.attributes.url}
              titre={article.attributes.titre}
              description={article.attributes.description}
              lienArticle={article.id}
              stack="stack imaginaire"
            />

          ))}

        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
