"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{1510:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7689),a=n(1087),u="MovieList_list__yjDCC",c="MovieList_item__tDivI",s="MovieList_link__+cn-g",i=n(184),o=function(e){var t=e.movies,n=(0,r.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,r=e.title;return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(a.rU,{to:"/movies/".concat(t),state:{from:n},className:s,children:r})},t)}))})})}},4936:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(5861),a=n(9439),u=n(7757),c=n.n(u),s=n(2791),i=n(3051),o=n(1510),p=n(3883),f=n(7596),v=(n(5462),"Home_title__L087v"),l=n(184),m=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],m=(0,s.useState)(!1),d=(0,a.Z)(m,2),h=d[0],g=d[1],x=(0,s.useState)(null),_=(0,a.Z)(x,2),k=_[0],w=_[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,i.Df)();case 4:t=e.sent,u(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),w(e.t0.message),f.Am.error("Upss!!! Fetch error: ".concat(e.t0));case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{className:v,children:"Trending Movies of the Day"}),0!==n.length&&(0,l.jsx)(o.Z,{movies:n}),h&&(0,l.jsx)(p.a,{}),k&&(0,l.jsx)(f.Ix,{autoClose:5e3})]})}},3051:function(e,t,n){n.d(t,{Df:function(){return o},TP:function(){return f},V0:function(){return p},tx:function(){return l},zv:function(){return v}});var r=n(5861),a=n(7757),u=n.n(a),c=n(1243),s="109c81fd83da243f6eda059647fc5d69",i="https://api.themoviedb.org/3/",o=function(){var e=(0,r.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"trending/movie/day?"),e.next=3,c.Z.get(t,{params:{api_key:s,language:"en-US"}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"search/movie?"),e.next=3,c.Z.get(n,{params:{api_key:s,query:t,include_adult:!1,language:"en-US",page:1}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"?"),e.next=3,c.Z.get(n,{params:{api_key:s,language:"en-US"}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/credits?"),e.next=3,c.Z.get(n,{params:{api_key:s,language:"en-US"}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(i,"movie/").concat(t,"/reviews?"),e.next=3,c.Z.get(n,{params:{api_key:s,language:"en-US",page:1}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=936.0814bc7a.chunk.js.map