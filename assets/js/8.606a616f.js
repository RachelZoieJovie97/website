(window.webpackJsonp=window.webpackJsonp||[]).push([[8,10],{581:function(t,a,e){},582:function(t,a,e){},588:function(t,a,e){"use strict";var i=e(608),n=e(122),s=(e(14),e(20),e(31),e(183),e(603),e(72),e(114),{name:"AlgoliaSearchBox",props:{options:{type:Object,default:function(){}}},data:function(){return{placeholder:void 0}},watch:{$lang:function(t){this.update(this.options,t)},options:function(t){this.update(t,this.$lang)}},mounted:function(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize:function(t,a){var s=this;Promise.all([Promise.all([e.e(0),e.e(4)]).then(e.t.bind(null,703,7)),Promise.all([e.e(0),e.e(4)]).then(e.t.bind(null,704,7))]).then((function(e){var o=Object(n.a)(e,1)[0];o=o.default;var l=t.algoliaOptions,r=void 0===l?{}:l;o(Object(i.a)(Object(i.a)({},t),{},{inputSelector:"#algolia-search-input",algoliaOptions:Object(i.a)({facetFilters:["lang:".concat(a)].concat(r.facetFilters||[])},r),handleSelected:function(t,a,e){var i=new URL(e.url),n=i.pathname,o=i.hash,l=n.replace(s.$site.base,"/");s.$router.push("".concat(l).concat(o))}}))}))},update:function(t,a){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,a)}}}),o=(e(590),e(29)),l=Object(o.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[a("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);a.a=l.exports},589:function(t,a,e){},590:function(t,a,e){"use strict";e(581)},591:function(t,a,e){"use strict";e(582)},597:function(t,a,e){"use strict";e(600);var i=e(606),n=e(607),s=e(595),o=e(588);function l(t,a){return t.ownerDocument.defaultView.getComputedStyle(t,null)[a]}var r={name:"Navbar",components:{SidebarButton:n.a,NavLinks:s.a,SearchBox:i.a,AlgoliaSearchBox:o.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,a=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),e=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-a-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(e(591),e(29)),u=Object(c.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(a){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v("\n\t\t\t"+t._s(t.$siteTitle)+"\n\t\t")]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.$page.frontmatter.hideSearch?e("div"):t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);a.a=u.exports},598:function(t,a,e){t.exports=e.p+"assets/img/netlify.48638dee.svg"},599:function(t,a,e){"use strict";e(589)},630:function(t,a,e){},644:function(t,a,e){"use strict";var i=[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"netlify"},[a("a",{attrs:{target:"_blank",href:"https://www.netlify.com/"}},[this._v("This site is powered by Netlify")]),this._v(" "),a("img",{attrs:{src:e(598)}})])}],n=e(646),s=e(647),o={name:"Home",components:{CloudDownloadIcon:n.a,BookOpenVariantIcon:s.a},computed:{data:function(){return this.$page.frontmatter},buttonDownload:function(){return{link:this.data.buttonDownloadLink,text:this.data.buttonDownload}},buttonGuidesLink:function(){return{link:this.data.buttonGuidesLink,text:this.data.buttonGuides}}}},l=(e(599),e(29)),r=Object(l.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"Logo"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n\t\t\t"+t._s(t.data.heroText||"Tachiyomi")+"\n\t\t")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n\t\t\t"+t._s(t.data.tagline||"Free and open source manga reader for Android")+"\n\t\t")]):t._e(),t._v(" "),t.data.buttonDownload||t.data.buttonGuides?e("p",{staticClass:"action"},[t.data.buttonDownload?e("a",{staticClass:"action-button action-button__Download",attrs:{tabindex:"0",rel:"next",href:t.data.buttonDownloadLink}},[e("CloudDownloadIcon"),t._v("\n\t\t\t\t"+t._s(t.data.buttonDownload)+"\n\t\t\t")],1):t._e(),t._v(" "),t.data.buttonGuides?e("a",{staticClass:"action-button action-button__Guides",attrs:{tabindex:"0",rel:"help",href:t.data.buttonGuidesLink}},[e("BookOpenVariantIcon"),t._v("\n\t\t\t\t"+t._s(t.data.buttonGuides)+"\n\t\t\t")],1):t._e()]):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,i){return e("div",{key:i,staticClass:"feature"},[e("div",{staticClass:"feature__Details"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])]),t._v(" "),e("section",{staticClass:"feature__Animation"},[e("img",{staticClass:"feature__Animation--dark",attrs:{alt:"Feature image (Dark theme)",src:t.$withBase("/assets/home_"+a.image+"-dark.png")}}),t._v(" "),e("img",{staticClass:"feature__Animation--light",attrs:{alt:"Feature image (Light theme)",src:t.$withBase("/assets/home_"+a.image+"-light.png")}})])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),e("footer",[e("div",{staticClass:"footer"},[e("div",{staticClass:"copyright"},[e("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0"}},[t._v("Open-source Apache Licensed")]),t._v("\n\t\t\t\t| Copyright © 2015"+t._s(" - "+(new Date).getFullYear())+" Javier Tomás\n\t\t\t")]),t._v(" "),t._m(0)])])],1)}),i,!1,null,null,null);a.a=r.exports},689:function(t,a,e){"use strict";e(630)},712:function(t,a,e){"use strict";e.r(a);var i=e(701),n={components:{PageEdit:e(645).a,Layout:i.default}},s=(e(689),e(29)),o=Object(s.a)(n,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",{class:this.$frontmatter.title},[a("main",{staticClass:"page"},[this._t("top"),this._v(" "),a("Content",{staticClass:"theme-default-content"}),this._v(" "),a("PageEdit"),this._v(" "),this._t("bottom")],2)])}),[],!1,null,null,null);a.default=o.exports}}]);