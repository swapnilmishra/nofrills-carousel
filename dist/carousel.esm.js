import e,{useState as a}from"react";var r=function(r){var t=r.items,n=r.rightArrowBtnCls;void 0===n&&(n="");var c=r.leftArrowBtnCls;void 0===c&&(c="");var l=t.length,o=a(0),i=o[0],s=o[1];return console.log(i),e.createElement("div",{className:"carousel-container"},e.createElement("div",{className:"carousel-arrow"},e.createElement("div",{onClick:function(){s(0!==i?i-1:l-1)},className:""+c},e.createElement("div",null,"<"))),e.createElement("div",{className:"carousel-content"},t.map(function(a,r){var t="";return e.createElement("div",{className:t+=r!==i?" hide":" animate",key:r},a)})),e.createElement("div",{className:"carousel-arrow"},e.createElement("div",{onClick:function(){s(i+1!==l?i+1:0)},className:""+n},">")))};export{r as Carousel};
//# sourceMappingURL=carousel.esm.js.map