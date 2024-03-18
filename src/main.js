import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const formRef = document.querySelector(".form");
const inputRef = document.querySelector("#text-search");
const galleryRef = document.querySelector(".gallery");
let queryInput = "";

inputRef.addEventListener("input", (event) => {
    queryInput = inputRef.value.trim();
    galleryRef.innerHTML = "";
});


formRef.addEventListener("submit", (event) => {
    event.preventDefault();

    const searchParams = new URLSearchParams({
    key: "42941180-7fae3d0b9e1a356f3d7e2df26",
    q:  queryInput ,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    });
    
    const url = `https://pixabay.com/api/?${searchParams}`;
    
    galleryRef.innerHTML = '<div class="loader"></div>';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
    .then(data => {
        galleryRef.innerHTML = '';
        const images = data.hits;
        if (images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
            return;
        }
      
      const markap = images.map(
    (image)=> `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      data-source ="${image.largeImageURL}"
      alt="${image.tags}"
      width=360px
      height=200px
    
    />
    <ul class="gallery-description">
          <li><h3>Likes</h3><p>${image.likes}</p>
          </li>
          <li><h3>Views</h3><p>${image.views}</p>
            </li>
            <li><h3>Comments</h3><p>${image.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${image.downloads}</p>
                </li>
          </ul>
  </a>
</li>
`).join("");
        galleryRef.insertAdjacentHTML("beforeend", markap);

		 const lightbox = new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
            });
            lightbox.on('show.simplelightbox', function () {});
            lightbox.refresh();
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: "Sorry, an error occurred while fetching images. Please try again later!",
            });
            console.error(error);
        });
});
