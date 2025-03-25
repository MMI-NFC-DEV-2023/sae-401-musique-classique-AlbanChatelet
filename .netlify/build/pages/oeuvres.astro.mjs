import { f as createComponent, j as renderHead, k as renderComponent, r as renderTemplate, i as addAttribute } from '../chunks/astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderPage, b as $$Layout, a as $$FooterPage } from '../chunks/FooterPage_CtIqPWeQ.mjs';
/* empty css                                         */
import PocketBase from 'pocketbase';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pb = new PocketBase("https://sae303.pockethost.io");
  const oeuvres = await pb.collection("oeuvres").getFullList({
    expand: "compositeur"
  });
  const baseUrl = "https://sae303.pockethost.io";
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="public/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "HeaderPage", $$HeaderPage, { "data-astro-cid-uta23b4w": true })} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Liste des oeuvres", "data-astro-cid-uta23b4w": true }, { "default": async ($$result2) => renderTemplate`<section class="bg-black pt-28 md:pt-0" data-astro-cid-uta23b4w> <h1 class="text-3xl font-semibold papyrus text-jaune_petant text-center mb-6 pt-6" data-astro-cid-uta23b4w>
La liste des oeuvres
</h1> <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-black" data-astro-cid-uta23b4w> ${oeuvres.map((oeuvre) => renderTemplate`<div${addAttribute(oeuvre.id, "key")} class="bg-fond_cards p-4 rounded-lg shadow-lg transition duration-300 hover:scale-105" data-astro-cid-uta23b4w> ${oeuvre.cover && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/oeuvres/${oeuvre.id}/${oeuvre.cover}`, "src")}${addAttribute(`Photo de ${oeuvre.titre}`, "alt")} class="w-full h-auto object-cover rounded-lg mb-4" data-astro-cid-uta23b4w>`} <div class="px-2" data-astro-cid-uta23b4w> <h2 class="text-2xl font-bold text-white" data-astro-cid-uta23b4w>${oeuvre.titre}</h2> <h2 class="text-xl font-semibold text-[#EFDE7C]" data-astro-cid-uta23b4w>
Par
${oeuvre.expand?.compositeur.nom} </h2> <h2 class="text-lg font-light text-[#EFDE7C]" data-astro-cid-uta23b4w>${oeuvre.annee}</h2> </div>  <div class="text-center py-4" data-astro-cid-uta23b4w> <a${addAttribute(`/oeuvres/${oeuvre.id}`, "href")} class="bg-[#AE3939] h-[30px] opensans text-white font-semibold py-2 px-6 rounded-[8px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-uta23b4w>
Détails
</a> </div> </div>`)} </section> </section>${renderComponent($$result2, "FooterPage", $$FooterPage, { "data-astro-cid-uta23b4w": true })} ` })} `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/oeuvres/index.astro", void 0);

const $$file = "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/oeuvres/index.astro";
const $$url = "/oeuvres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
