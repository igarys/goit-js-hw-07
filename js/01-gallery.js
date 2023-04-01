import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");
const visible = document.querySelector('.basicLightbox');

galleryItems.forEach((img) => {
    const image = `<div class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</div>
`;
    galleryEl.insertAdjacentHTML("beforeend", image);
});


let instance = "";
galleryEl.addEventListener("click", (e) => {
     e.preventDefault();
     if (e.target.nodeName !== "IMG") return; 

   instance =
    basicLightbox.create(
      `
      <img src="${e.target.dataset.source}">
      `)
      instance.show();
  if (instance.visible() && e.target.nodeName !== "ESCAPE") {
    return;
  }
  instance.close();
  console.log("escape");
    });  
    
    
    // instance.addEventListener("keydown", (e) => {
    //   if (e.target.nodeName !== "ESCAPE") {
    //     return;
    //   }
    //   instance.close();
    //   console.log("escape");
    // });


// instance = ("keydown", (e) => {  
    
//   if (e.target.nodeName === "ESCAPE")  
//     instance.close();
//   console.log("escape");
           
// }
    

