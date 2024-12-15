'use strict'

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { searchImages } from '../main';

export default function renderImages(imagesArray) {
    if (!imagesArray.length) {
        console.log('error');
    } else {
        const imagesCode = imagesArray
            .map(image => {
            return `<li class="image-container">
                        <a class="image-link" href="${image.largeImageURL}">
                            <img class="image" width="360" height="240" src="${image.webformatURL}" alt="${image.tags}"/>
                        </a>
                        <ul class="image-description">
                            <li>
                                <h3>Likes</h3>
                                <p>${image.likes}</p>
                            </li>
                            <li>
                                <h3>Views</h3>
                                <p>${image.views}</p>
                            </li>
                            <li>
                                <h3>Comments</h3>
                                <p>${image.comments}</p>
                            </li>
                            <li>
                                <h3>Downloads</h3>
                                <p>${image.downloads}</p>
                            </li>
                        </ul>
                    </li>` 
        })
            .join('');
        searchImages.galleryList.insertAdjacentHTML('afterbegin', imagesCode);
        let gallery = new SimpleLightbox('.gallery a');
    }

}