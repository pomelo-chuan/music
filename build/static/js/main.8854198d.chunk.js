(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/search.d5b40433.svg"},31:function(e,t,a){e.exports=a.p+"static/media/CDN.63e1e185.svg"},32:function(e,t,a){e.exports=a.p+"static/media/hot.692e71ce.svg"},37:function(e,t,a){e.exports=a.p+"static/media/index.equalizer-bars-loader.d6c35e14.svg"},39:function(e,t,a){e.exports=a(93)},44:function(e,t,a){},45:function(e,t,a){},48:function(e,t,a){},70:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),i=a.n(c),s=(a(44),a(97)),l=a(96),o=a(4),u=a(5),p=a(7),m=a(6),h=a(8),d=a(94),v=(a(45),a(30)),f=a.n(v),b=a(31),y=a.n(b),E=a(32),j=a.n(E),O=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{alt:"",src:f.a}),"SEARCH")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/playList"},r.a.createElement("img",{alt:"",src:y.a}),"PLAYLIST")),r.a.createElement("li",null,r.a.createElement(d.a,{to:"/top"},r.a.createElement("img",{alt:"",src:j.a}),"TOP")))),r.a.createElement("div",{className:"menu-space"}))}}]),t}(n.Component),g=(a(48),function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"home-layout"},r.a.createElement(O,null),e)}}]),t}(n.Component)),k=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"guide")}}]),t}(n.Component),w=a(9),x=a.n(w),D=a(13),C=a(12),L=a(33),N=a.n(L),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a="http://localhost:4000".concat(e);return N()(Object.assign({url:a},t)).then(function(e){if(e.status<200||e.status>300)throw new Error("requset error");if(!e.data)throw new Error("response nothing");if(200===e.data.code)return e.data;throw new Error("requset error")}).catch(function(e){throw new Error(e.message)})},q=a(95),P=(a(70),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={list:[],loading:!1},a.topDetail=a.topDetail.bind(Object(C.a)(Object(C.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(x.a.mark(function e(){var t;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,S("/toplist");case 4:t=e.sent,this.setState({list:t.list,loading:!1}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),this.setState({loading:!1}),console.error(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"topDetail",value:function(e){var t=e.id;this.props.history.push("topDetail/".concat(t))}},{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.loading;return r.a.createElement("div",{className:"top-container"},n&&"loading",a.map(function(t,a){return r.a.createElement("button",{className:"top-item",key:t.id,onClick:function(){return e.topDetail(t)}},r.a.createElement("div",{className:"top-desc"},r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.updateFrequency)))}))}}]),t}(n.Component)),M=Object(q.a)(P),A=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(p.a)(this,Object(m.a)(t).call(this,e)),console.log(e),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(x.a.mark(function e(){var t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,S("/toplist/detail?id=".concat(t));case 4:a=e.sent,console.log(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0.message);case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,"top detail")}}]),t}(n.Component),I=a(36),T=a.n(I),B=(a(90),a(37)),J=a.n(B),W=(a(91),function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{alt:"",src:J.a}))}}]),t}(n.Component)),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={sub:[],playlists:[],loading:!1},a.selectCatgery=a.selectCatgery.bind(Object(C.a)(Object(C.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(x.a.mark(function e(){var t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setLoading(!0),e.next=4,S("/playlist/catlist");case 4:t=e.sent,this.setLoading(!1),a=t.sub,this.setState({sub:a}),this.requestPlayList(a[0].name),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"selectCatgery",value:function(e){var t=e.currentTarget.value;this.requestPlayList(t)}},{key:"requestPlayList",value:function(){var e=Object(D.a)(x.a.mark(function e(t){var a,n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setLoading(!0),e.next=4,S("/top/playlist?cat=".concat(t,"&limit=20"));case 4:a=e.sent,this.setLoading(!1),n=a.playlists,this.setState({playlists:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"playListDetail",value:function(e){var t=e.id;this.props.history.push("/playListDetail/".concat(t))}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.sub,n=t.playlists,c=t.loading;return r.a.createElement("div",{style:{width:"100%"}},c&&r.a.createElement(W,null),r.a.createElement("select",{onChange:this.selectCatgery},a.map(function(e,t){return r.a.createElement("option",{key:t},e.name)})),r.a.createElement("div",{className:"play-list-container"},T()(n,2).map(function(t,a){return r.a.createElement("div",{className:"play-list-item",key:a},t.map(function(t){return r.a.createElement("button",{key:t.id,onClick:function(){return e.playListDetail(t)}},r.a.createElement("img",{alt:"",src:t.coverImgUrl}),r.a.createElement("div",{className:"play-list-desc"},r.a.createElement("p",null,t.name),r.a.createElement("p",null,t.creator.nickname),r.a.createElement("p",null,t.playCount/1e3,"K PLAYED")))}))})))}}]),t}(n.Component),z=Object(q.a)(Y),F=(a(92),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={privileges:[],playlist:{tracks:[]},music:""},a.trackDetail=a.trackDetail.bind(Object(C.a)(Object(C.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(x.a.mark(function e(){var t,a,n,r;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match.params.id,e.next=4,S("/playlist/detail?id=".concat(t));case 4:a=e.sent,n=a.privileges,r=a.playlist,this.setState({privileges:n,playlist:r}),console.log(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"trackDetail",value:function(){var e=Object(D.a)(x.a.mark(function e(t){var a,n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S("/song/detail?ids=".concat(t.id));case 3:return a=e.sent,e.next=6,S("/song/url?id=".concat(a.songs[0].id));case 6:n=e.sent,console.log(n),this.setState({music:n.data[0].url}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.playlist,n=t.music;return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("audio",{src:n}),r.a.createElement("div",{className:"play-list-detail-list"},a.tracks.map(function(t,a){return r.a.createElement("button",{key:t.id,onClick:function(){return e.trackDetail(t)}},r.a.createElement("p",{className:"play-list-detail-list-name"},r.a.createElement("span",null,a+1),t.name),r.a.createElement("p",{className:"play-list-detail-list-singer"},t.ar.map(function(e){return e.name}).join(" / ")))})))}}]),t}(n.Component)),H=Object(q.a)(F),K=function(){return r.a.createElement(s.a,null,r.a.createElement(g,null,r.a.createElement(l.a,{exact:!0,path:"/",component:k}),r.a.createElement(l.a,{path:"/top",component:M}),r.a.createElement(l.a,{path:"/topDetail/:id",component:A}),r.a.createElement(l.a,{path:"/playList",component:z}),r.a.createElement(l.a,{path:"/playListDetail/:id",component:H})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.8854198d.chunk.js.map