'use strict'

import imagesRequest from './js/pixabay-api';
import renderImages from './js/render-functions.js';
import alerts from './js/alerts.js'

export const searchImages = {
    form: document.querySelector('.searching-form'),
    nameInput: document.querySelector('.search-input'),
    submitButton: document.querySelector('.searching-form>.form-button'),
    loader: document.querySelector('.loader'),
    galleryList: document.querySelector('.gallery'),
    showImages(event) {
        event.preventDefault();

        const name = searchImages.nameInput.value.trim();
        if (name.includes(' ')) {
            name = name.split(' ').join('+');
        };

        if (name == '') {
            alerts.blankNameAlert();
        } else {
            searchImages.galleryList.innerHTML = '';
            searchImages.loader.classList.toggle('isActive');
            
            imagesRequest(name)
                .then((data) => {
                    searchImages.loader.classList.toggle('isActive');
                    if (data.hits.length === 0) {
                        alerts.noImagesAlert();   
                    } else {
                        renderImages(data.hits);   
                    }
                })
                .catch((error) => {
                    alerts.errorAlert(error);
        });
        }
    },
}

searchImages.form.addEventListener('submit', searchImages.showImages);