jQuery(document).ready((function(p){p(".popup-trigger").on("click",(function(e){e.preventDefault();var i=p(this).data("number");p(".popup.popup-"+i).addClass("is-visible")})),p(".popup").on("click",(function(e){(p(e.target).is(".popup-close")||p(e.target).is(".popup"))&&(e.preventDefault(),p(this).removeClass("is-visible"))})),p(document).keyup((function(e){"27"==e.which&&p(".popup").removeClass("is-visible")}))}));
//# sourceMappingURL=index.3e96bda6.js.map