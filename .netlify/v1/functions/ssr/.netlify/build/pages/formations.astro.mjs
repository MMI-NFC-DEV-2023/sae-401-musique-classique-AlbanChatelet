import { f as createComponent, j as renderHead, k as renderComponent, r as renderTemplate, i as addAttribute } from '../chunks/astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderPage, b as $$Layout, a as $$FooterPage } from '../chunks/FooterPage_CLXmhLB7.mjs';
/* empty css                                         */
import PocketBase from 'pocketbase';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pb = new PocketBase("https://sae303.pockethost.io");
  const formations = await pb.collection("formations").getFullList({
    expand: "interpretations"
  });
  const baseUrl = "https://sae303.pockethost.io";
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="public/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "HeaderPage", $$HeaderPage, { "data-astro-cid-crishjmo": true })} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Liste des formations", "data-astro-cid-crishjmo": true }, { "default": async ($$result2) => renderTemplate`<section class="bg-black" data-astro-cid-crishjmo> <h1 class="text-3xl font-semibold papyrus text-jaune_petant text-center mb-6 pt-6" data-astro-cid-crishjmo>
Les formations d'interprètes
</h1> <section class="grid grid-cols-1 sm:grid-cols-2 bg-black md:grid-cols-3 lg:grid-cols-4 gap-12 p-6" data-astro-cid-crishjmo> ${formations.map((formation) => renderTemplate`<div${addAttribute(formation.id, "key")} class="bg-fond_cards text-white rounded-lg shadow-lg overflow-hidden" data-astro-cid-crishjmo> ${formation.photo && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/formations/${formation.id}/${formation.photo}`, "src")}${addAttribute(`Photo de ${formation.nom_groupe}`, "alt")} class="w-full h-[179px] mx-auto mb-4 object-cover" data-astro-cid-crishjmo>`} <div class="px-4" data-astro-cid-crishjmo> <h2 class="text-xl font-bold mb-2 text-[#EFDE7C]" data-astro-cid-crishjmo> ${formation.nom_groupe} </h2> </div> <div class="px-4" data-astro-cid-crishjmo> <h2 class="text-lg mb-2" data-astro-cid-crishjmo>${formation.intitule}</h2> </div>  <div class="text-center pt-4 pb-8" data-astro-cid-crishjmo> <a${addAttribute(`/formations/${formation.id}`, "href")} class="bg-[#AE3939] h-[30px] opensans text-white font-bold py-2 px-6 rounded-[8px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-crishjmo>
Voir
</a> </div> </div>`)} </section>${renderComponent($$result2, "FooterPage", $$FooterPage, { "data-astro-cid-crishjmo": true })} </section> ` })} `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/formations/index.astro", void 0);

const $$file = "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/formations/index.astro";
const $$url = "/formations";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
