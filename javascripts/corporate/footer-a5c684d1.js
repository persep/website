(function(){Corporate.Footer=function(){function o(){this.footerLogo=$(".footer__logo"),this.animateLogo()}return o.prototype.animateLogo=function(){return this.footerLogo.appear().on("appear",function(o){return function(t,n){return o.footerLogo.removeClass("hidden")}}(this)).on("disappear",function(o){return function(t,n){return o.footerLogo.addClass("hidden")}}(this))},o}()}).call(this);