import { f as createComponent, g as createAstro, m as maybeRenderHead, i as addAttribute, r as renderTemplate } from './astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$LinkCompositeur = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkCompositeur;
  const { compositeur } = Astro2.props;
  return renderTemplate`${compositeur ? renderTemplate`${maybeRenderHead()}<a${addAttribute(`/compositeurs/${compositeur.id}`, "href")} class="text-white ">${compositeur.nom}</a>` : renderTemplate`<span class="text-white">Compositeur inconnu</span>`}`;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/components/LinkCompositeur.astro", void 0);

export { $$LinkCompositeur as $ };
