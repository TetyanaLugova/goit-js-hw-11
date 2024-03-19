//  
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { formRef } from "./js/pixabay-api";
import { inputRef } from "./js/pixabay-api";
import { queryInput } from "./js/pixabay-api";
import { fetchImg } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
import { galleryRef } from './js/pixabay-api';

inputRef.addEventListener("input", (event) => {
    queryInput = inputRef.value.trim();
    galleryRef.innerHTML = '';
});

formRef.addEventListener("submit", (event)=>{
  event.preventDefault();
  if (queryInput) {
     galleryRef.innerHTML = '<div class="loader"></div>';
    fetchImg(queryInput)
    .then(data => createMarkup(data))
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: "Sorry, an error occurred while fetching images. Please try again later!",
      });
    });
  }
});
