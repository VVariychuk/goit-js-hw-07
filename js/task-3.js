const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

const makeGalleryItems = images => { 
    return images.map(({ url, alt }) => { 
        return `<li class='gallery__item'>
        <img src='${url}' alt='${alt}'>
        </li>`
    }).join(' ')
}

const markup = makeGalleryItems(images);

gallery.insertAdjacentHTML('beforeEnd', markup)

// const makeGalleryItems = images => {
//     return images.map(image => {
//         const itemEl = document.createElement('li');
//         const pictureEl = document.createElement('img');
//       pictureEl.src = image.url;
//       pictureEl.alt = image.alt;
//       itemEl.classList.add('gallery-item');
//         itemEl.append(pictureEl);
//         gallery.insertBefore(itemEl,null)
//     return itemEl;
//   });
// };
// const pictures = makeGalleryItems(images);
// // gallery.append(...pictures)
// // console.log(pictures[0])
// const paster = (pictures) => {
//     return pictures.forEach(picture => 
//     gallery.insertAdjacentHTML('afterbegin', picture))

// }

// paster(pictures);



// const createGalleryItem = (items) => {
//   return items.map(({ preview, original, description }) => {
//     return `<li class="gallery__item">
//     <a
//     class="gallery__link"
//     href='${original}'
//   >
//   <img
//   class="gallery__image"
//   src='${preview}'
//   data-source="${original}"
//   alt="${description}"
//   />
//   </a>
//   </li>`}).join(' ')
// };