!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelectorAll(".js-close-menu"),n=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n);var r=!0,l=!1,a=void 0;try{for(var c,d=o[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var i=c.value;console.log("test"),i.addEventListener("click",n)}}catch(e){l=!0,a=e}finally{try{r||null==d.return||d.return()}finally{if(l)throw a}}window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}();
//# sourceMappingURL=index.c72af581.js.map
