!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r,i,u,c=t("h6c0i"),l=document.querySelector(".form"),a=document.querySelector(".delay"),d=document.querySelector(".step"),f=document.querySelector(".amount");function s(e,o){return console.log(e),console.log(o),new Promise((function(n,t){setTimeout((function(){Math.random()>.3?n({position:e,delay:o}):t("error")}),o)}))}l.addEventListener("submit",(function(e){e.preventDefault(),r=Number(a.value),i=Number(f.value),u=Number(d.value);for(var o=1;o<=i;o+=1)s(o,r).then((function(e){var o=e.position,n=e.delay;c.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;c.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),r+=u}))}();
//# sourceMappingURL=03-promises.15a4ce82.js.map