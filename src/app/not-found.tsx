import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-5xl">🎀</p>
      <h1 className="mt-4 font-serif text-2xl">Page introuvable</h1>
      <Link href="/shop" className="mt-6 rounded-full bg-blush-500 px-6 py-3 text-white">
        Mea Mall
      </Link>
    </div>
  );
}
