(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(72)},32:function(e,t,a){},34:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),s=a.n(r),l=a(75),i=(a(32),a(3)),m=a(4),o=a(6),u=a(5),d=a(7),E=a(74),h=a(77),p=a(76),b=(a(34),a(12)),f=a.n(b),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./hotItems.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?c.a.createElement("p",null,n.message):a?c.a.createElement("p",null,"Loading ..."):c.a.createElement("div",{className:"products-main"},c.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),c.a.createElement("hr",{className:"style-eight"}),c.a.createElement("div",{className:"products-wrapper",id:"go-to"},t.map(function(e){return c.a.createElement("div",{key:e.id,className:"item"},c.a.createElement("div",{className:"item-image"}),c.a.createElement("span",{className:"item-detail"},e.name),c.a.createElement("span",{className:"item-detail"},e.price),c.a.createElement("button",{className:"buy-it"},"Buy It"))})),c.a.createElement("div",{className:"home-main"},c.a.createElement("i",{class:"fas fa-home fa-2x home-button"})))}}]),t}(n.Component),N=(a(55),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"brands-main"},c.a.createElement("hr",{className:"style-one"}),c.a.createElement("h1",{className:"brands-header"},"-----Brands We Represent-----"),c.a.createElement("div",{className:"brands-image"}))}}]),t}(n.Component)),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement(v,null),c.a.createElement(N,null))}}]),t}(n.Component),O=a(73),g=(a(57),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./women.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?c.a.createElement("p",null,n.message):a?c.a.createElement("p",null,"Loading ..."):c.a.createElement("div",{className:"products-main"},c.a.createElement("h1",{className:"products-header",id:"hot-items"},"-----Latest Products-----"),c.a.createElement("hr",{className:"style-eight"}),c.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return c.a.createElement("div",{key:e.id,className:"women"},c.a.createElement("div",{className:"women-image"}),c.a.createElement("span",{className:"women-detail"},e.name),c.a.createElement("span",{className:"women-detail"},e.price),c.a.createElement("button",{className:"buy-it"},"Buy It"))})),c.a.createElement("div",{className:"home-main"},c.a.createElement(O.a,{to:"/home"},c.a.createElement("i",{class:"fas fa-home fa-2x home-button"}))))}}]),t}(n.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,null))}}]),t}(n.Component),k=(a(61),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./men.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?c.a.createElement("p",null,n.message):a?c.a.createElement("p",null,"Loading ..."):c.a.createElement("div",{className:"products-main"},c.a.createElement("h1",{className:"products-header",id:"hot-items"},"-----Latest Products-----"),c.a.createElement("hr",{className:"style-eight"}),c.a.createElement("div",{className:"products-wrapper",id:"go-to-men"},t.map(function(e){return c.a.createElement("div",{key:e.id,className:"men"},c.a.createElement("div",{className:"men-image"}),c.a.createElement("span",{className:"men-detail"},e.name),c.a.createElement("span",{className:"men-detail"},e.price),c.a.createElement("button",{className:"buy-it"},"Buy It"))})),c.a.createElement("div",{className:"home-main"},c.a.createElement(O.a,{to:"/home"},c.a.createElement("i",{class:"fas fa-home fa-2x home-button"}))))}}]),t}(n.Component)),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement(k,null))}}]),t}(n.Component),w=(a(63),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),f.a.get("./kids.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?c.a.createElement("p",null,n.message):a?c.a.createElement("p",null,"Loading ..."):c.a.createElement("div",{className:"products-main"},c.a.createElement("h1",{className:"products-header",id:"hot-items"},"-----Latest Products-----"),c.a.createElement("hr",{className:"style-eight"}),c.a.createElement("div",{className:"products-wrapper",id:"go-to-kids"},t.map(function(e){return c.a.createElement("div",{key:e.id,className:"kids"},c.a.createElement("div",{className:"kids-image"}),c.a.createElement("span",{className:"kids-detail"},e.name),c.a.createElement("span",{className:"kids-detail"},e.price),c.a.createElement("button",{className:"buy-it"},"Buy It"))})),c.a.createElement("div",{className:"home-main"},c.a.createElement(O.a,{to:"/home"},c.a.createElement("i",{class:"fas fa-home fa-2x home-button"}))))}}]),t}(n.Component)),S=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement(w,null))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"})}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-content"})}}]),t}(n.Component),B=(a(65),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-menu"},c.a.createElement("div",{className:"brand"},c.a.createElement(O.a,{to:"/",className:"brand"}," | Fashion Today | ")),c.a.createElement("div",{className:"shop-cart"},c.a.createElement("i",{className:"fas fa-cart-arrow-down fa-2x"})),c.a.createElement("div",{className:"menu"},c.a.createElement("ul",null,c.a.createElement("li",{className:"menu-link"},c.a.createElement(O.a,{to:"/women"},"Women")),c.a.createElement("li",{className:"menu-link"},c.a.createElement(O.a,{to:"/men"},"Men")),c.a.createElement("li",{className:"menu-link"},c.a.createElement(O.a,{to:"/kids"},"Kids")),c.a.createElement("li",{className:"menu-link"},c.a.createElement(O.a,{to:"/support"},"Support")),c.a.createElement("li",{className:"menu-link"},c.a.createElement(O.a,{to:"/faq"},"FAQ")))))}}]),t}(n.Component)),A=(a(67),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-header"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-text"},c.a.createElement("h1",null,"New Season Arrivals"),c.a.createElement("h4",null,"Check out the new treds"),c.a.createElement("button",{className:"header-button"},c.a.createElement("a",{href:"#go-to",className:"hot-items"},"Shop Now")))))}}]),t}(n.Component)),I=(a(69),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer-main"},c.a.createElement("div",{className:"our-store"},c.a.createElement("h4",null,"Our Store"),c.a.createElement("span",{className:"address"},"141 South Grand Avenue"),c.a.createElement("span",{className:"address-two"},"Los Angeles, CA 90015"),c.a.createElement("span",{className:"phone"},"(231) 748-2411"),c.a.createElement("p",null,"62 George Road E48NF, London, Essex")),c.a.createElement("div",{className:"blog-posts"},c.a.createElement("h4",null,"Blog Posts"),c.a.createElement("p",{className:"complains"},"Lorem ipsum dolor sit amet."),c.a.createElement("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit."),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("span",{className:"owner"}," | Created by ",c.a.createElement("a",{href:"https://github.com/ShokadinuEU",target:"_blank",rel:"noopener noreferrer",className:"sub-owner"},"ShokadinuEU"),"\xae | ")),c.a.createElement("div",{className:"support"},c.a.createElement("h4",null,"Support"),c.a.createElement("span",null,"Terms & Conditions"),c.a.createElement("span",null,"FAQ"),c.a.createElement("span",null,"Payments"),c.a.createElement("span",null,"Refounds"),c.a.createElement("span",null,"Track Order"),c.a.createElement("span",null,"Services")))}}]),t}(n.Component)),P=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(E.a,null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"content"},c.a.createElement(B,null),c.a.createElement(A,null))),c.a.createElement(h.a,null,c.a.createElement(p.a,{exact:!0,path:"/",component:j}),c.a.createElement(p.a,{exact:!0,path:"/women",component:y}),c.a.createElement(p.a,{exact:!0,path:"/men",component:L}),c.a.createElement(p.a,{exact:!0,path:"/kids",component:S}),c.a.createElement(p.a,{exact:!0,path:"/support",component:C}),c.a.createElement(p.a,{exact:!0,path:"/faq",component:x}),c.a.createElement(p.a,{exact:!0,component:j})),c.a.createElement("div",{className:"main-footer"},c.a.createElement(I,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(l.a,null,c.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.a8b7406a.chunk.js.map