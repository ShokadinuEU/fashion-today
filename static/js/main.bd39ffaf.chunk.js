(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(71)},34:function(e,a,t){},36:function(e,a,t){},57:function(e,a,t){},59:function(e,a,t){},61:function(e,a,t){},63:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),s=t(73),o=(t(34),t(3)),m=t(4),i=t(6),u=t(5),d=t(7),p=t(72),h=t(74),E=t(75),b=(t(36),t(25)),f=t.n(b),O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={data:[],isLoading:!1,error:null},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./mendata.json").then(function(a){return e.setState({data:a.data,isLoading:!1})}).catch(function(a){return e.setState({error:a,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.data,t=e.isLoading,n=e.error;return n?c.a.createElement("p",null,n.message):t?c.a.createElement("p",null,"Loading ..."):c.a.createElement("div",{className:"products-main"},c.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),c.a.createElement("hr",{className:"style-eight"}),c.a.createElement("div",{className:"products-wrapper"},a.map(function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("div",{className:"item-image"}),c.a.createElement("span",{className:"item-detail"},e.name),c.a.createElement("span",{className:"item-detail"},e.price),c.a.createElement("button",{key:e.id,className:"buy-it"},"Buy It"))})))}}]),a}(n.Component),j=(t(57),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"brands-main"},c.a.createElement("hr",{className:"style-one"}),c.a.createElement("h1",{className:"brands-header"},"-----Brands We Represent-----"),c.a.createElement("div",{className:"brands-image"}))}}]),a}(n.Component)),v=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement(O,null),c.a.createElement(j,null))}}]),a}(n.Component),N=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),y=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),k=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),w=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),L=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"})}}]),a}(n.Component),g=(t(59),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-menu"},c.a.createElement("div",{className:"brand"},c.a.createElement("a",{href:"/fashion-today",className:"link-home"}," | Fashion Today | ")),c.a.createElement("div",{className:"shop-cart"},c.a.createElement("i",{className:"fas fa-cart-arrow-down fa-2x"})),c.a.createElement("div",{className:"menu"},c.a.createElement("ul",null,c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/fashion-today/women"},"Women")),c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/fashion-today/men"},"Men")),c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/fashion-today/about"},"About")),c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/fashion-today/support"},"Support")),c.a.createElement("li",{className:"menu-link"},c.a.createElement("a",{href:"/fashion-today/faq"},"FAQ")))))}}]),a}(n.Component)),C=(t(61),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-text"},c.a.createElement("h1",null,"New Season Arrivals"),c.a.createElement("h4",null,"Check out the new treds"),c.a.createElement("button",{className:"header-button"},"Shop now"))))}}]),a}(n.Component)),U=(t(63),function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer-main"},c.a.createElement("div",{className:"our-store"},c.a.createElement("h4",null,"Our Store"),c.a.createElement("span",{className:"address"},"141 South Grand Avenue"),c.a.createElement("span",{className:"address-two"},"Los Angeles, CA 90015"),c.a.createElement("span",{className:"phone"},"(231) 748-2411"),c.a.createElement("p",null,"62 George Road E48NF, London, Essex")),c.a.createElement("div",{className:"blog-posts"},c.a.createElement("h4",null,"Blog Posts"),c.a.createElement("p",{className:"complains"},"Lorem ipsum dolor sit amet."),c.a.createElement("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("span",{className:"owner"}," | Created by ",c.a.createElement("a",{href:"https://github.com/ShokadinuEU",target:"_blank",rel:"noopener noreferrer",className:"sub-owner"},"ShokadinuEU"),"\xae | ")),c.a.createElement("div",{className:"support"},c.a.createElement("h4",null,"Support"),c.a.createElement("span",null,"Terms & Conditions"),c.a.createElement("span",null,"FAQ"),c.a.createElement("span",null,"Payments"),c.a.createElement("span",null,"Refounds"),c.a.createElement("span",null,"Track Order"),c.a.createElement("span",null,"Services")))}}]),a}(n.Component)),S=t(26),B=t.n(S)()({basename:"/fashion-today"}),x=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,{basename:"/fashion-today",history:B},c.a.createElement("div",null,c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"content"},c.a.createElement(g,null),c.a.createElement(C,null))),c.a.createElement(h.a,null,c.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/",component:v,exact:!0}),c.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/women",component:N,exact:!0}),c.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/men",component:y,exact:!0}),c.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/about",component:k,exact:!0}),c.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/support",component:w,exact:!0}),c.a.createElement(E.a,{path:"/{process.env.PUBLIC_URL}/faq",component:L}),c.a.createElement(E.a,{component:v})),c.a.createElement("div",{className:"main-footer"},c.a.createElement(U,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(s.a,{basename:"/"},c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.bd39ffaf.chunk.js.map