(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(71)},34:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),m=t(72),s=(t(34),t(3)),o=t(4),i=t(6),u=t(5),E=t(7),d=t(73),p=t(75),h=t(74),b=(t(36),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-menu"},c.a.createElement("div",{className:"brand"},c.a.createElement("a",{href:"home",className:"link-home"}," | Fashion Today | ")),c.a.createElement("div",{className:"shop-cart"},c.a.createElement("i",{className:"fas fa-cart-arrow-down fa-2x"})),c.a.createElement("div",{className:"menu"},c.a.createElement("ul",null,c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/women"},"Women")),c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/men"},"Men")),c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/about"},"About")),c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/support"},"Support")),c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/faq"},"FAQ")))))}}]),a}(n.Component)),f=(t(38),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-text"},c.a.createElement("h1",null,"New Season Arrivals"),c.a.createElement("h4",null,"Check out the new treds"),c.a.createElement("button",{className:"header-button"},"Shop now"))))}}]),a}(n.Component)),O=(t(40),t(25)),j=t.n(O),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={data:[],isLoading:!1,error:null},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),j.a.get("./mendata.json").then(function(a){return e.setState({data:a.data,isLoading:!1})}).catch(function(a){return e.setState({error:a,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.data,t=e.isLoading,n=e.error;return n?c.a.createElement("p",null,n.message):t?c.a.createElement("p",null,"Loading ..."):c.a.createElement("div",{className:"products-main"},c.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),c.a.createElement("hr",{className:"style-eight"}),c.a.createElement("div",{className:"products-wrapper"},a.map(function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("div",{className:"item-image"}),c.a.createElement("span",{className:"item-detail"},e.name),c.a.createElement("span",{className:"item-detail"},e.price),c.a.createElement("button",{key:e.id,className:"buy-it"},"Buy It"))})))}}]),a}(n.Component),N=(t(61),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"brands-main"},c.a.createElement("hr",{className:"style-one"}),c.a.createElement("h1",{className:"brands-header"},"-----Brands We Represent-----"),c.a.createElement("div",{className:"brands-image"}))}}]),a}(n.Component)),y=(t(63),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer-main"},c.a.createElement("div",{className:"our-store"},c.a.createElement("h4",null,"Our Store"),c.a.createElement("span",{className:"address"},"141 South Grand Avenue"),c.a.createElement("span",{className:"address-two"},"Los Angeles, CA 90015"),c.a.createElement("span",{className:"phone"},"(231) 748-2411"),c.a.createElement("p",null,"62 George Road E48NF, London, Essex")),c.a.createElement("div",{className:"blog-posts"},c.a.createElement("h4",null,"Blog Posts"),c.a.createElement("p",{className:"complains"},"Lorem ipsum dolor sit amet."),c.a.createElement("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("span",{className:"owner"}," | Created by ",c.a.createElement("a",{href:"https://github.com/ShokadinuEU",target:"_blank",rel:"noopener noreferrer",className:"sub-owner"},"ShokadinuEU"),"\xae | ")),c.a.createElement("div",{className:"support"},c.a.createElement("h4",null,"Support"),c.a.createElement("span",null,"Terms & Conditions"),c.a.createElement("span",null,"FAQ"),c.a.createElement("span",null,"Payments"),c.a.createElement("span",null,"Refounds"),c.a.createElement("span",null,"Track Order"),c.a.createElement("span",null,"Services")))}}]),a}(n.Component)),k=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"content"},c.a.createElement(b,null),c.a.createElement(f,null),c.a.createElement(v,null),c.a.createElement(N,null)),c.a.createElement("div",{className:"main-footer"},c.a.createElement(y,null)))}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"content"},c.a.createElement(b,null),c.a.createElement(f,null)),c.a.createElement("div",{className:"main-footer"},c.a.createElement(y,null)))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"content"},c.a.createElement(b,null),c.a.createElement(f,null)),c.a.createElement("div",{className:"main-footer"},c.a.createElement(y,null)))}}]),a}(n.Component),C=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"content"},c.a.createElement(b,null),c.a.createElement(f,null)),c.a.createElement("div",{className:"main-footer"},c.a.createElement(y,null)))}}]),a}(n.Component),S=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"content"},c.a.createElement(b,null),c.a.createElement(f,null)),c.a.createElement("div",{className:"main-footer"},c.a.createElement(y,null)))}}]),a}(n.Component),L=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"content"},c.a.createElement(b,null),c.a.createElement(f,null)),c.a.createElement("div",{className:"main-footer"},c.a.createElement(y,null)))}}]),a}(n.Component),A=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,{basename:"/fashion-today"},c.a.createElement("div",{className:"main-content"},c.a.createElement(p.a,{className:"content-inside"},c.a.createElement(h.a,{path:"/home",component:k,exact:!0}),c.a.createElement(h.a,{path:"/women",component:w}),c.a.createElement(h.a,{path:"/men",component:g}),c.a.createElement(h.a,{path:"/about",component:C}),c.a.createElement(h.a,{path:"/support",component:S}),c.a.createElement(h.a,{path:"/faq",component:L}),c.a.createElement(h.a,{component:k}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(27),B=t.n(x)()({basename:"/fashion-today"});l.a.render(c.a.createElement(m.a,{history:B},c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.3a6d9753.chunk.js.map