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
    const { data: movie, refresh: rMovie } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/item/Movies/${route.params._slug}`, "$2rZddDcUh8")), __temp = await __temp, __restore(), __temp);
    rMovie();
    const { data: albums, refresh: rAlbum } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/items/Albums?filter={"movieId._id":"${route.params._slug}"}&fields={"title":true}`, "$qvh07dYMdT")), __temp = await __temp, __restore(), __temp);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-4e2f6bc7>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<div class="row" data-v-4e2f6bc7><div class="column image-column" data-v-4e2f6bc7><img class="movie-image"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/storage/uploads${unref(movie).image.path}`)} data-v-4e2f6bc7></div><div class="column info-column" data-v-4e2f6bc7><h4 data-v-4e2f6bc7>${ssrInterpolate(unref(movie).title)}</h4><b data-v-4e2f6bc7>A\xF1o de lanzamiento:</b> ${ssrInterpolate(unref(movie).release_year)}; <b data-v-4e2f6bc7>G\xE9neros:</b> ${ssrInterpolate(unref(movie).genres)}<br data-v-4e2f6bc7><br data-v-4e2f6bc7><b data-v-4e2f6bc7>Sinopsis</b><br data-v-4e2f6bc7><div data-v-4e2f6bc7>${sanitizeHtml(unref(movie).description)}</div><button class="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"${ssrRenderAttr("data-item-id", unref(movie).id)}${ssrRenderAttr("data-item-price", unref(movie).price)}${ssrRenderAttr("data-item-description", sanitizeHtml(unref(movie).description))}${ssrRenderAttr("data-item-image", `https://cms-una.000webhostapp.com/storage/uploads${unref(movie).image.path}`)}${ssrRenderAttr("data-item-name", unref(movie).title)} data-v-4e2f6bc7> \u{1F6D2} Comprame! </button><h5 data-v-4e2f6bc7>\xC1lbumes</h5><ul class="album-list" data-v-4e2f6bc7><!--[-->`);
      ssrRenderList(unref(albums), (album) => {
        _push(`<li class="album-item" data-v-4e2f6bc7>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movies/[_slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e2f6bc7"]]);

export { __slug_ as default };
//# sourceMappingURL=__slug_-8a79a9a6.mjs.map
