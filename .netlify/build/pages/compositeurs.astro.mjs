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
  const compositeurs = await pb.collection("compositeurs").getFullList({
    expand: "oeuvres"
  });
  const baseUrl = "https://sae303.pockethost.io";
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/public/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "HeaderPage", $$HeaderPage, { "data-astro-cid-kb4xhizy": true })} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Liste des compositeurs", "data-astro-cid-kb4xhizy": true }, { "default": async ($$result2) => renderTemplate`<section class="bg-black pt-28 md:pt-0" data-astro-cid-kb4xhizy> <h1 class="text-3xl font-semibold papyrus text-jaune_petant text-center mb-6 pt-6" data-astro-cid-kb4xhizy>
Les compositeurs
</h1> <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-6 bg-black" data-astro-cid-kb4xhizy> ${compositeurs.map((compositeur) => renderTemplate`<div${addAttribute(compositeur.id, "key")} class="bg-fond_cards text-white rounded-lg shadow-lg overflow-hidden" data-astro-cid-kb4xhizy> ${compositeur.photo && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/compositeurs/${compositeur.id}/${compositeur.photo}`, "src")}${addAttribute(`Photo de ${compositeur.nom}`, "alt")} class="w-full h-[179px] mx-auto mb-4 object-cover" data-astro-cid-kb4xhizy>`} <div class="px-4" data-astro-cid-kb4xhizy> <h2 class="text-xl font-bold mb-2 text-[#EFDE7C]" data-astro-cid-kb4xhizy> ${compositeur.nom} </h2> </div> <div class="px-4" data-astro-cid-kb4xhizy> <h2 class="text-lg mb-2" data-astro-cid-kb4xhizy>${compositeur.intitule}</h2> </div>  <div class="text-center pt-4 pb-8" data-astro-cid-kb4xhizy> <a${addAttribute(`/compositeurs/${compositeur.id}`, "href")} class="bg-[#AE3939] h-[30px] opensans text-white font-bold py-2 px-6 rounded-[8px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-kb4xhizy>
Voir
</a> </div> </div>`)} </section> </section>${renderComponent($$result2, "FooterPage", $$FooterPage, { "data-astro-cid-kb4xhizy": true })} ` })} `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/compositeurs/index.astro", void 0);

const $$file = "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/compositeurs/index.astro";
const $$url = "/compositeurs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
