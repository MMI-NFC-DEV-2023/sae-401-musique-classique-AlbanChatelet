import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_lHe0fd0m.mjs';
import 'cookie';
import './chunks/shared_BTASe_bZ.mjs';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/","cacheDir":"file:///C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/node_modules/.astro/","outDir":"file:///C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/dist/","srcDir":"file:///C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/","publicDir":"file:///C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/public/","buildClientDir":"file:///C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/dist/","buildServerDir":"file:///C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.papyrus[data-astro-cid-rq3coulw]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-rq3coulw]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-rq3coulw]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-rq3coulw]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-rq3coulw]{font-family:Source Sans Pro,sans-serif}\n.papyrus[data-astro-cid-tkgxdtuz]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-tkgxdtuz]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-tkgxdtuz]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-tkgxdtuz]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-tkgxdtuz]{font-family:Source Sans Pro,sans-serif}\n"}],"routeData":{"route":"/auth-register","isIndex":false,"type":"page","pattern":"^\\/auth-register\\/?$","segments":[[{"content":"auth-register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth-register.astro","pathname":"/auth-register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.papyrus[data-astro-cid-rq3coulw]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-rq3coulw]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-rq3coulw]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-rq3coulw]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-rq3coulw]{font-family:Source Sans Pro,sans-serif}\n"},{"type":"external","src":"/_astro/_id_.DrAJ_N00.css"},{"type":"inline","content":".papyrus[data-astro-cid-ieof2kw3]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-ieof2kw3]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-ieof2kw3]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-ieof2kw3]{font-family:Mulish,sans-serif}\n"}],"routeData":{"route":"/compositeurs/[id]","isIndex":false,"type":"page","pattern":"^\\/compositeurs\\/([^/]+?)\\/?$","segments":[[{"content":"compositeurs","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/compositeurs/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.papyrus[data-astro-cid-rq3coulw]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-rq3coulw]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-rq3coulw]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-rq3coulw]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-rq3coulw]{font-family:Source Sans Pro,sans-serif}\n"}],"routeData":{"route":"/compositeurs","isIndex":true,"type":"page","pattern":"^\\/compositeurs\\/?$","segments":[[{"content":"compositeurs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/compositeurs/index.astro","pathname":"/compositeurs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.papyrus[data-astro-cid-rq3coulw]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-rq3coulw]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-rq3coulw]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-rq3coulw]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-rq3coulw]{font-family:Source Sans Pro,sans-serif}\n"},{"type":"external","src":"/_astro/_id_.DrAJ_N00.css"},{"type":"inline","content":".papyrus[data-astro-cid-kjzoaoa3]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-kjzoaoa3]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-kjzoaoa3]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-kjzoaoa3]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-kjzoaoa3]{font-family:Source Sans Pro,sans-serif}\n.papyrus[data-astro-cid-z3o52gel]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-z3o52gel]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-z3o52gel]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-z3o52gel]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-z3o52gel]{font-family:Source Sans Pro,sans-serif}\n"}],"routeData":{"route":"/formations/[id]","isIndex":false,"type":"page","pattern":"^\\/formations\\/([^/]+?)\\/?$","segments":[[{"content":"formations","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/formations/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.papyrus[data-astro-cid-rq3coulw]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-rq3coulw]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-rq3coulw]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-rq3coulw]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-rq3coulw]{font-family:Source Sans Pro,sans-serif}\n"}],"routeData":{"route":"/formations","isIndex":true,"type":"page","pattern":"^\\/formations\\/?$","segments":[[{"content":"formations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/formations/index.astro","pathname":"/formations","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.papyrus[data-astro-cid-rq3coulw]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-rq3coulw]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-rq3coulw]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-rq3coulw]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-rq3coulw]{font-family:Source Sans Pro,sans-serif}\n"},{"type":"external","src":"/_astro/_id_.DrAJ_N00.css"},{"type":"inline","content":".papyrus[data-astro-cid-cfup7upu]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-cfup7upu]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-cfup7upu]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-cfup7upu]{font-family:Mulish,sans-serif}\n"}],"routeData":{"route":"/oeuvres/[id]","isIndex":false,"type":"page","pattern":"^\\/oeuvres\\/([^/]+?)\\/?$","segments":[[{"content":"oeuvres","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/oeuvres/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.papyrus[data-astro-cid-rq3coulw]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-rq3coulw]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-rq3coulw]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-rq3coulw]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-rq3coulw]{font-family:Source Sans Pro,sans-serif}\n"}],"routeData":{"route":"/oeuvres","isIndex":true,"type":"page","pattern":"^\\/oeuvres\\/?$","segments":[[{"content":"oeuvres","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/oeuvres/index.astro","pathname":"/oeuvres","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}.papyrus[data-astro-cid-rq3coulw]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-rq3coulw]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-rq3coulw]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-rq3coulw]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-rq3coulw]{font-family:Source Sans Pro,sans-serif}\n.papyrus[data-astro-cid-kjzoaoa3]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-kjzoaoa3]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}.opensans[data-astro-cid-kjzoaoa3]{font-family:Open Sans Hebrew Condensed,sans-serif}.mulish[data-astro-cid-kjzoaoa3]{font-family:Mulish,sans-serif}.source_sans_pro[data-astro-cid-kjzoaoa3]{font-family:Source Sans Pro,sans-serif}\n.papyrus[data-astro-cid-j7pv25f6]{font-family:Papyrus,sans-serif}.fond_accueil[data-astro-cid-j7pv25f6]{background-image:url(/_astro/fond_accueil_sae.Bi5RbppZ.png);background-size:cover;background-position:center}@media (min-width: 1024px){.fond_accueil[data-astro-cid-j7pv25f6]{background-color:#000;background-image:none}}.opensans[data-astro-cid-j7pv25f6]{font-family:Open Sans Hebrew Condensed,sans-serif}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/auth-register.astro",{"propagation":"none","containsHead":true}],["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/compositeurs/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/compositeurs/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/formations/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/formations/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/oeuvres/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/oeuvres/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/auth-register@_@astro":"pages/auth-register.astro.mjs","\u0000@astro-page:src/pages/compositeurs/[id]@_@astro":"pages/compositeurs/_id_.astro.mjs","\u0000@astro-page:src/pages/compositeurs/index@_@astro":"pages/compositeurs.astro.mjs","\u0000@astro-page:src/pages/formations/[id]@_@astro":"pages/formations/_id_.astro.mjs","\u0000@astro-page:src/pages/formations/index@_@astro":"pages/formations.astro.mjs","\u0000@astro-page:src/pages/oeuvres/[id]@_@astro":"pages/oeuvres/_id_.astro.mjs","\u0000@astro-page:src/pages/oeuvres/index@_@astro":"pages/oeuvres.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CICByWyD.mjs","C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B7227eys.mjs","C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/components/HeaderPage.astro?astro&type=script&index=0&lang.ts":"_astro/HeaderPage.astro_astro_type_script_index_0_lang.DCgYYfpr.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/chate/Documents/GitHub/sae-401-musique-classique-AlbanChatelet/src/components/HeaderPage.astro?astro&type=script&index=0&lang.ts","const r=document.getElementById(\"burgerButton\"),e=document.getElementById(\"mobileMenu\");document.getElementById(\"menuLinks\");const t=document.getElementById(\"burgerIcon\"),n=document.getElementById(\"burgerIcon2\"),o=document.getElementById(\"burgerIcon3\");r.addEventListener(\"click\",()=>{e.classList.toggle(\"hidden\"),e.classList.contains(\"hidden\")?(t.style.transform=\"rotate(0deg)\",n.style.opacity=\"1\",o.style.transform=\"rotate(0deg)\"):(t.style.transform=\"rotate(45deg) translateY(8px)\",n.style.opacity=\"0\",o.style.transform=\"rotate(-45deg) translateY(-8px)\")});"]],"assets":["/_astro/fond_accueil_sae.Bi5RbppZ.png","/_astro/_id_.DrAJ_N00.css","/favicon.svg","/logo_music.webp"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"yMRwYV1dA5dPUkGvtZ1OiB0Ojhalq5LFU12TI66R6zc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
