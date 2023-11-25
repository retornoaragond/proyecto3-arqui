import __nuxt_component_0 from './HeaderView-96b9a5a8.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-8849d854.mjs';
import __nuxt_component_2 from './UtterancView-00f8d1f0.mjs';
import __nuxt_component_3 from './FooterView-78aeca36.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/vue/index.mjs';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import { u as useFetch } from './fetch-8736ab90.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/ufo/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/hookable/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unctx/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/defu/dist/defu.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/unhead/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/estebanespinoza/Documents/GitHub/proyecto3-arqui/node_modules/h3/dist/index.mjs';
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
  __name: "[_slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: composer, refresh: rComposer } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/item/Composers/${route.params._slug}`, "$80no9nMKuz")), __temp = await __temp, __restore(), __temp);
    rComposer();
    const { data: albums, refresh: rAlbum } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums?filter={"composerId._id":"${route.params._slug}"}&fields={"title":true}`, "$5eNZ8gTK3J")), __temp = await __temp, __restore(), __temp);
    rAlbum();
    const sanitizeHtml = (html) => {
      {
        return html;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UtterancView = __nuxt_component_2;
      const _component_FooterView = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-5b2e2ecd>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<div class="row" data-v-5b2e2ecd><div class="column image-column" data-v-5b2e2ecd><img class="composer-image"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/storage/uploads${unref(composer).image.path}`)} data-v-5b2e2ecd></div><div class="column info-column" data-v-5b2e2ecd><h4 data-v-5b2e2ecd>${ssrInterpolate(unref(composer).name)}</h4><b data-v-5b2e2ecd>Nacionalidad:</b> ${ssrInterpolate(unref(composer).nationality)};<br data-v-5b2e2ecd> <b data-v-5b2e2ecd>Fecha de nacimiento:</b> ${ssrInterpolate(unref(composer).birth_date)}<br data-v-5b2e2ecd> G\xE9neros musicales: ${ssrInterpolate(unref(composer).music_genres)}<br data-v-5b2e2ecd><br data-v-5b2e2ecd><b data-v-5b2e2ecd>Biograf\xEDa</b><br data-v-5b2e2ecd><div data-v-5b2e2ecd>${sanitizeHtml(unref(composer).description)}</div><h5 data-v-5b2e2ecd>\xC1lbumes</h5><ul class="album-list" data-v-5b2e2ecd><!--[-->`);
      ssrRenderList(unref(albums), (album) => {
        _push(`<li class="album-item" data-v-5b2e2ecd>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/albums/` + album._id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(album.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(album.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
      _push(ssrRenderComponent(_component_UtterancView, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/composers/[_slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5b2e2ecd"]]);

export { __slug_ as default };
//# sourceMappingURL=__slug_-6f265bc5.mjs.map
