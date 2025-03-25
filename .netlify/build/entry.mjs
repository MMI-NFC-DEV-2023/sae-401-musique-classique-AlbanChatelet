import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_COZ1GFdX.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/auth-register.astro.mjs');
const _page2 = () => import('./pages/compositeurs/_id_.astro.mjs');
const _page3 = () => import('./pages/compositeurs.astro.mjs');
const _page4 = () => import('./pages/formations/_id_.astro.mjs');
const _page5 = () => import('./pages/formations.astro.mjs');
const _page6 = () => import('./pages/oeuvres/_id_.astro.mjs');
const _page7 = () => import('./pages/oeuvres.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/auth-register.astro", _page1],
    ["src/pages/compositeurs/[id].astro", _page2],
    ["src/pages/compositeurs/index.astro", _page3],
    ["src/pages/formations/[id].astro", _page4],
    ["src/pages/formations/index.astro", _page5],
    ["src/pages/oeuvres/[id].astro", _page6],
    ["src/pages/oeuvres/index.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "ecb1abe2-d6b7-460e-a5d2-b457827df867"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
