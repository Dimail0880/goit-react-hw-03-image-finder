(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,a){e.exports=a(71)},30:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=(a(30),a(10)),i=a.n(l),s=a(11),u=a(22),m=a(3),p=function(e){var t=e.onSubmit,a=e.query,n=e.inputChange;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:t},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:"on",placeholder:"Search images and photos",value:a,onChange:n})))},h=a(23),d=a.n(h),b=a(4),f=a(5),g=a(7),v=a(6),O=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.closeModal)}},{key:"render",value:function(){var e=this.props,t=e.closeModal,a=e.src;return r.a.createElement("div",{className:"Overlay",onClick:t},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:a,alt:""})))}}]),a}(n.Component),E=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={modalWindow:!1},e.handleModalOn=function(){e.setState({modalWindow:!0})},e.closeModal=function(t){"DIV"!==t.target.nodeName&&"Escape"!==t.code||e.setState({modalWindow:!1})},e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,a=e.tags,n=e.largeImageURL,c=this.state.modalWindow;return r.a.createElement("li",{className:"ImageGalleryItem"},r.a.createElement("img",{src:t,alt:a,className:"ImageGalleryItem-image",onClick:this.handleModalOn}),c&&r.a.createElement(O,{src:n,closeModal:this.closeModal}))}}]),a}(n.Component),y=function(e){var t=e.pics;return r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(E,{key:e.id,webformatURL:e.webformatURL,tags:e.tags,largeImageURL:e.largeImageURL})})))},j=function(e){var t=e.onClick;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"Button",onClick:t},"LOAD MORE"))},w=a(24),S=a.n(w),k=(a(70),function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{margin:"auto",type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(r.a.Component)),N=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(m.a)(o,2),h=l[0],b=l[1],f=Object(n.useState)(!1),g=Object(m.a)(f,2),v=g[0],O=g[1],E=Object(n.useState)(!1),w=Object(m.a)(E,2),S=w[0],N=w[1],C=Object(n.useState)(1),M=Object(m.a)(C,2),I=M[0],F=M[1],L=Object(n.useState)(""),R=Object(m.a)(L,2),U=R[0],x=R[1],A=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,d.a.get("https://pixabay.com/api/?q=".concat(U,"&page=").concat(t,"&key=").concat("15648239-f04327e653c12632b027fe07a","&image_type=photo&orientation=horizontal&per_page=12"));case 4:a=e.sent,b([].concat(Object(s.a)(h),Object(s.a)(a.data.hits))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),N(e.t0);case 11:return e.prev=11,O(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(p,{onSubmit:function(e){e.preventDefault(),h.length&&b(h.length=0),F(1),a&&A(I),c("")},query:a,inputChange:function(e){e.target.value||b([]),F(1),c(e.target.value),x(e.target.value)}}),S&&r.a.createElement("p",null,"Something went wrong! :( "),!!h.length&&!S&&r.a.createElement(y,{pics:h}),v&&r.a.createElement(k,null),!!h.length&&!S&&r.a.createElement(j,{onClick:function(){var e=I+1;F(e),A(e)}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.fce4f127.chunk.js.map