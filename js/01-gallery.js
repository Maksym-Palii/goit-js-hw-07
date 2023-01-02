import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerGalleryEl = document.querySelector(".gallery");

const imgMarkup = createGalleryItemMarcup(galleryItems);
containerGalleryEl.insertAdjacentHTML("beforeend", imgMarkup);

containerGalleryEl.addEventListener("click", onDivGalleryClick);

function createGalleryItemMarcup(images) {
  return images
    .map((image) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${image.original}">
            <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            />
        </a>
    </div>
    `;
    })
    .join("");
}

function onDivGalleryClick(evt) {
  evt.preventDefault();
  const isImageEl = evt.target.classList.contains("gallery__image");

  if (!isImageEl) {
    return;
  }
  const imageOriginalLink = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageOriginalLink}">
`);

  instance.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
    window.removeEventListener("keydown", onEscKeyPress);
  }
}
