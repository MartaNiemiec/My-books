(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports={BookList:"BookList_BookList__2yWf7",BookList__nomatches:"BookList_BookList__nomatches__1p7Ha",BookList__nomatches__info:"BookList_BookList__nomatches__info__1nmt3"}},16:function(e,t,a){e.exports={Book:"Book_Book__3jogB",Book__img:"Book_Book__img__3o_Xg",Book__info:"Book_Book__info__OFYMi",Book__title:"Book_Book__title__2Yppa",Book__authors:"Book_Book__authors__mZgpb"}},26:function(e,t,a){e.exports={Spinner:"SearchBooks_Spinner__1_uZd",Spinner__icon:"SearchBooks_Spinner__icon__14HGe",roll:"SearchBooks_roll__2MvIw",BookList:"SearchBooks_BookList__3OmVi"}},27:function(e,t,a){e.exports={SearchBox:"SearchBox_SearchBox__3a4Ru",SearchBox__input:"SearchBox_SearchBox__input__lP0o-",SearchBox__button:"SearchBox_SearchBox__button__3ic_P"}},31:function(e,t,a){e.exports={ListItem:"ListItem_ListItem__eQ1VU"}},41:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__29MX9"}},42:function(e,t,a){e.exports={Login:"Login_Login___n5ml"}},46:function(e,t,a){e.exports={Logo:"Logo_Logo__3XUoE"}},48:function(e,t,a){e.exports={Sidebar:"Sidebar_Sidebar__cdqZT"}},51:function(e,t,a){e.exports={Books:"Books_Books__3rD_Y"}},52:function(e,t,a){e.exports={ActionPanel:"ActionPanel_ActionPanel__2jZKJ"}},59:function(e,t,a){e.exports=a(81)},64:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(19),s=a.n(r),i=(a(64),a(20)),c=a(21),l=a(23),u=a(22),m=a(24),h=a(58),_=function(e){return e.children},d=a(41),k=a.n(d),g=a(42),f=a.n(g),v=a(3),B=a(1),b=a(43);function E(){var e=Object(v.a)(["\n        width: 2rem;\n        height: 2rem;\n        color: #eee;\n        "]);return E=function(){return e},e}var I=Object(B.a)(b.a)(E()),S=function(){return o.a.createElement("div",{className:f.a.Login},o.a.createElement(I,null))},p=a(46),L=a.n(p),j=a(47);function w(){var e=Object(v.a)(["\n        width: 1.8rem;\n        height: 1.8rem;\n        color: #eee;\n        "]);return w=function(){return e},e}var x=Object(B.a)(j.a)(w()),y=function(){return o.a.createElement("div",{className:L.a.Logo},o.a.createElement(x,null))},O=function(e){return o.a.createElement("div",{className:k.a.Toolbar},o.a.createElement(y,null),o.a.createElement(S,null))},N=a(48),H=a.n(N),C=a(9),U=a.n(C),W=a(31),D=a.n(W),R=a(32);function F(){var e=Object(v.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return F=function(){return e},e}function M(){var e=Object(v.a)(["\n  color: orange;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return M=function(){return e},e}var P=Object(B.a)(R.a)(M()),T=Object(B.a)(R.a)(F()),A=a(33);function J(){var e=Object(v.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return J=function(){return e},e}function Z(){var e=Object(v.a)(["\n  color: lightgreen;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return Z=function(){return e},e}var q=Object(B.a)(A.a)(Z()),X=Object(B.a)(A.a)(J()),Y=a(34);function V(){var e=Object(v.a)(["\n  color: #ddd;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return V=function(){return e},e}function G(){var e=Object(v.a)(["\n  color: yellow;\n  width: 1.2rem;\n  height: 1.2rem;\n  "]);return G=function(){return e},e}var K=Object(B.a)(Y.a)(G()),Q=Object(B.a)(Y.a)(V()),$=a(35);function z(){var e=Object(v.a)(["\n        width: 3rem;\n        height: 3rem;\n        color: orange;\n        "]);return z=function(){return e},e}function ee(){var e=Object(v.a)(["\n        width: 1.2rem;\n        height: 1.2rem;\n        color: orange;\n        "]);return ee=function(){return e},e}var te=Object(B.a)($.a)(ee()),ae=Object(B.a)($.a)(z()),ne=function(e){var t;return"checkColor"===e.icon?t=o.a.createElement(K,null):"listColor"===e.icon?t=o.a.createElement(q,null):"starColor"===e.icon?t=o.a.createElement(P,null):"search"===e.icon&&(t=o.a.createElement(te,null)),o.a.createElement("li",{className:D.a.ListItem},o.a.createElement("span",{className:D.a.ListItem__icon},t),e.children)},oe=a(12),re=function(){var e=o.a.createElement(ne,{icon:"checkColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Read")),t=o.a.createElement(ne,{icon:"listColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Wishlist")),a=o.a.createElement(ne,{icon:"starColor"},o.a.createElement("span",{className:U.a.ListItems__text},"Favourites")),n=o.a.createElement(ne,{icon:"search"},o.a.createElement("span",{className:U.a.ListItems__text},"Search"));return o.a.createElement("ul",{className:U.a.ListItems},o.a.createElement(oe.b,{to:"/My-books/",exact:!0,activeClassName:U.a.active},n),o.a.createElement(oe.b,{to:"/My-books/read",activeClassName:U.a.active},e),o.a.createElement(oe.b,{to:"/My-books/wishlist",activeClassName:U.a.active},t),o.a.createElement(oe.b,{to:"/My-books/favourites",activeClassName:U.a.active},a))},se=function(){return o.a.createElement("div",{className:H.a.Sidebar},o.a.createElement(re,null))},ie=a(51),ce=a.n(ie),le=a(26),ue=a.n(le),me=a(27),he=a.n(me),_e=function(e){var t=e.searchChange,a=e.searchBooks;return o.a.createElement("form",{onSubmit:a,className:he.a.SearchBox,action:""},o.a.createElement("input",{className:he.a.SearchBox__input,type:"search",placeholder:"search books",onChange:t}),o.a.createElement("button",{type:"submit",className:he.a.SearchBox__button},"Search"))},de=a(15),ke=a.n(de),ge=a(16),fe=a.n(ge),ve=a(52),Be=a.n(ve),be=function(e){var t,a,n,r=e.isInReadBooks,s=e.isInWishlist,i=e.isInFavourites,c=e.toggleWishlistBook,l=e.toggleFavouritesBook,u=e.toggleReadBook;return t=r?o.a.createElement(K,null):o.a.createElement(Q,null),a=s?o.a.createElement(q,null):o.a.createElement(X,null),n=i?o.a.createElement(P,null):o.a.createElement(T,null),o.a.createElement("div",{className:Be.a.ActionPanel},o.a.createElement("div",{onClick:c},a),o.a.createElement("div",{onClick:u},t),o.a.createElement("div",{onClick:l},n))},Ee=function(e){var t=e.book,a=e.isInReadBooks,n=e.toggleBookHandler,r=e.bookId,s=e.isInWishlist,i=e.isInFavourites,c=t.volumeInfo.imageLinks;void 0===c?c={backgroundColor:"#333"}:"string"===typeof c?c={backgroundImage:"url(".concat(c,")")}:c.thumbnail?c={backgroundImage:"url(".concat(c.thumbnail,")")}:c.smallThumbnail&&(c={backgroundImage:"url(".concat(c.smallThumbnail,")")});var l,u=t.volumeInfo.title;return u=u.length>32?t.volumeInfo.title.slice(0,32)+"...":t.volumeInfo.title,t.volumeInfo.authors?1===t.volumeInfo.authors.length?l=t.volumeInfo.authors:t.volumeInfo.authors.length>1&&(l=t.volumeInfo.authors.join(", ").length>37?t.volumeInfo.authors.join(", ").slice(0,37)+"...":t.volumeInfo.authors.join(", ")):l=null,o.a.createElement("div",{className:fe.a.Book},o.a.createElement(be,{isInReadBooks:a,isInWishlist:s,isInFavourites:i,toggleReadBook:function(){return n(r,"readBooks")},toggleWishlistBook:function(){return n(r,"wishlist")},toggleFavouritesBook:function(){return n(r,"favourites")}}),o.a.createElement("div",{className:fe.a.Book__img,style:c}),o.a.createElement("div",{className:fe.a.Book__info},o.a.createElement("h4",{className:fe.a.Book__title},u),o.a.createElement("p",{className:fe.a.Book__authors},l)))},Ie=a(53);function Se(){var e=Object(v.a)(["\n  color: red;\n  width: 3rem;\n  height: 3rem;\n  "]);return Se=function(){return e},e}var pe=Object(B.a)(Ie.a)(Se()),Le=a(11),je=a.n(Le),we=a(54),xe=a.n(we),ye=a(55),Oe=a.n(ye),Ne=function(e){var t,a,n=e.booksData,r=e.isInUserState,s=e.toggleBookHandler,i=e.isInitial;return n?(t=n.map(function(e,t){var a=e.id,n=r(a,"readBooks"),i=r(a,"wishlist"),c=r(a,"favourites");return o.a.createElement(Ee,{key:t,book:e,bookId:a,isInReadBooks:n,isInWishlist:i,isInFavourites:c,toggleBookHandler:s})}),a=o.a.createElement("div",{className:ke.a.BookList},o.a.createElement(Oe.a,{bottom:!0},t))):a=o.a.createElement("div",{className:ke.a.BookList__nomatches},o.a.createElement(pe,null),o.a.createElement("h3",{className:ke.a.BookList__nomatches__info},"Sorry, no books matched your search. Please try again.")),i&&(a=o.a.createElement("div",{className:ke.a.BookList__nomatches},o.a.createElement(xe.a,null,o.a.createElement(ae,null)),o.a.createElement(je.a,{left:!0,cascade:!0},o.a.createElement("h3",{className:ke.a.BookList__nomatches__info},"Search books")))),o.a.createElement(_,null,a)},He=a(56);function Ce(){var e=Object(v.a)(["\n  color: rgba(75, 75, 230, 0.9);\n  width: 3rem;\n  height: 3rem;\n  "]);return Ce=function(){return e},e}var Ue=Object(B.a)(He.a)(Ce()),We=function(e){var t,a=e.changed,n=e.searchBooks,r=e.booksData,s=e.isLoading,i=e.toggleBookHandler,c=e.isInUserState,l=e.isInitial,u=o.a.createElement("div",{className:ue.a.Spinner},o.a.createElement(Ue,{className:ue.a.Spinner__icon})),m=o.a.createElement("div",{className:ue.a.BookList},o.a.createElement(Ne,{booksData:r,isInUserState:c,toggleBookHandler:i,isInitial:l}));return t=s?u:m,o.a.createElement(_,null,o.a.createElement(_e,{searchChange:a,searchBooks:n}),t)},De=function(e){var t=o.a.createElement("h2",{style:{fontStyle:"italic",fontWeight:"400",textAlign:"center",marginTop:"3rem",color:"#cc3300"}},o.a.createElement(je.a,{left:!0,cascade:!0},"Sorry, no read books found.")),a=o.a.createElement(Ne,{booksData:e.userReadBooks,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler});return 0===e.userReadBooks.length?t:a},Re=function(e){var t,a=o.a.createElement(je.a,{left:!0,cascade:!0},o.a.createElement("h2",{style:{fontStyle:"italic",fontWeight:"400",textAlign:"center",marginTop:"3rem",color:"#cc3300"}},"Sorry, no books in the wishlist found.")),n=o.a.createElement(Ne,{booksData:e.userWishlist,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler});return t=0===e.userWishlist.length?a:n,t},Fe=function(e){var t,a=o.a.createElement(je.a,{left:!0,cascade:!0},o.a.createElement("h2",{style:{fontStyle:"italic",fontWeight:"400",textAlign:"center",marginTop:"3rem",color:"#cc3300"}},"Sorry, no books in the favourites found.")),n=o.a.createElement(Ne,{booksData:e.userFavourites,isInUserState:e.isInUserState,toggleBookHandler:e.toggleBookHandler});return t=0===e.userFavourites.length?a:n,t},Me=a(13),Pe=function(e){var t=e.changed,a=e.searchBook,n=e.booksData,r=e.isLoading,s=e.toggleBookHandler,i=e.isInUserState,c=e.userReadBooks,l=e.userWishlist,u=e.userFavourites,m=e.isInitial,h=o.a.createElement(We,{isLoading:r,changed:t,searchBooks:a,booksData:n,isInUserState:i,toggleBookHandler:s,isInitial:m}),_=o.a.createElement(De,{userReadBooks:c,isInUserState:i,toggleBookHandler:s}),d=o.a.createElement(Re,{userWishlist:l,isInUserState:i,toggleBookHandler:s}),k=o.a.createElement(Fe,{userFavourites:u,isInUserState:i,toggleBookHandler:s});return o.a.createElement("div",{className:ce.a.Books},o.a.createElement(Me.c,null,o.a.createElement(Me.a,{path:"/My-books/read",render:function(){return _}}),o.a.createElement(Me.a,{path:"/My-books/wishlist",render:function(){return d}}),o.a.createElement(Me.a,{path:"/My-books/favourites",render:function(){return k}}),o.a.createElement(Me.a,{path:"/My-books/",exact:!0,render:function(){return h}}),o.a.createElement(Me.a,{render:function(){return o.a.createElement("h1",null,"Error 404")}})))},Te=a(57),Ae=a.n(Te),Je={searchfield:"",booksData:[],isLoading:!1,initialPage:!0,user:{name:"",email:"",password:"",joined:"",readBooks:[],wishlist:[],favourites:[]}},Ze=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state=Je,a.searchChangeHandler=function(e){a.setState({searchfield:e.target.value})},a.searchBook=function(e){e.preventDefault(),""===a.state.searchfield?a.setState({isLoading:!1,initialPage:!0}):(a.setState({isLoading:!0,initialPage:!1}),Ae.a.get("https://www.googleapis.com/books/v1/volumes").query({q:a.state.searchfield,orderBy:"newest",maxResults:40}).then(function(e){a.setState({booksData:e.body.items,isLoading:!1}),console.log(a.state.booksData)}))},a.isInUserState=function(e,t){return a.state.user[t].some(function(t){return t.id===e})},a.toggleBookHandler=function(e,t){var n=Object(h.a)({},a.state.user);!1===a.isInUserState(e,t)?a.setState(function(a){var o=[a.booksData.filter(function(t){return t.id===e})[0]].concat(a.user[t]);return n[t]=o,{user:n}}):a.setState(function(a){var o=a.user[t].filter(function(t){return t.id!==e});return n[t]=o,{user:n}})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(_,null,o.a.createElement(O,null),o.a.createElement("main",{style:{display:"flex"}},o.a.createElement(se,null),o.a.createElement(Pe,{changed:this.searchChangeHandler,searchfield:this.state.searchfield,searchBook:this.searchBook,booksData:this.state.booksData,isLoading:this.state.isLoading,isInitial:this.state.initialPage,isInUserState:this.isInUserState,toggleBookHandler:this.toggleBookHandler,userReadBooks:this.state.user.readBooks,userWishlist:this.state.user.wishlist,userFavourites:this.state.user.favourites})))}}]),t}(n.Component),qe=(a(80),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(oe.a,null,o.a.createElement(Ze,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports={ListItems:"ListItems_ListItems__2xBR3",ListItems__text:"ListItems_ListItems__text__2IS25",active:"ListItems_active__3crJk"}}},[[59,1,2]]]);
//# sourceMappingURL=main.d126e8e6.chunk.js.map