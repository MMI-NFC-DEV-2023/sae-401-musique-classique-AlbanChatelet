import { f as createComponent, g as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$LinkInterpretation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkInterpretation;
  const { interpretation } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="text-white self-start source_sans_pro text-3xl hover:underline" data-astro-cid-kjzoaoa3> ${interpretation.nom_interpretation} </a> `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/components/LinkInterpretation.astro", void 0);

export { $$LinkInterpretation as $ };
