import { f as createComponent, j as renderHead, k as renderComponent, r as renderTemplate, i as addAttribute } from '../chunks/astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$Layout, $ as $$HeaderPage, a as $$FooterPage } from '../chunks/FooterPage_CLXmhLB7.mjs';
import PocketBase from 'pocketbase';
/* empty css                                         */
import { $ as $$LinkCompositeur } from '../chunks/LinkCompositeur_BSTphBnr.mjs';
import { $ as $$LinkInterpretation } from '../chunks/LinkInterpretation_BGNsb7Qt.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pb = new PocketBase("https://sae303.pockethost.io");
  const compositeurs = (await pb.collection("compositeurs").getFullList({
    expand: "oeuvres"
  })).slice(0, 3);
  const oeuvres = (await pb.collection("oeuvres").getFullList({
    expand: "compositeur"
  })).slice(0, 3);
  const formations = (await pb.collection("formations").getFullList({
    expand: "interpretations"
  })).slice(0, 3);
  const baseUrl = "https://sae303.pockethost.io";
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/public/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Accueil", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderPage", $$HeaderPage, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <!-- Section d'introduction --> <section class="fond_accueil bg-cover bg-center p-8 sm:p-16" data-astro-cid-j7pv25f6> <div class="container mx-auto text-center" data-astro-cid-j7pv25f6> <h1 class="text-jaune_petant papyrus text-xl sm:text-2xl md:text-5xl px-4 pb-32 leading-snug" data-astro-cid-j7pv25f6>
Plongez dans l'univers intemporel des grands maîtres de la musique
          classique.
</h1> <div class="pt-8 pb-6" data-astro-cid-j7pv25f6> <a href="/compositeurs" data-astro-cid-j7pv25f6> <button class="bg-[#AE3939] h-[60px] opensans text-white font-bold py-2 px-6 rounded-[16px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Voir les compositeurs
</button></a> </div> <div class="pb-32" data-astro-cid-j7pv25f6> <a href="/oeuvres" data-astro-cid-j7pv25f6> <button class="bg-couleur_or h-[60px] opensans text-white font-bold py-2 px-6 rounded-[16px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Les oeuvres
</button></a> </div> </div> </section> <!-- Section des compositeurs --> <section class="bg-black px-6 py-12" data-astro-cid-j7pv25f6> <hr class="border-t-2 border-[#C9A75A] my-6 md:mx-96" data-astro-cid-j7pv25f6> <div class="container mx-auto text-center" data-astro-cid-j7pv25f6> <h1 class="text-jaune_petant papyrus text-2xl sm:text-3xl md:text-4xl px-4 pb-8" data-astro-cid-j7pv25f6>
Compositeurs en vedette
</h1> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12" data-astro-cid-j7pv25f6> ${compositeurs.map((compositeur) => renderTemplate`<div${addAttribute(compositeur.id, "key")} class="bg-fond_cards text-white rounded-lg shadow-lg overflow-hidden" data-astro-cid-j7pv25f6> ${compositeur.photo && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/compositeurs/${compositeur.id}/${compositeur.photo}`, "src")}${addAttribute(`Photo de ${compositeur.nom}`, "alt")} class="w-full h-[179px] mx-auto mb-4 object-cover" data-astro-cid-j7pv25f6>`} <div class="px-4" data-astro-cid-j7pv25f6> <h2 class="text-xl font-bold mb-2 text-[#EFDE7C]" data-astro-cid-j7pv25f6> ${compositeur.nom} </h2> <h3 class="text-lg mb-2" data-astro-cid-j7pv25f6>${compositeur.intitule}</h3> </div> <div class="text-center py-4" data-astro-cid-j7pv25f6> <a${addAttribute(`/compositeurs/${compositeur.id}`, "href")} class="bg-[#AE3939] h-[30px] opensans text-white font-bold py-2 px-6 rounded-[8px] text-xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Voir les détails
</a> </div> </div>`)} </div> <div class="pt-6 pb-6 text-center" data-astro-cid-j7pv25f6> <a href="/compositeurs" data-astro-cid-j7pv25f6> <button class="bg-[#AE3939] h-[60px] opensans text-white font-bold py-2 px-6 rounded-[16px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Voir les compositeurs
</button> </a> </div> </section> <!-- Section des oeuvres --> <section class="bg-black px-6 py-4" data-astro-cid-j7pv25f6> <hr class="border-t-2 border-[#C9A75A] my-6 md:mx-96" data-astro-cid-j7pv25f6> <div class="container mx-auto text-center" data-astro-cid-j7pv25f6> <h1 class="text-jaune_petant papyrus text-2xl sm:text-3xl md:text-4xl px-4 pb-6" data-astro-cid-j7pv25f6>
Oeuvres connues
</h1> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12" data-astro-cid-j7pv25f6> ${oeuvres.map((oeuvre) => renderTemplate`<div${addAttribute(oeuvre.id, "key")} class="bg-[#C9A75A] text-white rounded-lg shadow-lg overflow-hidden" data-astro-cid-j7pv25f6> ${oeuvre.cover && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/oeuvres/${oeuvre.id}/${oeuvre.cover}`, "src")}${addAttribute(`Photo de ${oeuvre.titre}`, "alt")} class="w-full h-[176px] mx-auto mb-4 object-cover" data-astro-cid-j7pv25f6>`} <div class="px-4" data-astro-cid-j7pv25f6> <h2 class="text-xl font-bold mb-2" data-astro-cid-j7pv25f6>${oeuvre.titre}</h2> </div> ${oeuvre.expand?.compositeur && renderTemplate`<p class="text-lg px-4 text-fond_cards font-semibold" data-astro-cid-j7pv25f6>
Par
${renderComponent($$result2, "LinkCompositeur", $$LinkCompositeur, { "compositeur": {
    id: oeuvre.expand.compositeur.id,
    nom: oeuvre.expand.compositeur.nom
  }, "data-astro-cid-j7pv25f6": true })} </p>`} <div class="text-center py-6" data-astro-cid-j7pv25f6> <a${addAttribute(`/oeuvres/${oeuvre.id}`, "href")} class="bg-[#AE3939] h-[60px] opensans text-white font-bold py-2 px-6 rounded-[16px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Voir les détails
</a> </div> </div>`)} </div> <div class="pt-6 text-center" data-astro-cid-j7pv25f6> <a href="/oeuvres" data-astro-cid-j7pv25f6> <button class="bg-[#AE3939] h-[60px] opensans text-white font-bold py-2 px-6 rounded-[16px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Voir les oeuvres
</button> </a> </div> </section> <!-- Section des formations --> <section class="bg-black px-6 py-4" data-astro-cid-j7pv25f6> <hr class="border-t-2 border-[#C9A75A] my-6 md:mx-96" data-astro-cid-j7pv25f6> <div class="container mx-auto text-center" data-astro-cid-j7pv25f6> <h1 class="text-jaune_petant papyrus text-2xl sm:text-3xl md:text-4xl px-4 pb-6" data-astro-cid-j7pv25f6>
Les groupes d'interprètes
</h1> </div> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12" data-astro-cid-j7pv25f6> ${formations.map((formation) => renderTemplate`<div${addAttribute(formation.id, "key")} class="bg-fond_cards text-white rounded-lg shadow-lg overflow-hidden" data-astro-cid-j7pv25f6> ${formation.photo && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/formations/${formation.id}/${formation.photo}`, "src")}${addAttribute(`Photo de ${formation.nom_groupe}`, "alt")} class="w-full h-[179px] mx-auto mb-4 object-cover" data-astro-cid-j7pv25f6>`} <div class="px-4" data-astro-cid-j7pv25f6> <h2 class="text-xl font-bold mb-2 text-[#EFDE7C]" data-astro-cid-j7pv25f6> ${formation.nom_groupe} </h2> </div> ${formation.expand?.interpretation && formation.expand.interpretation.length > 0 && renderTemplate`<div class="p-4" data-astro-cid-j7pv25f6> <p class="text-gray-400 mb-2" data-astro-cid-j7pv25f6>Œuvres :</p> <ul class="list-disc pl-5 space-y-1" data-astro-cid-j7pv25f6> ${formation.expand.interpretation.map((interpretation) => renderTemplate`<li${addAttribute(interpretation.id, "key")} data-astro-cid-j7pv25f6> ${renderComponent($$result2, "LinkInterpretation", $$LinkInterpretation, { "interpretation": {
    id: interpretation.id,
    titre: interpretation.nom_interpretation
  }, "data-astro-cid-j7pv25f6": true })} </li>`)} </ul> </div>`} <div class="text-center py-4" data-astro-cid-j7pv25f6> <a${addAttribute(`/formations/${formation.id}`, "href")} class="bg-[#AE3939] h-[30px] opensans text-white font-bold py-2 px-6 rounded-[8px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Voir les détails
</a> </div> </div>`)} </div> <div class="pt-6 text-center" data-astro-cid-j7pv25f6> <a href="/formations" data-astro-cid-j7pv25f6> <button class="bg-[#AE3939] h-[60px] opensans text-white font-bold py-2 px-6 rounded-[16px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-j7pv25f6>
Voir les formations
</button> </a> </div>${renderComponent($$result2, "FooterPage", $$FooterPage, { "data-astro-cid-j7pv25f6": true })} </section> </main> ` })} `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/index.astro", void 0);

const $$file = "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
