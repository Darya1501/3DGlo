(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,r,c,a,u,i,l;(function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");function r(){var e=(new Date("2021, 9, 20").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}}var c=r();function a(){c=r(),t.textContent=c.hours,n.textContent=c.minutes<10?"0"+c.minutes:c.minutes,o.textContent=c.seconds<10?"0"+c.seconds:c.seconds}c.timeRemaining>0?(a(),setInterval(a,1e3)):(t.textContent="00",n.textContent="00",o.textContent="00")})(),l=document.querySelector("menu"),document.addEventListener("click",(function(e){var t=e.target;(t.closest(".menu")||"A"===t.tagName&&t.closest("menu")||l.classList.contains("active-menu")&&!t.closest("menu"))&&l.classList.toggle("active-menu")})),a=document.querySelector(".popup"),u=document.querySelectorAll(".popup-btn"),i=a.querySelector(".popup-content"),u.forEach((function(e){e.addEventListener("click",(function(){a.style.display="block";var e=0;document.documentElement.clientWidth>768&&(i.style.opacity=0,i.style.top="30%",function t(){i.style.opacity<1?(i.style.opacity=.05+parseFloat(i.style.opacity),i.style.top=-1+parseFloat(i.style.top)+"%",e=requestAnimationFrame(t)):cancelAnimationFrame(e)}())}))})),a.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?a.style.display="none":(t=t.closest(".popup-content"))||(a.style.display="none")})),function(){var t,n=function(t,n){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){o=o.call(t)},n:function(){var e=o.next();return u=e.done,e},e:function(e){i=!0,a=e},f:function(){try{u||null==o.return||o.return()}finally{if(i)throw a}}}}(document.querySelectorAll('a[href*="#"]'));try{var o=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1),o=document.getElementById(n);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}))};for(n.s();!(t=n.n()).done;)o()}catch(e){n.e(e)}finally{n.f()}}(),o=document.querySelector(".service-header"),r=o.querySelectorAll(".service-header-tab"),c=document.querySelectorAll(".service-tab"),o.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab")).classList.contains("service-header-tab")&&r.forEach((function(e,n){e===t&&function(e){for(var t=0;t<c.length;t++)e===t?(r[t].classList.add("active"),c[t].classList.remove("d-none")):(r[t].classList.remove("active"),c[t].classList.add("d-none"))}(n)}))})),function(){var e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-content");!function(){for(var t=0;t<e.length;t++){var n=document.createElement("li");n.classList.add("dot"),0===t&&n.classList.add("dot-active"),document.querySelector(".portfolio-dots").append(n)}}();var n,o=document.querySelectorAll(".dot"),r=0,c=function(e,t,n){e[t].classList.remove(n)},a=function(e,t,n){e[t].classList.add(n)},u=function(){c(e,r,"portfolio-item-active"),c(o,r,"dot-active"),++r>=e.length&&(r=0),a(e,r,"portfolio-item-active"),a(o,r,"dot-active")},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;n=setInterval(u,e)};t.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches(".portfolio-btn, .dot")&&(c(e,r,"portfolio-item-active"),c(o,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&o.forEach((function(e,t){e===n&&(r=t)})),r>=e.length&&(r=0),r<0&&(r=e.length-1),a(e,r,"portfolio-item-active"),a(o,r,"dot-active"))})),t.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&i(1500)})),i(1500)}(),t=document.querySelector(".command .row"),n=function(e){var t=e.getAttribute("src"),n=e.dataset.img;e.setAttribute("src",n),e.dataset.img=t},t.addEventListener("mouseover",(function(e){var t=e.target;n(t)})),t.addEventListener("mouseout",(function(e){var t=e.target;n(t)})),function(){var e=document.querySelectorAll(".calc-block > input"),t=document.querySelectorAll(".form-name"),n=document.querySelector(".mess"),o=document.querySelectorAll(".form-email"),r=document.querySelectorAll(".form-phone"),c=[];c.push(n);var a=function(e,t){e.addEventListener("input",(function(){e.value=e.value.replace(t,"")}))};e.forEach((function(e){c.push(e),a(e,/\D/g)})),o.forEach((function(e){c.push(e),a(e,/[^A-Za-z0-9@-_.!~*']/g)})),r.forEach((function(e){c.push(e),a(e,/[^0-9-()+]/g)})),t.forEach((function(e){c.push(e),a(e,/[^А-Яа-я -]/g)})),a(n,/[^А-Яа-я -0-9!?,.]/g),c.forEach((function(e){var t;(t=e).addEventListener("blur",(function(){t.value=t.value.replace(/^.{0,1}$/g,""),t.value=t.value.replace(/( |-)\1{1,}/g,"$1"),t.value=t.value.replace(/^( |-)/,""),t.value=t.value.replace(/( |-)$/,"");var e=new Event("input");t.dispatchEvent(e)}))}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),c=document.querySelector(".calc-count"),a=document.getElementById("total"),u=function(){var t=0,u=1,i=1,l=n.options[n.selectedIndex].value,s=+o.value;c.value>1&&(u+=(c.value-1)/10),r.value&&r.value<5?i*=2:r.value&&r.value<10&&(i*=1.5),l&&s&&(t=e*l*s*u*i),a.textContent=0;var d=1,m=setInterval((function(){+a.textContent>=t?(a.textContent=t,clearInterval(m)):(d+=1,a.textContent=d+ +a.textContent)}),1)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&u()}))}(),function(){var e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),o=document.createElement("div");o.style.cssText="\n      width: 100%;\n      height: 30px;\n      background-size: 27px;\n      background-repeat: no-repeat;\n      background-position: top center;\n    ";var r=function(e){e.addEventListener("submit",(function(t){t.preventDefault(),e.appendChild(o),o.style.backgroundImage="url(images/preloader.gif)";var n=new FormData(e),r={};n.forEach((function(e,t){r[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(r).then((function(t){if(200!==t.status)throw new Error("Status network not 200");o.style.backgroundImage="url(images/success.svg)",e.reset()})).catch((function(e){o.style.backgroundImage="url(images/error.svg)",console.log("error: ",e)}))}))};r(e),r(t),r(n)}()})();