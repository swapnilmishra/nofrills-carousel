import e,{useState as a}from"react";var t=function(t){var r=t.images,c=r.length,n=a(0),l=n[0],o=n[1];return console.log(l),e.createElement("div",{className:"carousel-container"},e.createElement("div",{className:"carousel-arrow"},e.createElement("div",{onClick:function(){o(0!==l?l-1:c-1)}},e.createElement("div",null,"<"))),e.createElement("div",{className:"carousel-content"},r.map(function(a,t){var r="";return e.createElement("img",{className:r+=t!==l?" hide":" animate",src:a,key:t,alt:a})})),e.createElement("div",{className:"carousel-arrow"},e.createElement("div",{onClick:function(){o(l+1!==c?l+1:0)}},">")))};export{t as Carousel};
//# sourceMappingURL=carousel.esm.js.map
