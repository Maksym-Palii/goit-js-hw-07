import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listGalleryEl = document.querySelector(".gallery");

const imgMarkup = createGalleryItemMarcup(galleryItems);
listGalleryEl.innerHTML = imgMarkup;

listGalleryEl.addEventListener("click", onListGalleryClick);

function createGalleryItemMarcup(images) {
  return images
    .map(({ description, original, preview }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `;
    })
    .join("");
}

console.log(listGalleryEl);

function onListGalleryClick(evt) {
  evt.preventDefault();
  const isImageEl = evt.target.classList.contains("gallery__image");

  if (!isImageEl) {
    return;
  }
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
