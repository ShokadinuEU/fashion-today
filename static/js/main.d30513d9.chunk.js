(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},114:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){},139:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),s=a(153),i=(a(65),a(3)),o=a(4),m=a(7),u=a(5),d=a(6),h=a(152),p=a(156),E=a(157),b=(a(67),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"brands-main"},l.a.createElement("hr",{className:"style-one"}),l.a.createElement("h1",{className:"brands-header"},"-----Brands We Represent-----"),l.a.createElement("div",{className:"brands-image"}))}}]),t}(n.Component)),f=a(155),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(f.a.Item,null,l.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img1.jpeg"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img2.jpeg"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img3.jpeg"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img4.jpeg"})),l.a.createElement(f.a.Item,null,l.a.createElement("img",{width:"auto",height:"35vh",alt:"900x500",src:"./slideImg/img5.jpeg"})))}}]),t}(n.Component),v=(a(112),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-header"},l.a.createElement("div",{className:"header"},l.a.createElement(g,null),l.a.createElement("div",{className:"header-text"},l.a.createElement("h2",null,"New Season Arrivals"),l.a.createElement("h4",null,"Check out the new trends"),l.a.createElement("button",{className:"header-button"},l.a.createElement("a",{href:"#go-to",className:"hot-items"},"Shop Now")))))}}]),t}(n.Component)),O=Object(n.lazy)(function(){return a.e(1).then(a.bind(null,154))}),j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-content"},l.a.createElement(v,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading Items...")},l.a.createElement(O,null)),l.a.createElement(b,null))}}]),t}(n.Component),N=(a(114),a(15)),y=a.n(N),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),y.a.get("./women.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?l.a.createElement("p",null,n.message):a?l.a.createElement("p",null,"Loading ..."):l.a.createElement("div",{className:"products-main"},l.a.createElement(v,null),l.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),l.a.createElement("hr",{className:"style-eight"}),l.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return l.a.createElement("div",{key:e.id,className:"women"},l.a.createElement("div",{className:"women-image"}),l.a.createElement("span",{className:"women-detail"},e.name),l.a.createElement("span",{className:"women-detail"},e.price),l.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component),k=(a(135),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),y.a.get("./men.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?l.a.createElement("p",null,n.message):a?l.a.createElement("p",null,"Loading ..."):l.a.createElement("div",{className:"products-main"},l.a.createElement(v,null),l.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),l.a.createElement("hr",{className:"style-eight"}),l.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return l.a.createElement("div",{key:e.id,className:"men"},l.a.createElement("div",{className:"men-image"}),l.a.createElement("span",{className:"men-detail"},e.name),l.a.createElement("span",{className:"men-detail"},e.price),l.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component)),S=(a(137),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={data:[],isLoading:!1,error:null},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),y.a.get("./kids.json").then(function(t){return e.setState({data:t.data,isLoading:!1})}).catch(function(t){return e.setState({error:t,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.isLoading,n=e.error;return n?l.a.createElement("p",null,n.message):a?l.a.createElement("p",null,"Loading ..."):l.a.createElement("div",{className:"products-main"},l.a.createElement(v,null),l.a.createElement("h1",{className:"products-header"},"-----Latest Products-----"),l.a.createElement("hr",{className:"style-eight"}),l.a.createElement("div",{className:"products-wrapper"},t.map(function(e){return l.a.createElement("div",{key:e.id,className:"kids"},l.a.createElement("div",{className:"kids-image"}),l.a.createElement("span",{className:"kids-detail"},e.name),l.a.createElement("span",{className:"kids-detail"},e.price),l.a.createElement("button",{className:"buy-it"},"Buy It"))})))}}]),t}(n.Component)),C=a(59),x=a(25),I=a(17),U=(a(139),function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:e.name,className:"form-label"},e.title),l.a.createElement("div",{className:"checkbox"},e.options.map(function(t){return l.a.createElement("label",{key:t,className:"checkbox-inline"},l.a.createElement("input",{id:e.name,name:e.name,onChange:e.handleChange,value:t,checked:e.selectedOptions.indexOf(t)>-1,type:"checkbox"})," ",t)})))}),L=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:e.name,className:"form-label"},e.title),l.a.createElement("input",Object.assign({className:"form-control",id:e.name,name:e.name,type:e.inputType,value:e.value,onChange:e.handleChange,placeholder:e.placeholder},e)))},T=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"form-label"},e.title),l.a.createElement("textarea",{className:"form-control",name:e.name,rows:e.rows,cols:e.cols,value:e.value,onChange:e.handleChange,placeholder:e.placeholder}))},A=function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:e.name}," ",e.title," "),l.a.createElement("select",{id:e.name,name:e.name,value:e.value,onChange:e.handleChange,className:"form-control"},l.a.createElement("option",{value:"",disabled:!0},e.placeholder),e.options.map(function(e){return l.a.createElement("option",{key:e,value:e,label:e},e)})))},F=function(e){return l.a.createElement("button",{style:e.style,className:"primary"===e.type?"btn btn-primary":"btn btn-secondary",onClick:e.action},e.title)},B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFullName=function(e){var t=e.target.value;a.setState(function(e){return{newUser:Object(I.a)({},e.newUser,{name:t})}},function(){return console.log(a.state.newUser)})},a.handleAge=function(e){var t=e.target.value;a.setState(function(e){return{newUser:Object(I.a)({},e.newUser,{age:t})}},function(){return console.log(a.state.newUser)})},a.handleInput=function(e){var t=e.target.value,n=e.target.name;a.setState(function(e){return{newUser:Object(I.a)({},e.newUser,Object(x.a)({},n,t))}},function(){return console.log(a.state.newUser)})},a.handleTextArea=function(e){console.log("Inside handleTextArea");var t=e.target.value;a.setState(function(e){return{newUser:Object(I.a)({},e.newUser,{about:t})}},function(){return console.log(a.state.newUser)})},a.handleCheckBox=function(e){var t,n=e.target.value;t=a.state.newUser.skills.indexOf(n)>-1?a.state.newUser.skills.filter(function(e){return e!==n}):Object(C.a)(a.state.newUser.skills).concat([n]),a.setState(function(e){return{newUser:Object(I.a)({},e.newUser,{skills:t})}})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.newUser;a.setState(function(e){return{newUser:t}}),console.log(t)},a.handleClearForm=function(e){e.preventDefault(),a.setState({newUser:{name:"",email:"",age:"",gender:"",skills:[],about:""}})},a.state={newUser:{name:"",age:"",gender:"",skills:[],about:""},genderOptions:["Male","Female","Others"],skillOptions:["Shopping","Transaction","Return","Other"]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"container-fluid",onSubmit:this.handleFormSubmit},l.a.createElement(L,{inputType:"text",title:"Full Name",name:"name",value:this.state.newUser.name,placeholder:"Enter your name",handleChange:this.handleInput})," ",l.a.createElement(L,{inputType:"email",title:"Email",name:"email",value:this.state.newUser.email,placeholder:"Enter your email",handleChange:this.handleInput})," ",l.a.createElement(L,{inputType:"number",name:"age",title:"Age",value:this.state.newUser.age,placeholder:"Enter your age",handleChange:this.handleAge})," ",l.a.createElement(A,{title:"Gender",name:"gender",options:this.state.genderOptions,value:this.state.newUser.gender,placeholder:"Select Gender",handleChange:this.handleInput})," ",l.a.createElement(U,{title:"Select a issue section",name:"Select a issue section",options:this.state.skillOptions,selectedOptions:this.state.newUser.skills,handleChange:this.handleCheckBox})," ",l.a.createElement(T,{title:"Tell us more about your issue",rows:5,value:this.state.newUser.about,name:"currentShopInfo",handleChange:this.handleTextArea,placeholder:"Describe your past experience related to your issue"}),l.a.createElement(F,{action:this.handleFormSubmit,type:"primary",title:"Submit",style:M})," ",l.a.createElement(F,{action:this.handleClearForm,type:"secondary",title:"Clear",style:M})," ")}}]),t}(n.Component),M={margin:"10px 20% 10px 20%"},P=B,D=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-content"})}}]),t}(n.Component),G=a(151),R=(a(141),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main-menu"},l.a.createElement("div",{className:"brand"},l.a.createElement(G.a,{to:"/home",className:"brand"}," | Fashion Today | ")),l.a.createElement("div",{className:"shop-cart"},l.a.createElement("i",{className:"fas fa-cart-arrow-down fa-2x"})),l.a.createElement("div",{className:"menu"},l.a.createElement("ul",null,l.a.createElement("li",{className:"menu-link"},l.a.createElement(G.a,{to:"/women"},"Women")),l.a.createElement("li",{className:"menu-link"},l.a.createElement(G.a,{to:"/men"},"Men")),l.a.createElement("li",{className:"menu-link"},l.a.createElement(G.a,{to:"/kids"},"Kids")),l.a.createElement("li",{className:"menu-link"},l.a.createElement(G.a,{to:"/support"},"Support")),l.a.createElement("li",{className:"menu-link"},l.a.createElement(G.a,{to:"/faq"},"FAQ")))))}}]),t}(n.Component)),W=(a(143),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer-main"},l.a.createElement("div",{className:"our-store"},l.a.createElement("h4",null,"Our Store"),l.a.createElement("span",{className:"address"},"141 South Grand Avenue"),l.a.createElement("span",{className:"address-two"},"Los Angeles, CA 90015"),l.a.createElement("span",{className:"phone"},"(231) 748-2411"),l.a.createElement("p",null,"62 George Road E48NF, London, Essex")),l.a.createElement("div",{className:"blog-posts"},l.a.createElement("h4",null,"Blog Posts"),l.a.createElement("p",{className:"complains"},"Lorem ipsum dolor sit amet."),l.a.createElement("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"owner"}," | Created by ",l.a.createElement("a",{href:"https://github.com/ShokadinuEU",target:"_blank",rel:"noopener noreferrer",className:"sub-owner"},"ShokadinuEU"),"\xae | ")),l.a.createElement("div",{className:"support"},l.a.createElement("h4",null,"Support"),l.a.createElement("span",null,"Terms & Conditions"),l.a.createElement("span",null,"FAQ"),l.a.createElement("span",null,"Payments"),l.a.createElement("span",null,"Refounds"),l.a.createElement("span",null,"Track Order"),l.a.createElement("span",null,"Services")))}}]),t}(n.Component)),q=(a(53),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={intervalId:0},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-this.props.scrollStepInPx)}},{key:"scrollToTop",value:function(){var e=setInterval(this.scrollStep.bind(this),this.props.delayInMs);this.setState({intervalId:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("button",{title:"Back to top",className:"scroll",onClick:function(){e.scrollToTop()}},l.a.createElement("span",{className:"arrow-up glyphicon glyphicon-chevron-up"}))}}]),t}(l.a.Component)),J=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).state={colors:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"long"},l.a.createElement(q,{scrollStepInPx:"500",delayInMs:"16.66"}))}}]),t}(l.a.Component),Q=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"main-content content"},l.a.createElement("div",{className:"content"},l.a.createElement(R,null))),l.a.createElement(p.a,null,l.a.createElement(E.a,{exact:!0,path:"/",component:j}),l.a.createElement(E.a,{exact:!0,path:"/women",component:w}),l.a.createElement(E.a,{exact:!0,path:"/men",component:k}),l.a.createElement(E.a,{exact:!0,path:"/kids",component:S}),l.a.createElement(E.a,{exact:!0,path:"/support",component:P}),l.a.createElement(E.a,{exact:!0,path:"/faq",component:D}),l.a.createElement(E.a,{exact:!0,component:j})),l.a.createElement(J,null),l.a.createElement("div",{className:"main-footer"},l.a.createElement(W,null)))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,a){},60:function(e,t,a){e.exports=a(147)},65:function(e,t,a){},67:function(e,t,a){}},[[60,3,2]]]);
//# sourceMappingURL=main.d30513d9.chunk.js.map