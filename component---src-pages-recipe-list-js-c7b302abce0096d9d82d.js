(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=(a(145),a(154)),l=a.n(o),s=a(153),u=a.n(s),p=(a(215),a(148)),m=a(161),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=l()(this,"props.data.site.siteMetadata.title"),t=l()(this,"props.data.allContentfulRecipe.edges");return c.a.createElement(p.a,{location:this.props.location},c.a.createElement("div",{style:{background:"#fff"}},c.a.createElement(u.a,{title:e}),c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",{className:"section-headline"},"Recipes Are Here"),c.a.createElement("ul",{className:"recipe-list"},t.map(function(e){var t=e.node;return c.a.createElement("li",{key:t.slug},c.a.createElement(m.a,{recipe:t}))})))))},t}(c.a.Component);t.default=f;var d="149099816"},145:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(146),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},146:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},147:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},148:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=a(145),l=(a(159),function(e){var t=e.children;return c.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto",position:"relative"}},t)}),s=a(160),u=a.n(s),p=function(){return c.a.createElement("nav",{role:"navigation"},c.a.createElement("ul",{className:u.a.navigation},c.a.createElement("li",{className:u.a.navigationItem},c.a.createElement(o.a,{to:"/"},"Home"))))},m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/feed-the-gillmores/",c.a.createElement(l,null,c.a.createElement(p,null),t)},t}(c.a.Component);t.a=m},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(145),c=(a(152),a(167)),o=a.n(c);t.a=function(e){var t=e.recipe;return r.a.createElement("div",{className:o.a.preview},r.a.createElement("img",{src:t.linkToImage}),r.a.createElement("h3",{className:o.a.previewTitle},r.a.createElement(i.a,{to:"/recipe/"+t.slug},t.title)),t.tags.map(function(e){return r.a.createElement("p",{className:o.a.tag,key:e},e)}))}}}]);
//# sourceMappingURL=component---src-pages-recipe-list-js-c7b302abce0096d9d82d.js.map