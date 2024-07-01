import NavbarComponent from "@/components/NavbarComponent";

export default function projet() {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-100 min-h-screen">
      <NavbarComponent />

      <div className="flex flex-col w-1/2 mx-auto bg-slate-900 shadow-xl p-8 gap-8">
        <h1 className="text-3xl font-bold">Projets</h1>

        <div className="border-l-4 border-l-green-600 h-10 flex items-center pl-2">
          <p>
            ⚒️ Retrouvez ici mes projets
          </p>
        </div>
      </div>
    </div>
  );
}
