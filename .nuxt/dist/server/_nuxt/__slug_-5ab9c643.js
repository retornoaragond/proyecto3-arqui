import __nuxt_component_0 from "./HeaderView-96b9a5a8.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-8849d854.js";
import __nuxt_component_3 from "./FooterView-78aeca36.js";
import { withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { _ as _export_sfc, u as useRoute } from "../server.mjs";
import { u as useFetch } from "./fetch-8736ab90.js";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import __nuxt_component_2 from "./UtterancView-00f8d1f0.js";
import "ufo";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ohash";
const __slug__vue_vue_type_style_index_0_scoped_61d637b8_lang = "";
const _sfc_main = {
  __name: "[_slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: album, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://cms-una.000webhostapp.com/api/content/item/Albums/${route.params._slug}`, "$ratcgjAeLZ")), __temp = await __temp, __restore(), __temp);
    refresh();
    const sanitizeHtml = (html) => {
      {
        return html;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderView = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterView = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-61d637b8>`);
      _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
      _push(`<div class="row" data-v-61d637b8><div class="column image-column" data-v-61d637b8><img class="album-image"${ssrRenderAttr("src", `https://cms-una.000webhostapp.com/storage/uploads${unref(album).image.path}`)} alt="Portada del álbum" data-v-61d637b8></div><div class="column info-column" data-v-61d637b8><h4 data-v-61d637b8>${ssrInterpolate(unref(album).title)}</h4> Compositor: `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/composers/" + unref(album).composerId._id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(album).Composer)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(album).Composer), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br data-v-61d637b8><b data-v-61d637b8>Año de lanzamiento:</b> ${ssrInterpolate(unref(album).release_year)}; <br data-v-61d637b8><b data-v-61d637b8>Género:</b> ${ssrInterpolate(unref(album).genres)}; <br data-v-61d637b8> <b data-v-61d637b8>Sello discográfico:</b> ${ssrInterpolate(unref(album).record_label)}<br data-v-61d637b8> Número de pistas: ${ssrInterpolate(unref(album).tracks)}<br data-v-61d637b8><br data-v-61d637b8><b data-v-61d637b8>Descripción</b><br data-v-61d637b8><div data-v-61d637b8>${sanitizeHtml(unref(album).description)}</div><p data-v-61d637b8>Película asociada: `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/movies/" + unref(album).movieId._id
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(album).Movie)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(album).Movie), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><button class="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"${ssrRenderAttr("data-item-id", unref(album).id)}${ssrRenderAttr("data-item-price", unref(album).price)}${ssrRenderAttr("data-item-description", sanitizeHtml(unref(album).description))}${ssrRenderAttr("data-item-image", `https://cms-una.000webhostapp.com/storage/uploads${unref(album).image.path}`)}${ssrRenderAttr("data-item-name", unref(album).title)} data-v-61d637b8> 🛒 Comprame! </button></div></div>`);
      _push(ssrRenderComponent(__nuxt_component_2, null, null, _parent));
      _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/albums/[_slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61d637b8"]]);
export {
  __slug_ as default
};
//# sourceMappingURL=__slug_-5ab9c643.js.map
