(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={Book:"Book_Book__3jogB",Book__img:"Book_Book__img__3o_Xg",Book__info:"Book_Book__info__OFYMi",Book__title:"Book_Book__title__2Yppa",Book__authors:"Book_Book__authors__mZgpb"}},23:function(e,t,a){e.exports={Spinner:"SearchBooks_Spinner__1_uZd",Spinner__icon:"SearchBooks_Spinner__icon__14HGe",roll:"SearchBooks_roll__2MvIw",BookList:"SearchBooks_BookList__3OmVi"}},24:function(e,t,a){e.exports={SearchBox:"SearchBox_SearchBox__3a4Ru",SearchBox__input:"SearchBox_SearchBox__input__lP0o-",SearchBox__button:"SearchBox_SearchBox__button__3ic_P"}},25:function(e,t,a){e.exports={BookList:"BookList_BookList__2yWf7",BookList__nomatches:"BookList_BookList__nomatches__1p7Ha",BookList__nomatches__info:"BookList_BookList__nomatches__info__1nmt3"}},28:function(e,t,a){e.exports={ListItem:"ListItem_ListItem__eQ1VU"}},37:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__29MX9"}},38:function(e,t,a){e.exports={Login:"Login_Login___n5ml"}},42:function(e,t,a){e.exports={Logo:"Logo_Logo__3XUoE"}},44:function(e,t,a){e.exports={Sidebar:"Sidebar_Sidebar__cdqZT"}},47:function(e,t,a){e.exports={Books:"Books_Books__3rD_Y"}},48:function(e,t,a){e.exports={ActionPanel:"ActionPanel_ActionPanel__2jZKJ"}},53:function(e,t,a){e.exports=a(74)},58:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),s=a.n(r),i=(a(58),a(17)),c=a(18),l=a(20),u=a(19),m=a(21),h=a(52),_=function(e){return e.children},d=a(37),k=a.n(d),g=a(38),f=a.n(g),B=a(3),v=a(2),b=a(39);function E(){var e=Object(B.a)(["\n        width: 2rem;\n        height: 2rem;\n        color: #eee;\n        "]);return E=function(){return e},e}var I=Object(v.a)(b.a)(E()),p=function(){return o.a.createElement("div",{className:f.a.Login},o.a.createElement(I,null))},S=a(42),L=a.n(S),j=a(43);function w(){var e=Object(B.a)(["\n        width: 1.8rem;\n        height: 1.8rem;\n        color: #eee;\n        "]);return w=function(){return e},e}var x=Object(v.a)(j.a)(w()),O=function(){return o.a.createElement("div",{className:L.a.Logo},o.a.createElement(x,null))},N=function(e){return o.a.createElement("div",{className:k.a.Toolbar},o.a.createElement(O,null),o.a.createElement(p,null))},H=a(44),y=a.n(H),C=a(9),U=a.n(C),D=a(28),R=a.n(D),W=a(29);function F(){var e=Object(B.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return F=function(){return e},e}function P(){var e=Object(B.a)(["\n  color: orange;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return P=function(){return e},e}var T=Object(v.a)(W.a)(P()),A=Object(v.a)(W.a)(F()),J=a(30);function Z(){var e=Object(B.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return Z=function(){return e},e}function q(){var e=Object(B.a)(["\n  color: lightgreen;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return q=function(){return e},e}var M=Object(v.a)(J.a)(q()),X=Object(v.a)(J.a)(Z()),Y=a(31);function V(){var e=Object(B.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return V=function(){return e},e}function G(){var e=Object(B.a)(["\n  color: yellow;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return G=function(){return e},e}var K=Object(v.a)(Y.a)(G()),Q=Object(v.a)(Y.a)(V()),$=function(e){var t;return"checkColor"===e.icon?t=o.a.createElement(K,null):"listColor"===e.icon?t=o.a.createElement(M,null):"starColor"===e.icon&&(t=o.a.createElement(T,null)),o.a.createElement("li",{className:R.a.ListItem},o.a.createElement("span",{className:R.a.ListItem__icon},t),e.children)},z=a(10),ee=function(){var e=o.a.createElement($,{icon:"checkColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Read")),t=o.a.createElement($,{icon:"listColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Wishlist")),a=o.a.createElement($,{icon:"starColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Favourites"));return o.a.createElement("ul",{className:U.a.ListItems},o.a.createElement(z.b,{to:"/read",activeClassName:U.a.active},e),o.a.createElement(z.b,{to:"/wishlist",activeClassName:U.a.active},t),o.a.createElement(z.b,{to:"/favourites",activeClassName:U.a.active},a))},te=function(){return o.a.createElement("div",{className:y.a.Sidebar},o.a.createElement(ee,null))},ae=a(47),ne=a.n(ae),oe=a(23),re=a.n(oe),se=a(24),ie=a.n(se),ce=function(e){var t=e.searchChange,a=e.searchBooks;return o.a.createElement("form",{onSubmit:a,className:ie.a.SearchBox,action:""},o.a.createElement("input",{className:ie.a.SearchBox__input,type:"search",placeholder:"search books",onChange:t}),o.a.createElement("button",{type:"submit",className:ie.a.SearchBox__button},"Search"))},le=a(25),ue=a.n(le),me=a(13),he=a.n(me),_e=a(48),de=a.n(_e),ke=function(e){var t,a,n,r=e.isInReadBooks,s=e.isInWishlist,i=e.isInFavourites,c=e.toggleWishlistBook,l=e.toggleFavouritesBook,u=e.toggleReadBook;return t=r?o.a.createElement(K,null):o.a.createElement(Q,null),a=s?o.a.createElement(M,null):o.a.createElement(X,null),n=i?o.a.createElement(T,null):o.a.createElement(A,null),o.a.createElement("div",{className:de.a.ActionPanel},o.a.createElement("div",{onClick:c},a),o.a.createElement("div",{onClick:u},t),o.a.createElement("div",{onClick:l},n))},ge=function(e){var t=e.book,a=e.isInReadBooks,n=e.toggleBookHandler,r=e.bookId,s=e.isInWishlist,i=e.isInFavourites,c=t.volumeInfo.imageLinks;void 0===c?c={backgroundColor:"#333"}:"string"===typeof c?c={backgroundImage:"url(".concat(c,")")}:c.thumbnail?c={backgroundImage:"url(".concat(c.thumbnail,")")}:c.smallThumbnail&&(c={backgroundImage:"url(".concat(c.smallThumbnail,")")});var l,u=t.volumeInfo.title;return u=u.length>32?t.volumeInfo.title.slice(0,32)+"...":t.volumeInfo.title,t.volumeInfo.authors?1===t.volumeInfo.authors.length?l=t.volumeInfo.authors:t.volumeInfo.authors.length>1&&(l=t.volumeInfo.authors.join(", ").length>37?t.volumeInfo.authors.join(", ").slice(0,37)+"...":t.volumeInfo.authors.join(", ")):l=null,o.a.createElement("div",{className:he.a.Book},o.a.createElement(ke,{isInReadBooks:a,isInWishlist:s,isInFavourites:i,toggleReadBook:function(){return n(r,"readBooks")},toggleWishlistBook:function(){return n(r,"wishlist")},toggleFavouritesBook:function(){return n(r,"favourites")}}),o.a.createElement("div",{className:he.a.Book__img,style:c}),o.a.createElement("div",{className:he.a.Book__info},o.a.createElement("h4",{className:he.a.Book__title},u),o.a.createElement("p",{className:he.a.Book__authors},l)))},fe=a(49);function Be(){var e=Object(B.a)(["\n  color: red;\n  width: 3rem;\n  height: 3rem;\n  "]);return Be=function(){return e},e}var ve=Object(v.a)(fe.a)(Be()),be=function(e){var t,a,n=e.booksData,r=e.isInUserState,s=e.toggleBookHandler;return n?(t=n.map(function(e,t){var a=e.id,n=r(a,"readBooks"),i=r(a,"wishlist"),c=r(a,"favourites");return o.a.createElement(ge,{key:t,book:e,bookId:a,isInReadBooks:n,isInWishlist:i,isInFavourites:c,toggleBookHandler:s})}),a=o.a.createElement("div",{className:ue.a.BookList},t)):a=o.a.createElement("div",{className:ue.a.BookList__nomatches},o.a.createElement(ve,null),o.a.createElement("h3",{className:ue.a.BookList__nomatches__info},"Sorry, no books matched your search. Please try again.")),o.a.createElement(_,null,a)},Ee=a(50);function Ie(){var e=Object(B.a)(["\n  color: rgba(75, 75, 230, 0.9);\n  width: 3rem;\n  height: 3rem;\n  "]);return Ie=function(){return e},e}var pe=Object(v.a)(Ee.a)(Ie()),Se=function(e){var t=e.changed,a=e.searchBooks,n=e.booksData,r=e.isLoading,s=e.toggleBookHandler,i=e.isInUserState;return o.a.createElement(_,null,o.a.createElement(ce,{searchChange:t,searchBooks:a}),r?o.a.createElement("div",{className:re.a.Spinner},o.a.createElement(pe,{className:re.a.Spinner__icon})):o.a.createElement("div",{className:re.a.BookList},o.a.createElement(be,{booksData:n,isInUserState:i,toggleBookHandler:s})))},Le=function(e){return o.a.createElement(be,{booksData:e.userReadBooks,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler})},je=function(e){return o.a.createElement(be,{booksData:e.userWishlist,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler})},we=function(e){return o.a.createElement(be,{booksData:e.userFavourites,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler})},xe=a(11),Oe=function(e){var t=e.changed,a=e.searchBook,n=e.booksData,r=e.isLoading,s=e.toggleBookHandler,i=e.isInUserState,c=e.userReadBooks,l=e.userWishlist,u=e.userFavourites,m=o.a.createElement(Se,{isLoading:r,changed:t,searchBooks:a,booksData:n,isInUserState:i,toggleBookHandler:s}),h=o.a.createElement(Le,{userReadBooks:c,booksData:n,isInUserState:i,toggleBookHandler:s}),_=o.a.createElement(je,{userWishlist:l,isInUserState:i,toggleBookHandler:s}),d=o.a.createElement(we,{userFavourites:u,isInUserState:i,toggleBookHandler:s});return o.a.createElement("div",{className:ne.a.Books},o.a.createElement(xe.c,null,o.a.createElement(xe.a,{path:"/read",render:function(){return h}}),o.a.createElement(xe.a,{path:"/wishlist",render:function(){return _}}),o.a.createElement(xe.a,{path:"/favourites",render:function(){return d}}),o.a.createElement(xe.a,{path:"/",exact:!0,render:function(){return m}}),o.a.createElement(xe.a,{render:function(){return o.a.createElement("h1",null,"Error 404")}})))},Ne=a(51),He=a.n(Ne),ye={searchfield:"",booksData:[],isLoading:!0,user:{name:"",email:"",password:"",joined:"",readBooks:[],wishlist:[],favourites:[]}},Ce=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state=ye,a.searchChangeHandler=function(e){a.setState({searchfield:e.target.value})},a.searchBook=function(e){e.preventDefault(),a.setState({isLoading:!0}),He.a.get("https://www.googleapis.com/books/v1/volumes").query({q:a.state.searchfield,maxResults:40}).then(function(e){a.setState({booksData:e.body.items,isLoading:!1}),console.log(a.state.booksData)})},a.isInUserState=function(e,t){return a.state.user[t].some(function(t){return t.id===e})},a.toggleBookHandler=function(e,t){var n=Object(h.a)({},a.state.user);!1===a.isInUserState(e,t)?a.setState(function(a){var o=[a.booksData.filter(function(t){return t.id===e})[0]].concat(a.user[t]);return n[t]=o,{user:n}}):a.setState(function(a){var o=a.user[t].filter(function(t){return t.id!==e});return n[t]=o,{user:n}})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(_,null,o.a.createElement(N,null),o.a.createElement("main",{style:{display:"flex"}},o.a.createElement(te,null),o.a.createElement(Oe,{changed:this.searchChangeHandler,searchfield:this.state.searchfield,searchBook:this.searchBook,booksData:this.state.booksData,isLoading:this.state.isLoading,isInUserState:this.isInUserState,toggleBookHandler:this.toggleBookHandler,userReadBooks:this.state.user.readBooks,userWishlist:this.state.user.wishlist,userFavourites:this.state.user.favourites})))}}]),t}(n.Component),Ue=(a(73),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(z.a,null,o.a.createElement(Ce,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports={ListItems:"ListItems_ListItems__2xBR3",ListItems__text:"ListItems_ListItems__text__2IS25",active:"ListItems_active__3crJk"}}},[[53,1,2]]]);
//# sourceMappingURL=main.1cdf15e8.chunk.js.map