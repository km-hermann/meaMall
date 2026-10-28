"use client";

import { useRef, useState } from "react";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { useApp } from "@/context/AppContext";
import { gift } from "@/data/gift";
import { playSuccess } from "@/lib/sound";

export function GrandFinale() {
  const { locale, muted } = useApp();
  const [unlocked, setUnlocked] = useState(false);
  const [burstCount, setBurstCount] = useState(0);
  const finaleRef = useRef<HTMLDivElement>(null);

  function handleUnlock() {
    setUnlocked(true);
    setBurstCount((c) => c + 1);
    if (!muted) {
      void playSuccess();
    }
    setTimeout(() => {
      finaleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }

  const whatsappMessage = encodeURIComponent(
    locale === "fr"
      ? `Hermann !! 😭👑 Je viens de terminer de visiter tout Mea Mall ! C'est le plus beau et le plus touchant des cadeaux d'anniversaire du monde entier ! Merci pour tout mon petit frère adoré, je t'aime infiniment !! ❤️✨🩺`
      : `Hermann !! 😭👑 I just finished exploring all of Mea Mall! It is truly the most touching and beautiful birthday gift in the world! Thank you so much my beloved little brother, I love you infinitely!! ❤️✨🩺`,
  );

  const whatsappUrl = `https://api.whatsapp.com/send?text=${whatsappMessage}`;

  return (
    <section className="mt-14 w-full">
      {burstCount > 0 && <ConfettiBurst show key={burstCount} pieces={120} />}

      {!unlocked ? (
        /* The Mystery Finale Trigger */
        <div className="relative overflow-hidden rounded-3xl border-2 border-gold/70 bg-gradient-to-b from-white via-cream to-gold-soft/40 p-8 text-center shadow-soft">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-3xl animate-bounce">
            👑
          </div>

          <h3 className="mt-3 font-serif text-2xl font-bold text-rose-ink sm:text-3xl">
            {locale === "fr"
              ? "Tu es arrivée au bout des 10 checkpoints..."
              : "You reached the end of the 10 checkpoints..."}
          </h3>

          <p className="mt-2 text-sm text-rose-ink/75 sm:text-base">
            {locale === "fr"
              ? "Mais attends... Une véritable Milliardaire ne peut pas repartir sans son titre officiel !"
              : "Wait... A true Billionaire cannot leave without her official royal decree!"}
          </p>

          <button
            type="button"
            onClick={handleUnlock}
            className="group relative mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold via-blush-400 to-gold px-8 py-4 text-base font-bold text-rose-ink shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="text-xl">✨</span>
            <span>
              {locale === "fr"
                ? "Sceller mon 25ème Anniversaire 🎀"
                : "Seal My 25th Birthday Milestone 🎀"}
            </span>
            <span className="text-xl">✨</span>
          </button>

          <p className="mt-3 text-xs text-rose-ink/60">
            {locale === "fr"
              ? "Touche le bouton pour le mot de fin de ton petit frère"
              : "Tap the button for a final word from your little brother"}
          </p>
        </div>
      ) : (
        /* The Grand Finale Reveal */
        <div ref={finaleRef} className="space-y-8 animate-fadeIn">
          {/* 1. Official Royal Diploma of Mea Mall */}
          <div className="relative overflow-hidden rounded-3xl border-4 border-double border-gold bg-gradient-to-b from-[#fffdf9] via-white to-[#fff8ee] p-6 shadow-2xl sm:p-10">
            {/* Corner Decorative Ornaments */}
            <div className="pointer-events-none absolute left-3 top-3 text-2xl opacity-60">
              ⚜️
            </div>
            <div className="pointer-events-none absolute right-3 top-3 text-2xl opacity-60">
              ⚜️
            </div>
            <div className="pointer-events-none absolute bottom-3 left-3 text-2xl opacity-60">
              ⚜️
            </div>
            <div className="pointer-events-none absolute bottom-3 right-3 text-2xl opacity-60">
              ⚜️
            </div>

            {/* Header Badge */}
            <div className="text-center">
              <span className="inline-block rounded-full bg-gold px-4 py-1 text-[11px] font-black uppercase tracking-[0.25em] text-white shadow-xs">
                {locale === "fr"
                  ? "RÉPUBLIQUE DE MEA MALL • TITRE OFFICIEL"
                  : "MEA MALL KINGDOM • OFFICIAL DECREE"}
              </span>

              <h2 className="mt-4 font-serif text-2xl font-extrabold uppercase tracking-wide text-rose-ink sm:text-4xl">
                {locale === "fr"
                  ? "Diplôme Royal de la Milliardaire"
                  : "Royal Billionaire Diploma"}
              </h2>

              <p className="mt-1 font-script text-2xl text-gold sm:text-3xl">
                ~ Édition Spéciale 25ème Anniversaire ~
              </p>
            </div>

            {/* Recipient */}
            <div className="my-6 border-y-2 border-dashed border-gold/40 py-5 text-center">
              <p className="text-xs uppercase tracking-widest text-rose-ink/60">
                {locale === "fr"
                  ? "Ce titre d'excellence est décerné avec un amour infini à :"
                  : "This title of distinction is awarded with infinite love to:"}
              </p>
              <h3 className="mt-2 font-script text-4xl text-blush-500 sm:text-5xl">
                {gift.herNickname} 👑
              </h3>
              <p className="mt-1 font-serif text-sm font-semibold text-rose-ink/80">
                {locale === "fr"
                  ? "25 Ans • Grande Sœur en Or Massif • Fierté de Toute la Famille"
                  : "25 Years Old • Golden Big Sister • Pride of the Entire Family"}
              </p>
            </div>

            {/* Citations / Honors */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-left text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 rounded-2xl bg-cream/70 p-3.5 border border-blush-100">
                <span className="text-xl">🩺</span>
                <div>
                  <p className="font-bold text-rose-ink">
                    {locale === "fr"
                      ? "Docteure en Devenir"
                      : "Future Medical Doctor"}
                  </p>
                  <p className="text-rose-ink/70 text-[11px] sm:text-xs">
                    {locale === "fr"
                      ? "Examens finaux en janvier : la blouse blanche t'attend !"
                      : "Finals in January: the official stethoscope is yours!"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl bg-cream/70 p-3.5 border border-blush-100">
                <span className="text-xl">💎</span>
                <div>
                  <p className="font-bold text-rose-ink">
                    {locale === "fr"
                      ? "Cœur Pur & Pilier Familial"
                      : "Pure Heart & Family Pillar"}
                  </p>
                  <p className="text-rose-ink/70 text-[11px] sm:text-xs">
                    {locale === "fr"
                      ? "Toujours là pour soutenir la maison. Que Dieu te le rende au centuple !"
                      : "Always supporting the home. May God bless you a hundredfold!"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl bg-cream/70 p-3.5 border border-blush-100">
                <span className="text-xl">💍</span>
                <div>
                  <p className="font-bold text-rose-ink">
                    {locale === "fr" ? "Prochaine Étape : Le Mariage" : "Next Milestone: The Wedding"}
                  </p>
                  <p className="text-rose-ink/70 text-[11px] sm:text-xs">
                    {locale === "fr"
                      ? "Rappel amical : les neveux et nièces sont très attendus par tonton ! 😂👶"
                      : "Friendly reminder: the nephews and nieces are eagerly awaited! 😂👶"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl bg-cream/70 p-3.5 border border-blush-100">
                <span className="text-xl">🌍</span>
                <div>
                  <p className="font-bold text-rose-ink">
                    {locale === "fr" ? "Lien Inébranlable" : "Unbreakable Bond"}
                  </p>
                  <p className="text-rose-ink/70 text-[11px] sm:text-xs">
                    {locale === "fr"
                      ? "Yaoundé 🇨🇲 ➔ Neumünster 🇩🇪 : la distance n'a aucune emprise sur notre amour."
                      : "Yaoundé 🇨🇲 ➔ Neumünster 🇩🇪: distance has zero power over our bond."}
                  </p>
                </div>
              </div>
            </div>

            {/* Seal & Signature */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gold/30 pt-6">
              {/* Gold Wax Stamp */}
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-br from-gold-soft to-gold text-2xl shadow-md">
                  👑
                </div>
                <div className="text-left text-[11px] font-semibold uppercase tracking-wider text-rose-ink/70">
                  <p>{locale === "fr" ? "Sceau Royal d'Authenticité" : "Royal Seal of Authenticity"}</p>
                  <p className="font-mono text-[9px] text-rose-ink/50">
                    MEA-25-CERTIFIED-WITH-LOVE
                  </p>
                </div>
              </div>

              {/* Brother Signature */}
              <div className="text-center sm:text-right">
                <p className="text-xs uppercase tracking-wider text-rose-ink/60">
                  {locale === "fr" ? "Signé par ton petit frère adoré :" : "Signed by your loving brother:"}
                </p>
                <p className="mt-1 font-script text-3xl text-rose-ink">
                  {gift.myName}
                </p>
              </div>
            </div>
          </div>

          {/* 2. The Playful Farewell Note */}
          <div className="rounded-3xl border border-blush-200 bg-white p-6 sm:p-8 text-center shadow-soft">
            <span className="text-4xl" aria-hidden>
              🎬✨🎀
            </span>

            <h3 className="mt-3 font-serif text-2xl font-bold text-rose-ink sm:text-3xl">
              {locale === "fr"
                ? "Et voilà... Mea Mall ferme ses portes !"
                : "And that's a wrap... Mea Mall is closing!"}
            </h3>

            <div className="mx-auto mt-4 max-w-md space-y-3 text-sm leading-relaxed text-rose-ink/85 sm:text-base">
              <p>
                {locale === "fr"
                  ? "Désolé grande sœur... Aucun jet privé ne va réellement atterrir avec le micro-ondes rose champagne ! 😂"
                  : "Sorry big sister... No private jet is actually going to land with the champagne-pink microwave! 😂"}
              </p>
              <p className="font-medium text-rose-ink">
                {locale === "fr"
                  ? "Mais ce site tout entier a été programmé ligne par ligne avec tout mon cœur pour te célébrer, te faire rire, et te rappeler à quel point tu es unique et précieuse pour moi."
                  : "Every single line of this website was coded with all my heart to celebrate you, make you smile, and remind you how immensely special you are to me."}
              </p>
              <p className="text-xs text-rose-ink/70 sm:text-sm">
                {locale === "fr"
                  ? "Maintenant, souffle tes 25 bougies, déchire tes examens de médecine en janvier 🩺... et prépare-toi pour le mariage ! 😜👰"
                  : "Now, blow out your 25 candles, conquer your medical exams in January 🩺... and get ready for the wedding! 😜👰"}
              </p>
            </div>

            {/* 3. The WhatsApp Live Reaction Button */}
            <div className="mt-8 flex flex-col items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <span className="text-2xl" aria-hidden>
                  💬
                </span>
                <span>
                  {locale === "fr"
                    ? "Envoyer ma réaction à mon petit frère KMH ❤️"
                    : "Send my live reaction to my little brother KMH ❤️"}
                </span>
              </a>

              <p className="mt-2 text-xs text-rose-ink/60">
                {locale === "fr"
                  ? "Touche pour lui envoyer un gros message d'amour sur WhatsApp !"
                  : "Tap to send him an emotional thank you message on WhatsApp!"}
              </p>
            </div>

            {/* Replay action */}
            <div className="mt-6 border-t border-blush-100 pt-4">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs font-semibold text-rose-ink/65 hover:text-blush-500 underline"
              >
                {locale === "fr" ? "🔄 Remonter au début de la surprise" : "🔄 Back to the top of the surprise"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
