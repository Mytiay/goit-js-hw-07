import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryCards = document.querySelector(".gallery");
galleryCards.addEventListener("click", onClickShowModal);

const galleryMarkup = galleryItems.map(galleryCardMarkup).join("");

galleryCards.insertAdjacentHTML("afterbegin", galleryMarkup);

function galleryCardMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      </a> 
  </div>`;
}