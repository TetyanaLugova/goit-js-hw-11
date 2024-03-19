import{S as f,i as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(r){if(r.ep)return;r.ep=!0;const e=s(r);fetch(r.href,e)}})();const d=document.querySelector(".form"),c=document.querySelector("#text-search"),n=document.querySelector(".gallery");function h(t){t=encodeURIComponent(t),n.innerHTML='<div class="loader"></div>';const s=`https://pixabay.com/api/?${new URLSearchParams({key:"42941180-7fae3d0b9e1a356f3d7e2df26",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(s).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}function m(t){n.innerHTML="",console.log(t);const o=t.hits;o.length===0&&iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const s=o.map(e=>`<li class="gallery-item">
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
`).join("");n.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt"};let r=new f(".gallery a",i);r.on("show.simplelightbox",function(){}),r.refresh()}let l="";c.addEventListener("input",t=>{l=c.value.trim(),n.innerHTML=""});d.addEventListener("submit",t=>{t.preventDefault(),l&&(n.innerHTML='<div class="loader"></div>',h(l).then(o=>m(o)).catch(o=>{u.error({title:"Error",message:"Sorry, an error occurred while fetching images. Please try again later!"})}))});
//# sourceMappingURL=commonHelpers.js.map
