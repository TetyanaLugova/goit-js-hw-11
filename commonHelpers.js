import{S as c,i as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const u=document.querySelector(".form"),d=document.querySelector("#text-search"),a=document.querySelector(".gallery");function h(o){o=encodeURIComponent(o),a.innerHTML='<div class="loader"></div>';const s=`https://pixabay.com/api/?${new URLSearchParams({key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function m(o){a.innerHTML="";const t=o.hits;t.length===0&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const s=t.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source ="${e.largeImageURL}"
      alt="${e.tags}"
      width=360px
      height=200px
    />
    <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
  </a>
</li>
`).join("");a.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt"};let r=new c(".gallery a",i);r.on("show.simplelightbox",function(){}),r.refresh()}let l="";u.addEventListener("submit",o=>{o.preventDefault(),l=d.value.trim(),a.innerHTML="",l&&(a.innerHTML='<div class="loader"></div>',h(l).then(t=>m(t)).catch(t=>{f.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}))});
//# sourceMappingURL=commonHelpers.js.map
