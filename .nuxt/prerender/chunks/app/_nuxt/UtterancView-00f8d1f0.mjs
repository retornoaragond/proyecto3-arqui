import { useSSRContext } from 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/hookable/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unctx/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/defu/dist/defu.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unhead/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/h3/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/ufo/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/vue/server-renderer/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/destr/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/scule/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/klona/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/ohash/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  layout: "default",
  head: {
    script: [
      {
        src: "https://utteranc.es/client.js",
        repo: "retornoaragond/proyecto3-arqui",
        "issue-term": "pathname",
        label: "Comment",
        theme: "github-dark",
        crossorigin: "anonymous",
        body: true,
        async: true
      }
    ]
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/UtterancView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=UtterancView-00f8d1f0.mjs.map
