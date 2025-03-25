import { f as createComponent, j as renderHead, k as renderComponent, r as renderTemplate, i as addAttribute } from '../chunks/astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderPage, b as $$Layout, a as $$FooterPage } from '../chunks/FooterPage_C9gHu3DB.mjs';
/* empty css                                */
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pb = new PocketBase("https://sae303.pockethost.io");
  const compositeurs = await pb.collection("compositeurs").getFullList({
    expand: "oeuvres"
  });
  const baseUrl = "https://sae303.pockethost.io";
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/public/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "HeaderPage", $$HeaderPage, {})} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Liste des compositeurs" }, { "default": async ($$result2) => renderTemplate` <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 p-6 bg-black"> ${compositeurs.map((compositeur) => renderTemplate`<div${addAttribute(compositeur.id, "key")} class="bg-fond_cards text-white rounded-lg shadow-lg overflow-hidden"> ${compositeur.photo && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/compositeurs/${compositeur.id}/${compositeur.photo}`, "src")}${addAttribute(`Photo de ${compositeur.nom}`, "alt")} class="w-full h-[179px] mx-auto mb-4 object-cover">`} <div class="px-4"> <h2 class="text-xl font-bold mb-2 text-[#EFDE7C]"> ${compositeur.nom} </h2> </div> <div class="px-4"> <h2 class="text-lg mb-2">${compositeur.intitule}</h2> </div>  <div class="text-center pt-4 pb-8"> <a${addAttribute(`/compositeurs/${compositeur.id}`, "href")} class="bg-[#AE3939] h-[30px] opensans text-white font-bold py-2 px-6 rounded-[8px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105">
Voir
</a> </div> </div>`)} </section>${renderComponent($$result2, "FooterPage", $$FooterPage, {})} ` })}`;
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
