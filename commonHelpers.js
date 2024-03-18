import{i as c,S as d}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const h=document.querySelector(".form"),u=document.querySelector("#text-search"),n=document.querySelector(".gallery");let f="";u.addEventListener("input",a=>{f=u.value.trim(),n.innerHTML=""});h.addEventListener("submit",a=>{a.preventDefault();const l=`https://pixabay.com/api/?${new URLSearchParams({key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:f,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;n.innerHTML='<div class="loader"></div>',fetch(l).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{n.innerHTML="";const e=t.hits;if(e.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=e.map(o=>`<li class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
    <img
      class="gallery-image"
      src="${o.webformatURL}"
      data-source ="${o.largeImageURL}"
      alt="${o.tags}"
      width=360px
      height=200px
    
    />
    <ul class="gallery-description">
          <li><h3>Likes</h3><p>${o.likes}</p>
          </li>
          <li><h3>Views</h3><p>${o.views}</p>
            </li>
            <li><h3>Comments</h3><p>${o.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${o.downloads}</p>
                </li>
          </ul>
  </a>
</li>
`).join("");n.insertAdjacentHTML("beforeend",r);const s=new d(".gallery a",{captionsData:"alt"});s.on("show.simplelightbox",function(){}),s.refresh()}).catch(t=>{c.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"}),console.error(t)})});
//# sourceMappingURL=commonHelpers.js.map
