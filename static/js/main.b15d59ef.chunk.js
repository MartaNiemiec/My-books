(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports={Book:"Book_Book__3jogB",Book__img:"Book_Book__img__3o_Xg",Book__info:"Book_Book__info__OFYMi",Book__title:"Book_Book__title__2Yppa",Book__authors:"Book_Book__authors__mZgpb"}},,,,,,,,function(e,t,n){e.exports={ListItem:"ListItem_ListItem__eQ1VU",active:"ListItem_active__2RiNH",ListItem__icon:"ListItem_ListItem__icon__3v0Aq"}},function(e,t,n){e.exports={SearchBox:"SearchBox_SearchBox__3a4Ru",SearchBox__input:"SearchBox_SearchBox__input__lP0o-",SearchBox__button:"SearchBox_SearchBox__button__3ic_P"}},function(e,t,n){e.exports={BookList:"BookList_BookList__2yWf7",BookList__nomatches:"BookList_BookList__nomatches__1p7Ha",BookList__nomatches__info:"BookList_BookList__nomatches__info__1nmt3"}},,,,,,,function(e,t,n){e.exports={Books:"Books_Books__3rD_Y",Spinner:"Books_Spinner__3rx_b",roll:"Books_roll__2GaWL"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__29MX9"}},function(e,t,n){e.exports={Login:"Login_Login___n5ml"}},,,,function(e,t,n){e.exports={Logo:"Logo_Logo__3XUoE"}},,function(e,t,n){e.exports={Sidebar:"Sidebar_Sidebar__cdqZT"}},function(e,t,n){e.exports={ListItems:"ListItems_ListItems__2xBR3"}},function(e,t,n){e.exports={ActionPanel:"ActionPanel_ActionPanel__2jZKJ"}},,,,function(e,t,n){e.exports=n(57)},,,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),i=(n(45),n(7)),l=n(8),s=n(10),u=n(9),m=n(11),_=n(23),h=function(e){return e.children},d=n(26),k=n.n(d),f=n(27),g=n.n(f),b=n(3),B=n(2),v=n(28);function E(){var e=Object(b.a)(["\n        width: 2rem;\n        height: 2rem;\n        color: #eee;\n        "]);return E=function(){return e},e}var p=Object(B.a)(v.a)(E()),L=function(){return o.a.createElement("div",{className:g.a.Login},o.a.createElement(p,null))},j=n(31),S=n.n(j),w=n(32);function O(){var e=Object(b.a)(["\n        width: 1.8rem;\n        height: 1.8rem;\n        color: #eee;\n        "]);return O=function(){return e},e}var x=Object(B.a)(w.a)(O()),I=function(){return o.a.createElement("div",{className:S.a.Logo},o.a.createElement(x,null))},N=function(e){return o.a.createElement("div",{className:k.a.Toolbar},o.a.createElement(I,null),o.a.createElement(L,null))},y=n(33),C=n.n(y),H=n(34),R=n.n(H),D=n(13),U=n.n(D),P=n(19);function T(){var e=Object(b.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return T=function(){return e},e}function A(){var e=Object(b.a)(["\n  color: orange;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return A=function(){return e},e}var W=Object(B.a)(P.a)(A()),q=Object(B.a)(P.a)(T()),J=n(20);function X(){var e=Object(b.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return X=function(){return e},e}function Y(){var e=Object(b.a)(["\n  color: lightgreen;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return Y=function(){return e},e}var Z=Object(B.a)(J.a)(Y()),F=Object(B.a)(J.a)(X()),M=n(21);function G(){var e=Object(b.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return G=function(){return e},e}function K(){var e=Object(b.a)(["\n  color: yellow;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return K=function(){return e},e}var Q=Object(B.a)(M.a)(K()),V=Object(B.a)(M.a)(G()),$=function(e){var t;return"checkColor"===e.icon?t=o.a.createElement(Q,null):"listColor"===e.icon?t=o.a.createElement(Z,null):"starColor"===e.icon&&(t=o.a.createElement(W,null)),o.a.createElement("li",{className:U.a.ListItem},o.a.createElement("a",{href:e.link,className:e.active?U.a.active:null},o.a.createElement("span",{className:U.a.ListItem__icon},t),e.children))},z=function(){return o.a.createElement("ul",{className:R.a.ListItems},o.a.createElement($,{link:"#",icon:"checkColor",active:!0},"Read"),o.a.createElement($,{link:"#",icon:"listColor"},"Wishlist"),o.a.createElement($,{link:"#",icon:"starColor"},"Favourites"))},ee=function(){return o.a.createElement("div",{className:C.a.Sidebar},o.a.createElement(z,null))},te=n(22),ne=n.n(te),ae=n(14),oe=n.n(ae),re=function(e){var t=e.searchChange,n=e.searchBooks;return o.a.createElement("form",{onSubmit:n,className:oe.a.SearchBox,action:""},o.a.createElement("input",{className:oe.a.SearchBox__input,type:"search",placeholder:"search books",onChange:t}),o.a.createElement("button",{type:"submit",className:oe.a.SearchBox__button},"Search"))},ce=n(15),ie=n.n(ce),le=n(5),se=n.n(le),ue=n(35),me=n.n(ue),_e=function(e){var t,n=e.wasRead,a=e.toggleReadBook;return t=n?o.a.createElement(Q,null):o.a.createElement(V,null),o.a.createElement("div",{className:me.a.ActionPanel},o.a.createElement("div",null,o.a.createElement(F,null)),o.a.createElement("div",{onClick:a},t),o.a.createElement("div",null,o.a.createElement(q,null)))},he=function(e){var t=e.book,n=e.wasRead,a=e.toggleBookHandler,r=e.id,c=t.imageLinks;void 0===c?c={backgroundColor:"#333"}:"string"===typeof c?c={backgroundImage:"url(".concat(c,")")}:c.thumbnail?c={backgroundImage:"url(".concat(c.thumbnail,")")}:c.smallThumbnail&&(c={backgroundImage:"url(".concat(c.smallThumbnail,")")});var i,l=t.title;return l=l.length>32?t.title.slice(0,32)+"...":t.title,t.authors?1===t.authors.length?i=t.authors:t.authors.length>1&&(i=t.authors.join(", ").length>37?t.authors.join(", ").slice(0,37)+"...":t.authors.join(", ")):i=null,o.a.createElement("div",{className:se.a.Book},o.a.createElement(_e,{wasRead:n,toggleReadBook:function(){return a(r,t,"readBooks")}}),o.a.createElement("div",{className:se.a.Book__img,style:c}),o.a.createElement("div",{className:se.a.Book__info},o.a.createElement("h4",{className:se.a.Book__title},l),o.a.createElement("p",{className:se.a.Book__authors},i)))},de=n(36);function ke(){var e=Object(b.a)(["\n  color: red;\n  width: 3rem;\n  height: 3rem;\n  "]);return ke=function(){return e},e}var fe=Object(B.a)(de.a)(ke()),ge=function(e){var t,n=e.booksData,a=e.isInUserState,r=e.toggleBookHandler;return t=n?n.map(function(e,t){var n=a(e.id,"readBooks");return o.a.createElement(he,{key:t,book:e.volumeInfo,id:e.id,wasRead:n,toggleBookHandler:r})}):o.a.createElement("div",{className:ie.a.BookList__nomatches},o.a.createElement(fe,null),o.a.createElement("h2",{className:ie.a.BookList__nomatches__info},"Sorry, no books matched your search. Please try again.")),o.a.createElement("div",{className:ie.a.BookList},t)},be=n(37);function Be(){var e=Object(b.a)(["\n  color: rgba(75, 75, 230, 0.9);\n  width: 3rem;\n  height: 3rem;\n  "]);return Be=function(){return e},e}var ve=Object(B.a)(be.a)(Be()),Ee=function(e){var t=e.changed,n=e.searchBook,a=e.booksData,r=e.isLoading,c=e.toggleBookHandler,i=e.isInUserState;return o.a.createElement("div",{className:ne.a.Books},o.a.createElement(re,{searchChange:t,searchBooks:n}),r?o.a.createElement(ve,{className:ne.a.Spinner}):o.a.createElement(ge,{booksData:a,isInUserState:i,toggleBookHandler:c}))},pe=n(38),Le=n.n(pe),je=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={searchfield:"",booksData:[],isLoading:!0,user:{name:"",email:"",password:"",joined:"",readBooks:[],wishlist:[],favourites:[]}},n.searchChangeHandler=function(e){n.setState({searchfield:e.target.value})},n.searchBook=function(e){e.preventDefault(),n.setState({isLoading:!0}),Le.a.get("https://www.googleapis.com/books/v1/volumes").query({q:n.state.searchfield,maxResults:40}).then(function(e){n.setState({booksData:e.body.items,isLoading:!1}),console.log(n.state.booksData)})},n.isInUserState=function(e,t){return n.state.user[t].some(function(t){return t.id===e})},n.toggleBookHandler=function(e,t,a){!1===n.isInUserState(e,a)?n.setState(function(o){var r=[{id:e,title:t.title,authors:t.authors}].concat(o.user[a]),c=Object(_.a)({},n.state.user);return c[a]=r,{user:c}}):n.setState(function(t){var o=t.user[a].filter(function(t){return t.id!==e}),r=Object(_.a)({},n.state.user);return r[a]=o,{user:r}})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(h,null,o.a.createElement(N,null),o.a.createElement("main",{style:{display:"flex"}},o.a.createElement(ee,null),o.a.createElement(Ee,{changed:this.searchChangeHandler,searchfield:this.state.searchfield,searchBook:this.searchBook,booksData:this.state.booksData,isLoading:this.state.isLoading,isInUserState:this.isInUserState,toggleBookHandler:this.toggleBookHandler})))}}]),t}(a.Component),Se=(n(56),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(je,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[39,1,2]]]);
//# sourceMappingURL=main.b15d59ef.chunk.js.map