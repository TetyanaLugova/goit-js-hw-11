export const formRef = document.querySelector(".form");
export const inputRef = document.querySelector("#text-search");
export const galleryRef = document.querySelector(".gallery");
export let queryInput;
export function fetchImg(queryInput) {
     queryInput = encodeURIComponent(queryInput);
    galleryRef.innerHTML = '<div class="loader"></div>';
    const searchParams = new URLSearchParams({
        key: "42941180-7fae3d0b9e1a356f3d7e2df26",
        q: queryInput,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
};
    