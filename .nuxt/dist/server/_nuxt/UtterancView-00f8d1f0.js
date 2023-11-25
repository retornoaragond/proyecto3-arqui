import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "vue/server-renderer";
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
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=UtterancView-00f8d1f0.js.map
