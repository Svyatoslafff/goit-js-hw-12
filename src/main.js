'use strict'

import imagesRequest from './js/pixabay-api';
import alerts from './js/alerts.js'

export const searchImages = {
    form: document.querySelector('.searching-form'),
    nameInput: document.querySelector('.search-input'),
    submitButton: document.querySelector('.searching-form>.form-button'),
    loader: document.querySelector('.loader'),
    galleryList: document.querySelector('.gallery'),
    verifyName(event) {
        event.preventDefault();
        const name = searchImages.nameInput.value.trim();
        if (name == '') {
            alerts.blankNameAlert();
        } else {
            searchImages.galleryList.innerHTML = '';
            searchImages.loader.classList.toggle('isActive');
            imagesRequest(name);
        }
    },
}

searchImages.form.addEventListener('submit', searchImages.verifyName);