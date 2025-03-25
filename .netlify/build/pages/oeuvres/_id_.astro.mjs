import { f as createComponent, g as createAstro, j as renderHead, k as renderComponent, r as renderTemplate, l as Fragment, i as addAttribute } from '../../chunks/astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderPage, b as $$Layout, a as $$FooterPage } from '../../chunks/FooterPage_CLXmhLB7.mjs';
import { $ as $$LinkCompositeur } from '../../chunks/LinkCompositeur_BSTphBnr.mjs';
import PocketBase from 'pocketbase';
/* empty css                                            */
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    console.error("\u274C ID manquant pour la page \u0153uvre.");
    throw new Error("ID manquant pour la page \u0153uvre.");
  }
  const pb = new PocketBase("https://sae303.pockethost.io");
  let oeuvre = null;
  let interpretations = [];
  let formations = [];
  async function fetchData() {
    try {
      console.log("\u{1F4E1} R\xE9cup\xE9ration des interpr\xE9tations...");
      interpretations = await pb.collection("interpretations").getFullList({
        filter: `titre_oeuvre = "${id}"`
      });
      console.log(
        "\u2705 Interpr\xE9tations r\xE9cup\xE9r\xE9es :",
        JSON.stringify(interpretations, null, 2)
      );
    } catch (error) {
      console.error("\u274C Erreur interpr\xE9tations :", error);
    }
    if (interpretations.length > 0) {
      const interpretationIds = interpretations.map((i) => i.id);
      console.log("\u{1F9D0} IDs des interpr\xE9tations r\xE9cup\xE9r\xE9s :", interpretationIds);
      try {
        console.log("\u{1F4E1} R\xE9cup\xE9ration des formations...");
        formations = await pb.collection("formations").getFullList({
          filter: `interpretations = "${interpretationIds[0]}"`
        });
        console.log(
          "\u2705 Formations r\xE9cup\xE9r\xE9es :",
          JSON.stringify(formations, null, 2)
        );
      } catch (error) {
        console.error("\u274C Erreur formations :", error);
      }
    }
    try {
      console.log(
        "\u{1F4E1} R\xE9cup\xE9ration de l'\u0153uvre avec ses interpr\xE9tations et compositeur..."
      );
      oeuvre = await pb.collection("oeuvres").getOne(id, {
        expand: "compositeur,interpretations.titre_oeuvre"
      });
      console.log("\u2705 \u0152uvre r\xE9cup\xE9r\xE9e :", JSON.stringify(oeuvre, null, 2));
    } catch (error) {
      console.error("\u274C Erreur lors de la r\xE9cup\xE9ration de l'\u0153uvre :", error);
    }
  }
  await fetchData();
  const baseUrl = "https://sae303.pockethost.io";
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/public/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "HeaderPage", $$HeaderPage, { "data-astro-cid-cfup7upu": true })} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": oeuvre ? `D\xE9tails de ${oeuvre.titre}` : "\u0152uvre introuvable", "data-astro-cid-cfup7upu": true }, { "default": async ($$result2) => renderTemplate` <section class="flex flex-col items-center min-h-screen bg-black text-white py-12" data-astro-cid-cfup7upu> ${oeuvre ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-cfup7upu": true }, { "default": async ($$result3) => renderTemplate` <h1 class="text-4xl font-bold mb-6 papyrus text-jaune_petant tracking-wide" data-astro-cid-cfup7upu> ${oeuvre.titre} </h1> ${oeuvre.expand?.compositeur && renderTemplate`<p class="text-lg text-white pb-6" data-astro-cid-cfup7upu>
Composé par :
${renderComponent($$result3, "LinkCompositeur", $$LinkCompositeur, { "compositeur": {
    id: oeuvre.expand.compositeur.id,
    nom: oeuvre.expand.compositeur.nom
  }, "data-astro-cid-cfup7upu": true })} </p>`}${oeuvre.cover && renderTemplate`<img${addAttribute(`${baseUrl}/api/files/oeuvres/${oeuvre.id}/${oeuvre.cover}`, "src")}${addAttribute(`Photo de ${oeuvre.titre}`, "alt")} class="w-5/6 h-full mx-auto mb-4 object-cover" data-astro-cid-cfup7upu>`}${oeuvre.annee && renderTemplate`<p data-astro-cid-cfup7upu>Année de sortie : ${oeuvre.annee}</p>`}${interpretations.length > 0 && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" data-astro-cid-cfup7upu> <h2 class="text-3xl font-semibold mb-3 papyrus text-jaune_petant" data-astro-cid-cfup7upu>
Interprétations
</h2> ${interpretations.map((interpretation) => {
    formations.find(
      (f) => f.interpretations.includes(interpretation.id)
    );
    return renderTemplate`<div${addAttribute(interpretation.id, "key")} class="bg-fond_cards p-6 rounded-lg shadow-lg text-center" data-astro-cid-cfup7upu> <h3 class="text-xl font-semibold mb-2" data-astro-cid-cfup7upu> ${interpretation.titre} </h3> <p class="text-xl mulish text-jaune_petant mb-3" data-astro-cid-cfup7upu> ${interpretation.annee_sortie} </p>  ${interpretation.lien_spotify && renderTemplate`<a${addAttribute(interpretation.lien_spotify, "href")} target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-spotify text-black rounded-md hover:bg-green-700" data-astro-cid-cfup7upu>
Spotify
</a>`} ${interpretation.lien_deezer && renderTemplate`<a${addAttribute(interpretation.lien_deezer, "href")} target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-deezer text-white rounded-md hover:bg-purple-700" data-astro-cid-cfup7upu>
Deezer
</a>`} </div>`;
  })} </div>`}` })}` : renderTemplate`<p class="text-red-500 text-center" data-astro-cid-cfup7upu>Œuvre introuvable.</p>`} </section>${renderComponent($$result2, "FooterPage", $$FooterPage, { "data-astro-cid-cfup7upu": true })} ` })} `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/oeuvres/[id].astro", void 0);

const $$file = "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/oeuvres/[id].astro";
const $$url = "/oeuvres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
