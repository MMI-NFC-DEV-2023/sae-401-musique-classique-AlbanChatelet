import { f as createComponent, g as createAstro, m as maybeRenderHead, i as addAttribute, r as renderTemplate, j as renderHead, k as renderComponent, l as Fragment } from '../../chunks/astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderPage, b as $$Layout, a as $$FooterPage } from '../../chunks/FooterPage_CLXmhLB7.mjs';
import PocketBase from 'pocketbase';
/* empty css                                            */
import 'clsx';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$LinkOeuvre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkOeuvre;
  const { oeuvre } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/oeuvres/${oeuvre.id}`, "href")} class="text-white text-2xl font-semibold"> ${oeuvre.titre} </a>`;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/components/LinkOeuvre.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const pb = new PocketBase("https://sae303.pockethost.io");
  const { id } = Astro2.params;
  await pb.collection("oeuvres").getFullList({
    expand: "compositeur"
  });
  if (!id) {
    console.error("\u274C ID manquant pour la page compositeur.");
    throw new Error("ID manquant pour la page compositeur.");
  }
  let compositeur = null;
  try {
    console.log(
      "\u{1F4E1} Tentative de r\xE9cup\xE9ration du compositeur et de ses \u0153uvres depuis PocketBase..."
    );
    compositeur = await pb.collection("compositeurs").getOne(id, {
      expand: "oeuvres"
    });
    console.log("\u2705 Compositeur r\xE9cup\xE9r\xE9 avec succ\xE8s :", compositeur);
  } catch (error) {
    console.error("\u274C Erreur lors de la r\xE9cup\xE9ration du compositeur :", error);
  }
  const dateNaissance = compositeur?.date_naissance ? new Date(compositeur.date_naissance).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : "Date inconnue";
  const dateDeces = compositeur?.date_deces ? new Date(compositeur.date_deces).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : "Date inconnue";
  try {
    console.log(
      "\u{1F4E1} Tentative de r\xE9cup\xE9ration du compositeur et de ses \u0153uvres depuis PocketBase..."
    );
    compositeur = await pb.collection("compositeurs").getOne(id, {
      expand: "oeuvres"
    });
    console.log("\u2705 Compositeur r\xE9cup\xE9r\xE9 avec succ\xE8s :", compositeur);
  } catch (error) {
    console.error("\u274C Erreur lors de la r\xE9cup\xE9ration du compositeur :", error);
  }
  const baseUrl = "https://sae303.pockethost.io";
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/public/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "HeaderPage", $$HeaderPage, { "data-astro-cid-ieof2kw3": true })} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": compositeur ? `D\xE9tails de ${compositeur.nom}` : "Compositeur introuvable", "data-astro-cid-ieof2kw3": true }, { "default": async ($$result2) => renderTemplate` <section class="flex flex-col items-center min-h-screen bg-black text-white py-12" data-astro-cid-ieof2kw3> ${compositeur ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ieof2kw3": true }, { "default": async ($$result3) => renderTemplate` <p class="text-white papyrus text-3xl" data-astro-cid-ieof2kw3>
Période : ${compositeur.periode} </p>${" "}<p class="text-gray-500 mulish pt-2 mb-4" data-astro-cid-ieof2kw3> ${dateNaissance} - ${dateDeces} </p> ${compositeur.photo && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/compositeurs/${compositeur.id}/${compositeur.photo}`, "src")}${addAttribute(`Photo de ${compositeur.nom}`, "alt")} class="w-5/6  rounded-xl h-auto mb-4 object-cover" data-astro-cid-ieof2kw3>`}<div class="container  text-left" data-astro-cid-ieof2kw3> <h1 class="text-lg text-white mx-4 mulish text-light  mb-6 tracking-wide" data-astro-cid-ieof2kw3> ${compositeur.intitule} </h1> </div> <div class="container  text-left" data-astro-cid-ieof2kw3> <h1 class="font-bold text-2xl text-white mulish mx-4 text-left pb-4" data-astro-cid-ieof2kw3>
Biographie
</h1> <h1 class="text-lg text-white mx-4 mulish text-light mb-6 tracking-wide" data-astro-cid-ieof2kw3> ${compositeur.biographie} </h1> </div> <div class="container mx-auto text-center pt-8" data-astro-cid-ieof2kw3> <h1 class="text-jaune_petant papyrus text-2xl px-4" data-astro-cid-ieof2kw3>
Oeuvres majeures
</h1> </div> ${compositeur.expand?.oeuvres && compositeur.expand.oeuvres.length > 0 && renderTemplate`<div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-4 w-full max-w-5xl mx-auto" data-astro-cid-ieof2kw3> ${compositeur.expand.oeuvres.map((oeuvre) => renderTemplate`<div${addAttribute(oeuvre.id, "key")} class="bg-fond_cards p-4 rounded-lg shadow-lg transition duration-300 hover:scale-105" data-astro-cid-ieof2kw3> ${oeuvre.cover && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/oeuvres/${oeuvre.id}/${oeuvre.cover}`, "src")}${addAttribute(`Cover de ${oeuvre.titre}`, "alt")} class="w-full h-auto object-cover rounded-lg mb-4" data-astro-cid-ieof2kw3>`} ${renderComponent($$result3, "LinkOeuvre", $$LinkOeuvre, { "oeuvre": {
    id: oeuvre.id,
    titre: oeuvre.titre
  }, "data-astro-cid-ieof2kw3": true })} <h2 class="text-lg font-light text-[#EFDE7C]" data-astro-cid-ieof2kw3> ${oeuvre.annee} </h2> <div class="text-center py-4" data-astro-cid-ieof2kw3> <a${addAttribute(`/compositeurs/${compositeur.id}`, "href")} class="bg-[#AE3939] h-[30px] opensans text-white font-semibold py-2 px-6 rounded-[8px] text-2xl shadow-xl transform transition-transform duration-300 hover:scale-105" data-astro-cid-ieof2kw3>
Détails
</a> </div> </div>`)} </div>`}` })}` : renderTemplate`<p class="text-red-500 text-center" data-astro-cid-ieof2kw3>Compositeur introuvable.</p>`} </section>${renderComponent($$result2, "FooterPage", $$FooterPage, { "data-astro-cid-ieof2kw3": true })} ` })} `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/compositeurs/[id].astro", void 0);

const $$file = "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/compositeurs/[id].astro";
const $$url = "/compositeurs/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
