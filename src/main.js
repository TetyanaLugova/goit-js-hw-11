//
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { formRef, inputRef, galleryRef, fetchImg } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";
let queryInput = ''; // створюємо локальну змінну для зберігання значення запиту
inputRef.addEventListener("input", (event) => {
    queryInput = inputRef.value.trim(); // оновлюємо значення локальної змінної при введенні
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
