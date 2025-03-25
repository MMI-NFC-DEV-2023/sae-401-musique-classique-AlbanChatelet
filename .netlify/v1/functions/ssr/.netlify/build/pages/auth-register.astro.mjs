import { f as createComponent, g as createAstro, j as renderHead, k as renderComponent, r as renderTemplate, l as Fragment } from '../chunks/astro/server_lHe0fd0m.mjs';
import 'kleur/colors';
import 'html-escaper';
import PocketBase from 'pocketbase';
import { $ as $$HeaderPage, a as $$FooterPage, b as $$Layout } from '../chunks/FooterPage_CLXmhLB7.mjs';
/* empty css                                         */
/* empty css                                         */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$AuthRegister = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthRegister;
  const pb = new PocketBase("https://sae303.pockethost.io");
  const urlParams = new URLSearchParams(Astro2.request.url);
  const code = urlParams.get("code");
  if (code) {
    try {
      const githubAuthResponse = await pb.collection("users").authWithOAuth("github", code);
      Astro2.locals.successMessage = "Connexion r\xE9ussie via GitHub !";
    } catch (error) {
      if (error instanceof Error) {
        Astro2.locals.errorMessage = `Erreur lors de la connexion via GitHub : ${error.message}`;
      } else {
        Astro2.locals.errorMessage = "Erreur inconnue lors de la connexion via GitHub.";
      }
    }
  }
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const passwordConfirmation = data.get("passwordConfirmation");
    const action = data.get("action");
    if (action === "signup") {
      if (password !== passwordConfirmation) {
        Astro2.locals.errorMessage = "Les mots de passe ne correspondent pas.";
        return;
      }
      if (!email || !email.includes("@")) {
        Astro2.locals.errorMessage = "L'email est invalide.";
        return;
      }
      if (password.length < 6) {
        Astro2.locals.errorMessage = "Le mot de passe doit \xEAtre d'au moins 6 caract\xE8res.";
        return;
      }
      try {
        const response = await pb.collection("users").create({
          email,
          password,
          passwordConfirm: password
          // Assure-toi que la confirmation du mot de passe est égale au mot de passe
        });
        Astro2.locals.successMessage = "Inscription r\xE9ussie ! Vous pouvez maintenant vous connecter.";
      } catch (error) {
        if (error instanceof Error) {
          Astro2.locals.errorMessage = `Erreur lors de l'inscription : ${error.message}`;
        } else {
          Astro2.locals.errorMessage = "Erreur inconnue lors de l'inscription.";
        }
      }
    } else if (action === "login") {
      try {
        const authResponse = await pb.collection("users").authWithPassword(email, password);
        Astro2.locals.successMessage = "Connexion r\xE9ussie !";
      } catch (error) {
        if (error instanceof Error) {
          Astro2.locals.errorMessage = `Erreur lors de la connexion : ${error.message}`;
        } else {
          Astro2.locals.errorMessage = "Erreur inconnue lors de la connexion.";
        }
      }
    } else if (action === "logout") {
      try {
        pb.authStore.clear();
        Astro2.locals.successMessage = "D\xE9connexion r\xE9ussie !";
      } catch (error) {
        if (error instanceof Error) {
          Astro2.locals.errorMessage = `Erreur lors de la d\xE9connexion : ${error.message}`;
        } else {
          Astro2.locals.errorMessage = "Erreur inconnue lors de la d\xE9connexion.";
        }
      }
    }
  }
  const isLoggedIn = pb.authStore.isValid;
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="public/styles/global.css">${renderHead()}</head> ${renderComponent($$result, "HeaderPage", $$HeaderPage, { "data-astro-cid-tkgxdtuz": true })} ${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Inscription / Connexion", "data-astro-cid-tkgxdtuz": true }, { "default": async ($$result2) => renderTemplate` <section class="bg-black" data-astro-cid-tkgxdtuz> <div class="container mx-auto p-4" data-astro-cid-tkgxdtuz> <h1 class="text-3xl font-semibold papyrus text-jaune_petant text-center mb-6" data-astro-cid-tkgxdtuz>
Inscription / Connexion
</h1>  ${Astro2.locals.successMessage && renderTemplate`<div class="bg-green-100 text-green-800 p-4 rounded-lg mb-4" data-astro-cid-tkgxdtuz> <p data-astro-cid-tkgxdtuz>${Astro2.locals.successMessage}</p> </div>`} ${Astro2.locals.errorMessage && renderTemplate`<div class="bg-red-100 text-red-800 p-4 rounded-lg mb-4" data-astro-cid-tkgxdtuz> <p data-astro-cid-tkgxdtuz>${Astro2.locals.errorMessage}</p> </div>`}  ${isLoggedIn ? renderTemplate`<form method="post" class="text-center" data-astro-cid-tkgxdtuz> <input type="hidden" name="action" value="logout" data-astro-cid-tkgxdtuz> <button type="submit" class="bg-[#AE3939] text-white opensans font-semibold py-3 px-5 mt-28 rounded-lg shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" data-astro-cid-tkgxdtuz>
Se déconnecter
</button> <div class="pb-[400px]" data-astro-cid-tkgxdtuz> <p class="text-jaune_petant mulish pt-4" data-astro-cid-tkgxdtuz>Vous êtes connecté</p> </div> </form>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-tkgxdtuz": true }, { "default": async ($$result3) => renderTemplate`<form method="post" class=" max-w-md mx-auto p-6 bg-fond_cards rounded-lg shadow-lg mb-6" data-astro-cid-tkgxdtuz> <input type="hidden" name="action" value="signup" data-astro-cid-tkgxdtuz> <label for="email" class="block text-lg font-medium text-jaune_petant mb-2" data-astro-cid-tkgxdtuz>
Email
</label> <input type="email" name="email" id="email" required class="w-full p-3 border-2 border-jaune_petant rounded-md mb-4" data-astro-cid-tkgxdtuz> <label for="password" class="block text-lg font-medium text-jaune_petant mb-2" data-astro-cid-tkgxdtuz>
Mot de passe
</label> <input type="password" name="password" id="password" minlength="6" required class="w-full p-3 border-2 border-jaune_petant rounded-md mb-4" data-astro-cid-tkgxdtuz> <label for="passwordConfirmation" class="block text-lg font-medium text-jaune_petant mb-2" data-astro-cid-tkgxdtuz>
Confirmer le mot de passe
</label> <input type="password" name="passwordConfirmation" id="passwordConfirmation" minlength="6" required class="w-full p-3 border-2 border-jaune_petant rounded-md mb-6" data-astro-cid-tkgxdtuz> <button type="submit" class="w-full bg-[#AE3939] opensans text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" data-astro-cid-tkgxdtuz>
S'inscrire
</button> </form> <p class="text-jaune_petant mulish pb-4 md:text-center" data-astro-cid-tkgxdtuz>
Déjà un compte ? Connecte toi !
</p> <form method="post" class="max-w-md mx-auto p-6 bg-fond_cards rounded-lg shadow-lg" data-astro-cid-tkgxdtuz> <input type="hidden" name="action" value="login" data-astro-cid-tkgxdtuz> <label for="email" class="block text-lg font-medium text-jaune_petant mb-2" data-astro-cid-tkgxdtuz>
Email
</label> <input type="email" name="email" id="email" required class="w-full p-3 border-2 border-jaune_petant rounded-md mb-4" data-astro-cid-tkgxdtuz> <label for="password" class="block text-lg font-medium text-jaune_petant mb-2" data-astro-cid-tkgxdtuz>
Mot de passe
</label> <input type="password" name="password" id="password" minlength="6" required class="w-full p-3 border-2 border-jaune_petant rounded-md mb-4" data-astro-cid-tkgxdtuz> <button type="submit" class="w-full bg-jaune_petant text-black font-semibold py-3 px-5 rounded-lg shadow-lg hover:bg-couleur_or opensans focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" data-astro-cid-tkgxdtuz>
Se connecter
</button> </form> <form method="post" action="https://sae303.pockethost.io/api/collections/users/auth/github" class="max-w-md mx-auto p-6 bg-black" data-astro-cid-tkgxdtuz> <input type="hidden" name="action" value="github" data-astro-cid-tkgxdtuz> <button type="submit" class="w-full bg-[#4078c0] text-white font-semibold py-3 px-5 rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" data-astro-cid-tkgxdtuz>
Se connecter avec GitHub
</button> </form> ` })}`} </div> </section>${renderComponent($$result2, "FooterPage", $$FooterPage, { "data-astro-cid-tkgxdtuz": true })} ` })} `;
}, "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/auth-register.astro", void 0);

const $$file = "C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/auth-register.astro";
const $$url = "/auth-register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AuthRegister,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
