!function(n){function e(e){for(var r,o,u=e[0],s=e[1],c=e[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=s[r]);for(p&&p(e);l.length;)l.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,u=1;u<t.length;u++){var s=t[u];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},a={2:0},i=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var p=s;i.push([10,1,0]),t()}({10:function(n,e,t){"use strict";t.r(e);t(4),t(5);var r={init:function(n){var e=this,t=n.button,r=n.drawer,a=n.content;t.addEventListener("click",(function(n){e._toggleDrawer(n,r)})),a.addEventListener("click",(function(n){e._closeDrawer(n,r)}))},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}},a={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},i={KEY:"8f7ba726dbdc6a6bfa0cec86ad9b7dde",BASE_URL:"https://restaurant-api.dicoding.dev/",BASE_IMAGE_URL:"https://restaurant-api.dicoding.dev/images/medium/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:"Restaurant-List",DATABASE_NAME:"restaurant-list-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurant",API_KEY:12345},o={RESTAURANT_LIST:"".concat(i.BASE_URL,"list"),DETAIL:function(n){return"".concat(i.BASE_URL,"detail/").concat(n)},REVIEW:"".concat(i.BASE_URL,"review")};function u(n,e,t,r,a,i,o){try{var u=n[i](o),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,a)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){u(i,r,a,o,s,"next",n)}function s(n){u(i,r,a,o,s,"throw",n)}o(void 0)}))}}function c(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var p=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r,a,u,p;return e=n,t=null,r=[{key:"restaurantList",value:(p=s(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.RESTAURANT_LIST);case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.restaurants);case 7:case"end":return n.stop()}}),n)}))),function(){return p.apply(this,arguments)})},{key:"restaurantDetail",value:(u=s(regeneratorRuntime.mark((function n(e){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.DETAIL(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.restaurant);case 7:case"end":return n.stop()}}),n)}))),function(n){return u.apply(this,arguments)})},{key:"postReview",value:(a=s(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.REVIEW,{method:"POST",headers:{"Content-Type":"aplication/json","X-Auth-Token":i.API_KEY},body:JSON.stringify(e)});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)}))),function(n){return a.apply(this,arguments)})}],t&&c(e.prototype,t),r&&c(e,r),n}(),d=function(n){return'\n    <h2 class="restaurant__title">'.concat(n.name,'</h2>\n    <div class="restaurant-detail__header">\n        <img class="restaurant-detail__header__poster" alt="').concat(n.name,'"\n            src="').concat(i.BASE_IMAGE_URL+n.pictureId,'">\n    </div>\n    <div class="restaurant__info">\n        <h3 style="text-align: center;">Restaurant Information</h3>\n        <hr>\n        <h4>Rating</h4>\n        <p>⭐️').concat(n.rating,"</p>\n        <h4>Categories</h4>\n        <p>\n            ").concat(n.categories.map((function(n){return"\n                ".concat(n.name,"\n            ")})).join(", "),"\n        </p>\n        <h4>Address</h4>\n        <p>").concat(n.city,", ").concat(n.address,'</p>\n   \n        <div class="restaurant__menu">\n            <div class="food__menu">\n                <h4>Food Menus</h4>\n                ').concat(n.menus.foods.map((function(n){return"\n                <ul> \n                    <li>".concat(n.name,"</li>\n                </ul>\n                ")})).join(""),"\n            </div>\n            <div class=drink__menu>\n            <h4>Drink Menus</h4>\n                ").concat(n.menus.drinks.map((function(n){return"\n                <ul> \n                    <li>".concat(n.name,"</li>\n                </ul>\n                ")})).join(""),"\n            </div>\n        </div>\n    </div>\n")},l=function(n){return'\n    <div class="restaurant-item">\n        <div class="restaurant-item__header">\n            <img class="restaurant-item__header__poster lazyload" alt="'.concat(n.name,'"\n                src="').concat(i.BASE_IMAGE_URL+n.pictureId,'">\n            <div class="restaurant-item__header__rating">\n                <p>⭐️<span class="restaurant-item__header__rating__score">').concat(n.rating,'</span></p>\n            </div>\n        </div>\n        <div class="restaurant-item__content">\n            <h3 class="restaurant-item__title"><a class="content__title" href=',"/#/detail/".concat(n.id),">").concat(n.name,'</a></h3>\n            <span style="font-weight: bold;" ><i class="fa fa-map-marker" aria-hidden="true"></i> ').concat(n.city,"</span>\n            <p>").concat(n.description,"</p>\n        </div>\n    </div>\n")},f=function(n){return'\n    <h3 style="text-align: center; margin-bottom: 5px;">\n    Customer Review</h3>\n    '.concat(n.customerReviews.map((function(n){return'\n    <div class="restaurant__review">\n        <h5 tabindex="0">'.concat(n.name,'</h5>\n        <h6 tabindex="0" class="date-review">').concat(n.date,'</h6>\n        <p tabindex="0">').concat(n.review,"</p>\n    </div>\n    ")})).join(""),"\n")};function m(n,e,t,r,a,i,o){try{var u=n[i](o),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,a)}function h(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){m(i,r,a,o,u,"next",n)}function u(n){m(i,r,a,o,u,"throw",n)}o(void 0)}))}}var v={render:function(){return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div class="content">\n      <h2 class="content__heading">Explore Restaurant</h2>\n      <div id="restaurants" class="restaurants">\n      </div>\n    </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return h(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.restaurantList();case 2:e=n.sent,t=document.querySelector("#restaurants"),e.forEach((function(n){t.innerHTML+=l(n)}));case 5:case"end":return n.stop()}}),n)})))()}},g=t(3);function _(n,e,t,r,a,i,o){try{var u=n[i](o),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,a)}function b(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){_(i,r,a,o,u,"next",n)}function u(n){_(i,r,a,o,u,"throw",n)}o(void 0)}))}}var x=i.DATABASE_NAME,w=i.DATABASE_VERSION,y=i.OBJECT_STORE_NAME,k=Object(g.a)(x,w,{upgrade:function(n){n.createObjectStore(y,{keyPath:"id"})}}),R={getRestaurant:function(n){return b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k;case 2:return e.abrupt("return",e.sent.get(y,n));case 3:case"end":return e.stop()}}),e)})))()},getAllRestaurants:function(){return b(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k;case 2:return n.abrupt("return",n.sent.getAll(y));case 3:case"end":return n.stop()}}),n)})))()},putRestaurant:function(n){return b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k;case 2:return e.abrupt("return",e.sent.put(y,n));case 3:case"end":return e.stop()}}),e)})))()},deleteRestaurant:function(n){return b(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k;case 2:return e.abrupt("return",e.sent.delete(y,n));case 3:case"end":return e.stop()}}),e)})))()}};function E(n,e,t,r,a,i,o){try{var u=n[i](o),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,a)}function A(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){E(i,r,a,o,u,"next",n)}function u(n){E(i,r,a,o,u,"throw",n)}o(void 0)}))}}var S={init:function(n){var e=this;return A(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.favoriteButtonContainer,a=n.restaurant,e._favoriteButtonContainer=r,e._restaurant=a,t.next=5,e._renderButton();case 5:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var n=this;return A(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._restaurant.id,e.next=3,n._isRestaurantExist(t);case 3:if(!e.sent){e.next=7;break}n._renderFavorited(),e.next=8;break;case 7:n._renderFavorite();case 8:case"end":return e.stop()}}),e)})))()},_isRestaurantExist:function(n){return A(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.getRestaurant(n);case 2:return t=e.sent,e.abrupt("return",!!t);case 4:case"end":return e.stop()}}),e)})))()},_renderFavorite:function(){var n=this;this._favoriteButtonContainer.innerHTML='\n    <button aria-label="like this restaurant" id="favoriteButton" class="like">\n        <i class="fa fa-heart-o" aria-hidden="true"></i>\n    </button>\n',document.querySelector("#favoriteButton").addEventListener("click",A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.putRestaurant(n._restaurant);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))},_renderFavorited:function(){var n=this;this._favoriteButtonContainer.innerHTML='\n    <button aria-label="unlike this restaurant" id="favoriteButton" class="like">\n        <i class="fa fa-heart" aria-hidden="true"></i>\n    </button>\n',document.querySelector("#favoriteButton").addEventListener("click",A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.deleteRestaurant(n._restaurant.id);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))}};function L(n,e,t,r,a,i,o){try{var u=n[i](o),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,a)}function P(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){L(i,r,a,o,u,"next",n)}function u(n){L(i,r,a,o,u,"throw",n)}o(void 0)}))}}function T(n,e,t,r,a,i,o){try{var u=n[i](o),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,a)}function B(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){T(i,r,a,o,u,"next",n)}function u(n){T(i,r,a,o,u,"throw",n)}o(void 0)}))}}var C={"/":v,"/restaurant-list":v,"/detail/:id":{render:function(){return P(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <div id="restaurant" class="restaurant"></div>\n    <div id="customerReview" class="restaurant__overview">\n    </div>\n    <div id="favoriteButtonContainer"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return P(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.parseActiveUrlWithoutCombiner(),n.next=3,p.restaurantDetail(e.id);case 3:t=n.sent,document.querySelector("#restaurant").innerHTML=d(t),document.querySelector("#customerReview").innerHTML=f(t),S.init({favoriteButtonContainer:document.querySelector("#favoriteButtonContainer"),restaurant:{id:t.id,name:t.name,description:t.description,pictureId:t.pictureId,city:t.city,rating:t.rating}});case 9:case"end":return n.stop()}}),n)})))()}},"/favorite":{render:function(){return B(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Here It Comes Your Favorite Restaurant !!</h2>\n        <div id="restaurants" class="restaurants">\n        </div>\n      </div>\n      ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return B(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.getAllRestaurants();case 2:e=n.sent,t=document.querySelector("#restaurants"),e.forEach((function(n){t.innerHTML+=l(n)}));case 5:case"end":return n.stop()}}),n)})))()}}};function j(n,e,t,r,a,i,o){try{var u=n[i](o),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,a)}function O(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var M=function(){function n(e){var t=e.button,r=e.drawer,a=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.button=t,this.drawer=r,this.content=a,this._initialAppShell()}var e,t,i,o,u;return e=n,(t=[{key:"_initialAppShell",value:function(){r.init({button:this.button,drawer:this.drawer,content:this.content})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.parseActiveUrlWithCombiner(),t=C[e],n.next=4,t.render();case 4:return this.content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:case"end":return n.stop()}}),n,this)})),u=function(){var n=this,e=arguments;return new Promise((function(t,r){var a=o.apply(n,e);function i(n){j(a,t,r,i,u,"next",n)}function u(n){j(a,t,r,i,u,"throw",n)}i(void 0)}))},function(){return u.apply(this,arguments)})}])&&O(e.prototype,t),i&&O(e,i),n}(),I=t(2),z=t.n(I);function D(n,e,t,r,a,i,o){try{var u=n[i](o),s=u.value}catch(n){return void t(n)}u.done?e(s):Promise.resolve(s).then(r,a)}var U=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,z.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(n){D(i,r,a,o,u,"next",n)}function u(n){D(i,r,a,o,u,"throw",n)}o(void 0)}))});return function(){return e.apply(this,arguments)}}(),N=(t(1),t(9),new M({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#mainContent")}));window.addEventListener("hashchange",(function(){N.renderPage()})),window.addEventListener("load",(function(){N.renderPage(),U()}))},5:function(n,e,t){var r=t(6),a=t(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},7:function(n,e,t){(e=t(8)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap&family=Kanit&display=swap);"]),e.push([n.i,"*{  \n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nhtml{\n  scroll-behavior: smooth;\n}\n\nbody{\n  font-family: 'Kanit', sans-serif;   \n}\n\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  background-color: #bf1722;\n  color: white;\n  padding: 8px;\n  z-index: 100;\n }\n  \n.skip-link:focus {\n  top: 0;\n}\n\n/*\n * App-Bar\n */\n.app-bar {\n  padding: 8px 16px;\n  background-color: red;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n  display: flex;\n  align-items: center;\n}\n   \n.app-bar .app-bar__menu button {\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  padding: 8px;\n  cursor: pointer;\n  color: white;\n  min-width: 44px;\n  min-height: 44px;\n}\n   \n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n   \n.app-bar .app-bar__brand h3 {\n  color: yellow;\n  font-size: 22px;\n  user-select: none;\n  font-family: 'Saira Stencil One', cursive;\n}\n   \n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 8px;\n  background-color: red;\n  overflow: hidden;\n}\n   \n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n   \n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  padding: 8px;\n  margin-bottom: 5px;\n  width: 100%;\n  min-width: 44px;\n  min-height: 44px;\n}\n/*\n   Like\n*/\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: white;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/* #topnav {\n    background-color:red;\n    border: 1px solid rgba(240, 37, 37, 0.2);\n    padding-bottom: 5px;\n    font-size: 18px;\n    color: white;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    transform: scale(1,0);\n    transform-origin: top;\n    transition: transform 400ms ease-in-out;\n}\n#topnav.open {\n    transform: scale(1,1);\n    position: relative;\n}\n#topnav #menu-bar{\n    display: block;\n    list-style-type: none;\n    padding-left: 20px;\n}\n#menu-bar li{\n    text-align: left;\n    margin: 15px auto;\n    \n}\n.link {\n    display: inline-block;\n    text-decoration: none;\n    color: white;\n      min-width: 44px;\n      min-height: 44px;\n}\n\n.link:hover{\n    color: #cccccc;\n}\n.navbar-toggle{\n    display: block;\n    cursor: pointer;\n    font-size: 32px;\n    min-width: 44px;\n    text-decoration: none;\n    color: white;\n    position: absolute;\n    display: flex;\n    align-items: center;\n    top: 0;\n    left: 0;\n    margin-left: 30px\n} */\n\n/*\n * Hero Element\n */\n.hero {\n  display: flex;\n  align-items: center;\n  min-height: 480px;\n  width: 100%;\n  text-align: center;\n  background-image: url(\"/images/hero-image_4-small.jpg\");\n  background-position: center;\n  background-color: white;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.hero-box {\n  margin: 0 auto;\n  max-width: 800px;\n}\n.hero-title {\n  color: white;\n  font-weight: 600;\n  font-size: 36px;\n}\n\n/*\n  Main Content\n*/\n \nmain {\n  padding: 32px;  \n  flex: 1;\n}\n   \n.content {\n  margin: 0 auto;\n  min-height: 100%;\n}\n   \n.content .content__heading {\n  font-weight: normal;\n}\n   \n   \n/*\n  Restaurants\n*/\n   \n.restaurants {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 16px;\n  margin: 32px 0;\n}\n   \n   \n/*\n  Restaurant Item\n*/\n   \n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n   \n.restaurant-item__header {\n  position: relative;\n}\n   \n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\n  width: 100%;\n  height: 190px;\n}\n   \n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\n  position: absolute;\n  padding: 8px;\n  bottom: 20px;\n  left: 0;\n  display: inline-block;\n  background-color: black;\n  color: white;\n}\n   \n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\n  margin-left: 10px;\n}\n   \n.restaurant-item .restaurant-item__content {\n  padding: 16px;\n}\n      \n.restaurant-item .restaurant-item__content a {\n  display: inline-block;\n  color: #db0000;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: larger;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant-item .restaurant-item__content p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4; /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n   \n/*\n  Restaurant Detail\n*/\n   \n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n  \n}\n\n.restaurant .restaurant__title{\n  border-bottom: 1px solid #bfbfbf;\n  padding: 5px;\n  color: red;\n  text-align: center;\n}\n\n.restaurant .restaurant-detail__header {\n  position: relative;\n}\n   \n.restaurant .restaurant-detail__header .restaurant-detail__header__poster {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 5px;\n}\n   \n/* .restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 400px;\n  border-radius: 5px;\n} */\n\n.restaurant .restaurant__info {\n  border: 1px solid #bfbfbf;\n  border-radius: 10px;\n  padding: 10px;\n}\n   \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n   \n.restaurant .restaurant__info .restaurant__menu ul {\n  margin-left: 20px;\n}\n\n.restaurant__review__form {\n  margin-top: 18px;\n  border: 1px solid #bfbfbf;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.restaurant__review__form input[type=text], input[type=email], textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant__review__form button{\n  background-color: red;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n.restaurant__review__form button:hover{\n  background-color: #262626;\n}\n\n.restaurant__overview{\n  margin-top: 18px;\n  border: 1px solid #bfbfbf;\n  border-radius: 10px;\n  padding: 5px;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n.restaurant__overview .restaurant__review{\n  border: 1px solid #bfbfbf;\n  border-radius: 10px;\n  padding: 10px;\n  margin-bottom: 10px;\n}\n\n/*\n * footer\n */\nfooter {\n  bottom: 0;\n  position: static;\n  background-color: red;\n  padding: 2em;\n  width: 100%;\n  text-align: center;\n  color: white;\n  font-weight: 600;\n}\n\n@media screen and (min-width: 650px) {\n  .hero {\n    display: flex;\n    align-items: center;\n    min-height: 500px;\n    width: 100%;\n    text-align: center;\n    background-image: url(\"/images/hero-image_4-large.jpg\");\n    background-position: center;\n    background-color: white;\n    background-size: cover;\n  }\n  .app-bar {\n    grid-template-columns: 1fr auto;\n    padding: 8px 32px;\n  }\n  .app-bar .app-bar__brand {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n   \n  .app-bar .app-bar__brand h1 {\n    font-size: 1.5em;\n  }\n   \n  .app-bar .app-bar__menu {\n    display: none;\n  }\n   \n  .app-bar .app-bar__navigation {\n    position: static;\n    width: 100%;\n  }\n   \n  .app-bar .app-bar__navigation ul li {\n    display: inline-block;\n  }\n   \n  .app-bar .app-bar__navigation ul li a {\n    display: inline-block;\n    width: 120px;\n    text-align: center;\n    margin: 0;\n    min-width: 44px;\n    min-height: 44px;\n  }\n   \n  .restaurants {\n    grid-template-columns: 1fr 1fr;\n  }\n   \n  .restaurant {\n    grid-template-columns: auto 1fr;\n    max-width: 100%;\n  }\n\n\n  .restaurant .restaurant__title {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  .restaurant .restaurant__review__form {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n   \n  .restaurant .restaurant__overview {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n}\n   \n@media screen and (min-width: 800px) {\n  .app-bar .app-bar__brand h1 {\n    font-size: 2em;\n  }\n}\n   \n@media screen and (min-width: 850px) {\n  .restaurants {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n   \n@media screen and (min-width: 1200px) {\n  .restaurants {\n     grid-template-columns: repeat(4, 1fr);\n  }\n}\n   \n@media screen and (min-width: 1600px) {\n  .restaurants {\n    grid-template-columns: repeat(5, 1fr);\n  }\n}",""]),n.exports=e}});