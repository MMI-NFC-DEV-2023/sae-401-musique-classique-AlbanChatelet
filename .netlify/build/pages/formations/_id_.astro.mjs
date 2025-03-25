import { f as createComponent, g as createAstro, j as renderHead, k as renderComponent, r as renderTemplate, l as Fragment, i as addAttribute } from '../../chunks/astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderPage, b as $$Layout, a as $$FooterPage } from '../../chunks/FooterPage_jEq6vJNb.mjs';
import PocketBase from 'pocketbase';
/* empty css                                   */
import { $ as $$LinkInterpretation } from '../../chunks/LinkInterpretation_BGNsb7Qt.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const pb = new PocketBase("https://sae303.pockethost.io");
  const { id } = Astro2.params;
  if (!id) {
    console.error("\u274C ID manquant pour la page formation.");
    throw new Error("ID manquant pour la page formation.");
  }
  let formation = null;
  try {
    console.log(
      "\u{1F4E1} R\xE9cup\xE9ration de la formation avec ses interpr\xE9tations et leurs \u0153uvres..."
    );
    formation = await pb.collection("formations").getOne(id, {
      expand: "interpretations.titre_oeuvre,interpretations.compositeur"
    });
    console.log("\u2705 Formation r\xE9cup\xE9r\xE9e :", formation);
  } catch (error) {
    console.error("\u274C Erreur lors de la r\xE9cup\xE9ration :", error);
  }
  const baseUrl = "https://sae303.pockethost.io";
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/src/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "HeaderPage", $$HeaderPage, { "data-astro-cid-z3o52gel": true })} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": formation ? `D\xE9tails de ${formation.nom_groupe}` : "Formation introuvable", "data-astro-cid-z3o52gel": true }, { "default": async ($$result2) => renderTemplate` <section class="flex flex-col items-center min-h-screen bg-black text-white py-12" data-astro-cid-z3o52gel> ${formation ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-z3o52gel": true }, { "default": async ($$result3) => renderTemplate` <h1 class="text-4xl font-bold mb-6 papyrus text-jaune_petant tracking-wide" data-astro-cid-z3o52gel> ${formation.nom_groupe} </h1> ${formation.photo && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/formations/${formation.id}/${formation.photo}`, "src")}${addAttribute(`Photo de ${formation.nom_groupe}`, "alt")} class="w-5/6 h-auto mx-auto mb-4 rounded-lg object-cover" data-astro-cid-z3o52gel>`}<div class="text-left self-start pl-8" data-astro-cid-z3o52gel> <p class="border rounded-full px-2" data-astro-cid-z3o52gel>${formation.type}</p> </div> <div class="text-left self-start px-8 pt-6 pb-6" data-astro-cid-z3o52gel> <p class="font-bold text-3xl text-white mulish" data-astro-cid-z3o52gel>Histoire</p> <p class="text-sm text-white mulish pt-4" data-astro-cid-z3o52gel>${formation.biographie}</p> <p class="text-sm text-white mulish pt-4" data-astro-cid-z3o52gel> ${formation.biographie_2} </p> </div> <div class="w-full max-w-4xl px-8" data-astro-cid-z3o52gel> <h2 class="text-3xl font-bold mb-6 text-center papyrus text-jaune_petant" data-astro-cid-z3o52gel>
Interprétations
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-z3o52gel> ${formation.expand?.interpretations.map((interpretation) => renderTemplate`<div${addAttribute(interpretation.id, "key")} class="bg-fond_cards bg-opacity-80 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105" data-astro-cid-z3o52gel> ${interpretation.expand?.titre_oeuvre?.cover && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/oeuvres/${interpretation.expand.titre_oeuvre.id}/${interpretation.expand.titre_oeuvre.cover}`, "src")}${addAttribute(`Cover de ${interpretation.expand.titre_oeuvre.titre}`, "alt")} class="w-full h-auto rounded-lg object-cover" data-astro-cid-z3o52gel>`} <div class="text-left mt-4" data-astro-cid-z3o52gel> ${renderComponent($$result3, "LinkInterpretation", $$LinkInterpretation, { "interpretation": interpretation, "class": "text-lg font-semibold text-white hover:text-jaune_petant transition-colors", "data-astro-cid-z3o52gel": true })} <p class="text-gray-400" data-astro-cid-z3o52gel>
Composé par${" "} <a${addAttribute(`/compositeurs/${interpretation.expand.compositeur.id}`, "href")} class=" hover:underline" data-astro-cid-z3o52gel> ${interpretation.expand?.compositeur?.nom} </a> </p> ${interpretation.annee_sortie && renderTemplate`<p class="text-lg text-[#E7C920]" data-astro-cid-z3o52gel>
Interprété en ${interpretation.annee_sortie} </p>`} ${interpretation.expand?.titre_oeuvre && renderTemplate`<p class="text-sm text-gray-400" data-astro-cid-z3o52gel> <a${addAttribute(`/oeuvres/${interpretation.expand.titre_oeuvre.id}`, "href")} class="text-gray-400 hover:underline" data-astro-cid-z3o52gel>
Voir l'oeuvre originale
</a>${" "}
(${interpretation.expand.titre_oeuvre.annee})
</p>`} <div class="" data-astro-cid-z3o52gel> ${interpretation.lien_spotify && renderTemplate`<a${addAttribute(interpretation.lien_spotify, "href")} target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-spotify text-black rounded-md hover:bg-green-700" data-astro-cid-z3o52gel>
Spotify
</a>`} ${interpretation.lien_deezer && renderTemplate`<a${addAttribute(interpretation.lien_deezer, "href")} target="_blank" rel="noopener noreferrer" class="inline-block mr-16 px-4 py-2 bg-deezer text-white rounded-md hover:bg-purple-700" data-astro-cid-z3o52gel>
Deezer
</a>`} ${interpretation.lien_itunes && renderTemplate`<a${addAttribute(interpretation.lien_itunes, "href")} target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-[#09C6F9] via-[#A46CF1] to-[#FA5F68] text-gray-700 rounded-md hover:opacity-80 transition" data-astro-cid-z3o52gel>
iTunes
</a>`} ${interpretation.lien_amazon && renderTemplate`<a${addAttribute(interpretation.lien_amazon, "href")} target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-amazon text-gray-700 rounded-md hover:opacity-80 transition" data-astro-cid-z3o52gel>
Amazon
</a>`} </div> </div> </div>`)} </div> </div> ` })}` : renderTemplate`<p class="text-red-500 text-center" data-astro-cid-z3o52gel>Formation introuvable.</p>`} </section>${renderComponent($$result2, "FooterPage", $$FooterPage, { "data-astro-cid-z3o52gel": true })} ` })} `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/formations/[id].astro", void 0);

const $$file = "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/formations/[id].astro";
const $$url = "/formations/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
