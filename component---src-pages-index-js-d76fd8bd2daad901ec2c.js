(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),c=n.n(i),o=n(154),s=n.n(o),l=n(153),u=n.n(l),p=(n(214),n(152),n(166),n(148)),m=n(161);n.d(t,"pageQuery",function(){return d});var f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.allContentfulRecipe.edges");return console.log(this.props),c.a.createElement(p.a,{location:this.props.location},c.a.createElement("div",{style:{background:"#fff"}},c.a.createElement(u.a,{title:e}),c.a.createElement("div",{className:"wrapper"},c.a.createElement("h2",{className:"section-headline"},"Recipe List"),c.a.createElement("ul",{className:"recipe-list"},t.map(function(e){var t=e.node;return c.a.createElement("li",{key:t.slug},c.a.createElement(m.a,{recipe:t}))})))))},t}(c.a.Component),d=(t.default=f,"2742559669")},145:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(33),s=n.n(o);n.d(t,"a",function(){return s.a});n(146),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},146:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},147:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(55),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},148:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),c=n.n(i),o=n(145),s=(n(159),function(e){var t=e.children;return c.a.createElement("div",{style:{maxWidth:1180,margin:"0 auto",position:"relative"}},t)}),l=n(160),u=n.n(l),p=function(){return c.a.createElement("nav",{role:"navigation"},c.a.createElement("ul",{className:u.a.navigation},c.a.createElement("li",{className:u.a.navigationItem},c.a.createElement(o.a,{to:"/"},"Home"))))},m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children);return"undefined"!=typeof __PREFIX_PATHS__&&__PREFIX_PATHS__&&"/ftg/",c.a.createElement(s,null,c.a.createElement(p,null),t)},t}(c.a.Component);t.a=m},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(145),c=(n(152),n(167)),o=n.n(c);t.a=function(e){var t=e.recipe;return r.a.createElement("div",{className:o.a.preview},r.a.createElement("img",{src:t.linkToImage}),r.a.createElement("h3",{className:o.a.previewTitle},r.a.createElement(i.a,{to:"/recipe/"+t.slug},t.title)),t.tags.map(function(e){return r.a.createElement("p",{className:o.a.tag,key:e},e)}))}},214:function(e,t,n){var a=n(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(18)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-d76fd8bd2daad901ec2c.js.map