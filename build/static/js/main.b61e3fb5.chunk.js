(this["webpackJsonpplaylist-front-end"]=this["webpackJsonpplaylist-front-end"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),l=a.n(s),i=(a(14),a(15),a(2)),c=a(3),o=a(5),u=a(4),h=a(1),g=a(6);function m(e){return r.a.createElement("div",{id:"home-page"},r.a.createElement("div",{id:"logo-and-search"},r.a.createElement("h1",{id:"logo"},"SoundCloud Playlist Generator"),r.a.createElement("form",{id:"search-form",onSubmit:function(t){t.preventDefault();var a=t.target.searchbar.value.split(" ").join("+");t.target.searchbar.value="",t.target.searchbar.placeholder="searching...",a.length&&fetch("/search?q="+a).then((function(e){return e.json()})).then((function(t){e.setResults(t)}))}},r.a.createElement("input",{type:"search",inputMode:"search",spellcheck:"false",name:"searchbar",placeholder:"enter SC username"}),r.a.createElement("button",{type:"submit",style:{"background-color":""}},r.a.createElement("img",{src:"/search.svg",alt:"search"})))))}function d(e){return r.a.createElement("div",{className:"user-card",onClick:function(){return e.selectUser(e.user)}},r.a.createElement("img",{className:"user-img",src:e.user.avatar_url}),r.a.createElement("p",{className:"user-title"},e.user.username))}function f(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.setResults(null)}},"Back to Search"),r.a.createElement("div",{id:"results-container"},e.results.length?null:r.a.createElement("h1",{style:{color:"white"}},"No results found"),r.a.createElement("div",{id:"user-list"},e.results.map((function(t){return r.a.createElement(d,{user:t,selectUser:e.selectUser})})))))}function p(e){var t=!1;return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.clearUser},"back"),r.a.createElement("form",{id:"option-menu",onSubmit:function(a){a.preventDefault();var n=a.target.mine.value,r=a.target.their.value;if(n&&r&&!t){t=!0;var s=document.querySelector("#generating");s.innerHTML="Generating Playlist...",fetch("/playlist?userId=".concat(e.user.id,"&mine=").concat(n,"&their=").concat(r)).then((function(e){return e.json()})).then((function(a){a.trackList?e.setSongList(a):(s.innerHTML="no results",t=!1)}))}}},r.a.createElement("div",{id:"selection-menu-container"},r.a.createElement("div",{className:"btn-group-vertical selection-buttons"},r.a.createElement("input",{id:"liked-tracks",type:"radio",name:"mine",value:"favorites"}),r.a.createElement("label",{for:"liked-tracks"},"Liked Tracks"),r.a.createElement("input",{id:"followed-artists",type:"radio",name:"mine",value:"followings"}),r.a.createElement("label",{for:"followed-artists"},"Followed Artists"),r.a.createElement("input",{id:"followers",type:"radio",name:"mine",value:"followers"}),r.a.createElement("label",{for:"followers"},"Followers")),r.a.createElement("div",{className:"btn-group-vertical selection-buttons"},r.a.createElement("input",{id:"recent-track",type:"radio",name:"their",value:"recenttrack"}),r.a.createElement("label",{for:"recent-track"},"Most Recent Release"),r.a.createElement("input",{id:"top-track",type:"radio",name:"their",value:"toptrack"}),r.a.createElement("label",{for:"top-track"},"Most Liked Track"),r.a.createElement("input",{id:"recent-like",type:"radio",name:"their",value:"favorites"}),r.a.createElement("label",{for:"recent-like"},"Most Recent Like"))),r.a.createElement("div",{id:"submit-button-container"},r.a.createElement("button",{id:"generate-playlist",type:"submit"},"Generate Playlist"),r.a.createElement("h3",{id:"generating"}))))}function v(e){return r.a.createElement("div",{className:"song-card"+(e.isPlaying(e.index)?" song-card-playing":""),onClick:function(){return e.changeSong(e.index)}},r.a.createElement("img",{className:"song-art",src:e.song.artwork_url||"http://service-line.co.uk/wp-content/uploads/2016/05/PPM-Services-Icon-100x100.png",alt:""}),r.a.createElement("h1",{className:"song-title"},e.song.title),r.a.createElement("h2",{className:"song-artist"},e.song.user.username))}var b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).widgetBaseUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/",a.widgetArgs="&color=%23FF5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true",a.state={currentSong:a.props.songList[0]},a.changeSong=a.changeSong.bind(Object(h.a)(a)),a.isPlaying=a.isPlaying.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"changeSong",value:function(e){this.setState({currentSong:this.props.songList[e]})}},{key:"isPlaying",value:function(e){return this.props.songList.indexOf(this.state.currentSong)===e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.props.clearPlaylist},"back"),r.a.createElement("iframe",{width:"100%",height:"150",scrolling:"no",frameborder:"no",allow:"autoplay",src:this.widgetBaseUrl+this.state.currentSong.id+this.widgetArgs}),r.a.createElement("div",{id:"song-container"},this.props.songList.map((function(t,a){return r.a.createElement(v,{song:t,index:a,changeSong:e.changeSong,isPlaying:e.isPlaying})})),this.props.nextPage&&r.a.createElement("button",{id:"next-page-button",onClick:this.props.getNextPage},"Load next page")))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={user:null,searchResults:null,songList:null,nextPage:null},a.clearPlaylist=a.clearPlaylist.bind(Object(h.a)(a)),a.getNextPage=a.getNextPage.bind(Object(h.a)(a)),a.selectUser=a.selectUser.bind(Object(h.a)(a)),a.setSearchResults=a.setSearchResults.bind(Object(h.a)(a)),a.setSongList=a.setSongList.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"clearPlaylist",value:function(){this.setState({songList:null,nextPage:null})}},{key:"getNextPage",value:function(){var e=this;console.log("getNextPage called"),this.setState({nextPage:null});var t=this.state.nextPage;fetch("/playlist?userId=".concat(t.userId,"&mine=").concat(t.mine,"&their=").concat(t.their,"&cursor=").concat(t.cursor)).then((function(e){return e.json()})).then((function(t){console.log("in fetch"),e.state.songList&&e.state.user&&e.setState({songList:e.removeDuplicateSongs(e.state.songList.concat(t.trackList.filter((function(e){return!!e})))),nextPage:t.nextPage})}))}},{key:"removeDuplicateSongs",value:function(e){var t={},a=[],n=!0,r=!1,s=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done);n=!0){var c=l.value;t[c.uri]||(a.push(c),t[c.uri]=1)}}catch(o){r=!0,s=o}finally{try{n||null==i.return||i.return()}finally{if(r)throw s}}return a}},{key:"selectUser",value:function(e){this.setState({user:e,searchResults:null})}},{key:"setSearchResults",value:function(e){this.setState({searchResults:e})}},{key:"setSongList",value:function(e){this.state.user&&this.setState({songList:this.removeDuplicateSongs(e.trackList.filter((function(e){return!!e}))),nextPage:e.nextPage})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,!this.state.user&&!this.state.searchResults&&r.a.createElement(m,{setResults:this.setSearchResults}),this.state.searchResults&&r.a.createElement(f,{results:this.state.searchResults,selectUser:this.selectUser,setResults:this.setSearchResults}),this.state.user&&!this.state.songList&&r.a.createElement(p,{user:this.state.user,setSongList:this.setSongList,clearUser:function(){return e.selectUser(null)}}),this.state.songList&&r.a.createElement(b,{songList:this.state.songList,nextPage:this.state.nextPage,getNextPage:this.getNextPage,clearPlaylist:this.clearPlaylist}))}}]),t}(r.a.Component);var y=function(){return r.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b61e3fb5.chunk.js.map