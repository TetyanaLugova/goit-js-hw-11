import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryRef } from "./pixabay-api";
export function createMarkup(data) {
    galleryRef.innerHTML = '';
    const images = data.hits;
        if (images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: "Sorry, there are no images matching your search query. Please try again!",
            });
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
    const galleryCfg = {
    captionsData: 'alt',
  };
  let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}