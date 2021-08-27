(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(645),a=r.n(t)()((function(n){return n[1]}));a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Varela+Round&display=swap);"]),a.push([n.id,'* {\r\n  font-family: "Varela Round", sans-serif;\r\n  color: rgb(13, 13, 87);\r\n  transition: all 0.2s ease;\r\n}\r\n\r\nbody {\r\n  overflow: auto;\r\n}\r\n\r\n/* Background types */\r\n.standard {\r\n  background: rgb(205, 205, 205);\r\n  background: linear-gradient(\r\n    190deg,\r\n    rgba(205, 205, 205, 1) 0%,\r\n    rgba(163, 163, 163, 1) 100%\r\n  );\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.sunny {\r\n  background: #dae93d;\r\n  background: linear-gradient(153deg, #dae93d 0%, #2cdcff 46%);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.cloudy {\r\n  background: rgb(25, 212, 249);\r\n  background: linear-gradient(\r\n    0deg,\r\n    rgba(25, 212, 249, 1) 0%,\r\n    rgb(46, 46, 46) 100%\r\n  );\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.storm {\r\n  background: rgb(241, 255, 0);\r\n  background: linear-gradient(\r\n    347deg,\r\n    rgba(241, 255, 0, 1) 0%,\r\n    rgba(0, 0, 79, 1) 68%\r\n  );\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.snow {\r\n  background: rgb(9, 163, 255);\r\n  background: linear-gradient(\r\n    180deg,\r\n    rgba(9, 163, 255, 1) 0%,\r\n    rgba(255, 255, 255, 1) 63%\r\n  );\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n/* Containers */\r\n#main-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border-radius: 12px;\r\n  width: 40%;\r\n  padding: 30px 0;\r\n  position: relative;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n  backdrop-filter: blur(4px);\r\n}\r\n\r\n#header-container {\r\n  display: flex;\r\n  align-self: center;\r\n}\r\n\r\n#results {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* Results styling */\r\n.location {\r\n  font-size: 14px;\r\n  text-transform: uppercase;\r\n  align-self: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n.main-weather-div {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin: 0 70px;\r\n}\r\n\r\n.main-weather {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  align-self: center;\r\n}\r\n\r\n.weather-icon {\r\n  justify-self: center;\r\n  width: 100px;\r\n}\r\n\r\n.feels-like-div {\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  margin-top: 30px;\r\n}\r\n\r\n.feels-like-p {\r\n  font-size: 14px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.feels-like {\r\n  font-size: 55px;\r\n  font-weight: bold;\r\n  margin-top: 0;\r\n}\r\n\r\n.extremes-div {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-direction: row;\r\n  margin: -45px 70px 0 70px;\r\n}\r\n\r\n.min-temp {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: rgb(12, 138, 211);\r\n}\r\n\r\n.max-temp {\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  color: rgb(255, 108, 108);\r\n}\r\n\r\n.additional-container {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin-top: 20px;\r\n}\r\n\r\n.humidity-p {\r\n  font-size: 14px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.humidity {\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n}\r\n\r\n.pressure-p {\r\n  font-size: 14px;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  margin-top: 15px;\r\n}\r\n\r\n.pressure {\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  grid-column: 3 / 5;\r\n  grid-row: 7 / 8;\r\n}\r\n\r\n/* Nodes */\r\nimg {\r\n  align-self: center;\r\n  width: 15%;\r\n  margin-right: 10px;\r\n}\r\n\r\nh1 {\r\n  color: rgb(13, 13, 87);\r\n}\r\n\r\nbutton,\r\ninput {\r\n  font-size: 16px;\r\n  text-decoration: none;\r\n  margin: 10px 20px;\r\n  padding: 10px 15px;\r\n  border: 0;\r\n  border-radius: 8px;\r\n  box-shadow: 0px 15px 30px rgb(0 0 0 / 15%);\r\n  outline: none;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n  background-color: #f7bd41;\r\n}\r\n',""]);const i=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(t)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&a[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},o=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=r(p),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(e[u].references++,e[u].updater(m)):e.push({identifier:p,updater:a(m,t),references:1}),o.push(p)}return o}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var i=t(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var s=r(i[o]);e[s].references--}for(var c=t(n,a),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t=r.css,a=r.media,i=r.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=r(379),e=r.n(n),t=r(795),a=r.n(t),i=r(695),o=r.n(i),s=r(216),c=r.n(s),d=r(426),l={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=r.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=o()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};l.domAPI=a(),l.insertStyleElement=c(),e()(d.Z,l),d.Z&&d.Z.locals&&d.Z.locals;const p=document.getElementById("search-input"),u=document.getElementById("search-btn"),m=document.querySelector("body"),f=document.getElementById("results");u.onclick=async()=>{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${p.value}&APPID=dd4ab54125520d0ab97086917ac5f4a4`,{mode:"cors"}),e=await n.json();if(200==e.cod){f.innerHTML="";const n=document.createElement("p"),r=document.createElement("h1"),t=document.createElement("img"),a=document.createElement("p"),i=document.createElement("h1"),o=document.createElement("h1"),s=document.createElement("h1"),c=document.createElement("p"),d=document.createElement("h1"),l=document.createElement("p"),p=document.createElement("h1"),u=document.createElement("div"),g=document.createElement("div"),h=document.createElement("div"),x=document.createElement("div"),b=document.createElement("div"),v=document.createElement("div");switch(n.className="location",r.className="main-weather",t.className="weather-icon",a.className="feels-like-p",i.className="feels-like",o.className="min-temp",s.className="max-temp",c.className="humidity-p",d.className="humidity",l.className="pressure-p",p.className="pressure",u.className="main-weather-div",g.className="feels-like-div",h.className="extremes-div",x.className="humidity-div",b.className="pressure-div",v.className="additional-container",n.textContent=`${e.name}, ${e.sys.country}`,r.textContent=`${e.weather[0].main}`,t.src=`../src/img/${e.weather[0].main.toLowerCase()}.png`,a.textContent="Feels like",i.textContent=`${e.main.feels_like}`,o.textContent=`${e.main.temp_min}`,s.textContent=`${e.main.temp_max}`,c.textContent="Humidity",d.textContent=`${e.main.humidity}`,l.textContent="Pressure",p.textContent=`${e.main.pressure}`,e.weather[0].main){case"Clear":m.className="sunny";break;case"Clouds":case"Rain":m.className="cloudy";break;case"Snow":m.className="snow";break;case"Thunderstorm":m.className="storm";break;default:m.className="standard"}f.appendChild(n),u.appendChild(r),u.appendChild(t),f.appendChild(u),g.appendChild(a),g.appendChild(i),f.appendChild(g),h.appendChild(o),h.appendChild(s),f.appendChild(h),x.appendChild(c),x.appendChild(d),b.appendChild(l),b.appendChild(p),v.appendChild(x),v.appendChild(b),f.appendChild(v),console.log(e)}else{f.innerHTML="",m.className="standard",f.style.justifyContent="center";const n=document.createElement("p"),e=document.createElement("img");e.src="../src/img/error-icon.png",n.textContent="Something went wrong",n.style.alignSelf="center",f.appendChild(e),f.appendChild(n)}}})()})();