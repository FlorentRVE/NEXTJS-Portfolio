import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen bg-slate-800 text-slate-100">
      <div className="flex flex-col gap-4 w-2/3 mx-auto h-screen items-center justify-center bg-slate-900 shadow-xl p-8">
        <div className="flex flex-col items-center justify-center border-2 border-slate-400 rounded-2xl p-10 gap-11">
          <h1 className="text-3xl font-bold text-center">Page introuvable</h1>
          <Link href="/">Retour accueil</Link>
        </div>
      </div>
    </div>
  );
}
