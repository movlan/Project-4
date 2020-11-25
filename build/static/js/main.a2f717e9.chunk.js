(this["webpackJsonpwhere-should-we-eat"]=this["webpackJsonpwhere-should-we-eat"]||[]).push([[0],{26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),o=a.n(s),c=(a(31),a(1)),l=a.n(c),i=a(3),u=a(8),m=a(9),p=a(11),d=a(10),h=a(12),f=a(23),v=a.n(f),g=a(15);function b(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var E={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:b,getUserFromToken:function(){var e=b();return e?JSON.parse(atob(e.split(".")[1])).user:null},removeToken:function(){localStorage.removeItem("token")}};var y={login:function(e){return fetch("/users/login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var t=e.token;return E.setToken(t)}))},signup:function(e){return fetch("/users/signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken!")})).then((function(e){var t=e.token;return E.setToken(t)}))},getUser:function(){return E.getUserFromToken()},logout:function(){E.removeToken()}},w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,y.login(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("header",null,"Log In"),r.a.createElement("div",null,r.a.createElement("input",{type:"email",placeholder:"Email",name:"email",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn"},"Log In")))}}]),a}(n.Component),O=a(6),k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",email:"",password:"",passwordConf:""},e.handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,y.signup(e.state);case 4:e.props.handleSignupOrLogin(),e.props.history.push("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"isFormInvalid",value:function(){return!(this.state.name&&this.state.email&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Name",value:this.state.name,name:"name",onChange:this.handleChange}),r.a.createElement("input",{type:"email",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}),r.a.createElement("input",{type:"password",placeholder:"Password",value:this.state.password,name:"password",onChange:this.handleChange}),r.a.createElement("input",{type:"password",placeholder:"Confirm Password",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}),r.a.createElement("button",{className:"btn",disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0",r.a.createElement(O.b,{className:"btn",to:"/"},"Cancel")))}}]),a}(n.Component),S=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"SignupPage",history:this.props.history},r.a.createElement(k,this.props))}}]),a}(n.Component),N=function(e){var t=e.localInfo?r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Local Information"),r.a.createElement("p",null,"City: ",e.localInfo.popularity.city),r.a.createElement("p",null,"Neighborhood: ",e.localInfo.popularity.subzone),r.a.createElement("p",null,"Top cuisines: "),r.a.createElement("div",null,e.localInfo.popularity.top_cuisines.map((function(e,t){return r.a.createElement("span",{className:"collection-item",key:t},e)}))))):r.a.createElement("p",null,"loading...");return r.a.createElement("div",{className:"col s12"},t)},C=function(e){return r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("br",null),r.a.createElement("select",{className:"browser-default",onChange:function(t){return function(t){e.selectCategory(t.target.value)}(t)}},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"Choose Category"),e.localCategories.map((function(e){return r.a.createElement("option",{key:e.categories.id,value:e.categories.id},e.categories.name)})))))},j=function(e){var t=r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Removed Restaurants"),r.a.createElement("div",{className:"collection"},e.removedRestaurantsList.map((function(t){return r.a.createElement("p",{className:"collection-item",key:t.restaurant.id,onClick:function(){return e.addRestaurant(t.restaurant.id)}},t.restaurant.name)})))))),a=r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"List of restaurants"),r.a.createElement("div",{className:"collection"},e.restaurants.map((function(t){return r.a.createElement("p",{className:"collection-item",key:t.restaurant.id,onClick:function(){return e.removeRestaurant(t.restaurant.id)}},t.restaurant.name)}))))));return r.a.createElement("div",{className:"row"},a,t)},x=function(e){return r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("br",null),r.a.createElement("select",{className:"browser-default",onChange:function(t){return function(t){e.selectEstablishment(t.target.value)}(t)}},r.a.createElement("option",{value:"",disabled:!0,selected:!0},"Choose Establishment Type"),e.localEstablishments.map((function(e){return r.a.createElement("option",{key:e.establishment.id,value:e.establishment.id},e.establishment.name)})))))},I=function(e){var t=e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("span",null,"Logged In User, ",e.user.name)),r.a.createElement("li",null,r.a.createElement(O.b,{to:"",onClick:e.handleLogout},"LOG OUT"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(O.b,{to:"/login"},"LOG IN")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/signup"},"SIGN UP")));return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"light-green"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(O.b,{to:"/",className:"brand-logo"},"Where Should We Eat"),r.a.createElement(O.b,{to:"","data-target":"mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},t)))),r.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},t))};function L(e,t){return T.apply(this,arguments)}function T(){return(T=Object(i.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/zomato/categories",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({lat:t,lon:a})});case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/zomato/geocode",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({lat:t,lon:a})});case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return U.apply(this,arguments)}function U(){return(U=Object(i.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/zomato/cuisines",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({lat:t,lon:a})});case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,a,n){return H.apply(this,arguments)}function H(){return(H=Object(i.a)(l.a.mark((function e(t,a,n,r){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/zomato/search",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({lat:t,lon:a,establishment:n,category:r})});case 2:if(!(s=e.sent)){e.next=5;break}return e.abrupt("return",s.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/zomato/establishments",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({lat:t,lon:a})});case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleLogout=function(){y.logout(),e.setState({user:null})},e.handleSignupOrLogin=function(){e.setState({user:y.getUser()})},e.selectCategory=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({categoryId:a},(function(){return e.searchRestaurants()}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectEstablishment=function(){var t=Object(i.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({establishmentId:a},(function(){return e.searchRestaurants()}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.searchRestaurants=Object(i.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.state.lat,e.state.lon,e.state.establishmentId,e.state.categoryId),t.next=3,F(e.state.lat,e.state.lon,e.state.establishmentId,e.state.categoryId);case 3:a=t.sent,e.setState({restaurants:a});case 5:case"end":return t.stop()}}),t)}))),e.removeRestaurant=function(t){if(e.state.restaurants.length>1){var a=e.state.restaurants.filter((function(e){return e.restaurant.id===t})),n=e.state.removedRestaurantsList;n.push(a[0]);var r=e.state.restaurants.filter((function(e){return e.restaurant.id!==t}));e.setState({restaurants:r,removedRestaurantsList:n})}},e.addRestaurant=function(t){var a=e.state.removedRestaurantsList.filter((function(e){return e.restaurant.id===t})),n=e.state.restaurants;n.push(a[0]);var r=e.state.removedRestaurantsList.filter((function(e){return e.restaurant.id!==t}));e.setState({restaurants:n,removedRestaurantsList:r})},e.state={user:y.getUser(),localCategories:[],restaurants:[],removedRestaurantsList:[],establishments:[],cuisines:[],establishmentId:null,categoryId:null},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,r,s,o,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector(".sidenav"),v.a.Sidenav.init(t,{}),e.next=4,new Promise((function(e){navigator.geolocation.getCurrentPosition((function(t){return e({lat:t.coords.latitude,lon:t.coords.longitude})}))}));case 4:return a=e.sent,n=a.lat,r=a.lon,e.next=9,R(n,r);case 9:return s=e.sent,e.next=12,L(n,r);case 12:return o=e.sent,e.next=15,z(n,r);case 15:return c=e.sent,e.next=18,J(n,r);case 18:i=e.sent,this.setState({lat:n,lon:r,localInfo:s,localCategories:o,cuisines:i,establishments:c});case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(I,{handleLogout:this.handleLogout,user:this.state.user}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(t){t.history;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(N,{localInfo:e.state.localInfo}),r.a.createElement(C,{categoryId:e.state.categoryId,localCategories:e.state.localCategories,selectCategory:e.selectCategory,restaurants:e.state.restaurants}),r.a.createElement(x,{establishmentId:e.state.establishmentId,localEstablishments:e.state.establishments,selectEstablishment:e.selectEstablishment,restaurants:e.state.restaurants})),r.a.createElement(j,{restaurants:e.state.restaurants,removedRestaurantsList:e.state.removedRestaurantsList,removeRestaurant:e.removeRestaurant,addRestaurant:e.addRestaurant}))}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(t){var a=t.history;return r.a.createElement("div",{className:"container"},r.a.createElement(w,{history:a,handleSignupOrLogin:e.handleSignupOrLogin}))}}),r.a.createElement(h.a,{exact:!0,path:"/signup",render:function(t){var a=t.history;return r.a.createElement("div",{className:"container"},r.a.createElement(S,{history:a,handleSignupOrLogin:e.handleSignupOrLogin}))}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O.a,null,r.a.createElement(h.a,{component:W})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a2f717e9.chunk.js.map