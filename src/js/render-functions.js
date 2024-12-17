'use strict'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { searchImages } from '../main';

let gallery = new SimpleLightbox('.gallery a');

export default function renderImages(imagesArray) {
    const imagesCode = imagesArray
        .map(({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => {
        return `<li class="image-container">
                    <a class="image-link" href="${largeImageURL}">
                        <img
                            class="image"
                            width="360"
                            height="240"
                            src="${webformatURL}" 
                            alt="${tags}"
                        />
                    </a>
                    <ul class="image-description">
                        <li>
                            <h3>Likes</h3>
                            <p>${likes}</p>
                        </li>
                        <li>
                            <h3>Views</h3>
                            <p>${views}</p>
                        </li>
                        <li>
                            <h3>Comments</h3>
                            <p>${comments}</p>
                        </li>
                        <li>
                            <h3>Downloads</h3>
                            <p>${downloads}</p>
                        </li>
                    </ul>
                </li>` 
        })
        .join('');
    searchImages.galleryList.insertAdjacentHTML('afterbegin', imagesCode);
    gallery.refresh();
}