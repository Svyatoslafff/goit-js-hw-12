'use strict'

import {imagesRequest, loadMoreRequest} from './js/pixabay-api';
import renderImages from './js/render-functions.js';
import alerts from './js/alerts.js'

export let page;
let totalPages;

export const searchImages = {
    form: document.querySelector('.searching-form'),
    nameInput: document.querySelector('.search-input'),
    submitButton: document.querySelector('.searching-form>.form-button'),
    galleryList: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    loadMoreButton: document.querySelector('button[data-action=load-more]'), 

    showImages(event) {
        event.preventDefault();

        // validator of search name 
        const name = searchImages.nameInput.value.trim();
        if (name.includes(' ')) {
            name = name.split(' ').join('+');
        };

        // blank name cheking
        if (name == '') {
            alerts.blankNameAlert();
        } else {
            // galary clearing
            searchImages.galleryList.innerHTML = '';

            // show loader and remove load-more button
            searchImages.loader.classList.toggle('isActive');
            searchImages.loadMoreButton.classList.remove('isActive');
            
            page = 1;
            imagesRequest(name)
                .then(({data, totalHits}) => {
                    totalPages = totalHits / 15;
                    
                    searchImages.loader.classList.toggle('isActive');
                    
                    if (data.length === 0) {
                        alerts.noImagesAlert();   
                    } else {
                        renderImages(data);   
                        if (totalPages > page) {
                            searchImages.loadMoreButton.classList.add('isActive');
                        }
                    }
                })
                .catch((error) => {
                    searchImages.loader.classList.toggle('isActive');
                    alerts.errorAlert(error.message);
                });
        }
    },
    loadMore(event) {
        event.preventDefault();
        page += 1;
        searchImages.loadMoreButton.classList.remove('isActive');
        searchImages.loader.classList.toggle('isActive');
        loadMoreRequest(page)
            .then((data) => {
                searchImages.loader.classList.toggle('isActive');

                renderImages(data);   
                searchImages.loadMoreButton.classList.remove('isActive');
                // scroll down
                const height = (document.querySelector('.image-container').getBoundingClientRect().height) * 2;
                window.scrollBy({
                    top: height,
                    behavior: 'smooth'
                });

                // end of gallery
                if (page >= totalPages) {
                    searchImages.loadMoreButton.classList.remove('isActive');
                    alerts.lastPageAlert();
                } else {
                    searchImages.loadMoreButton.classList.add('isActive');
                }
            })
            .catch((error) => {
                    searchImages.loader.classList.toggle('isActive');
                    alerts.errorAlert(error.message);
            });
    }
}

searchImages.form.addEventListener('submit', searchImages.showImages);
searchImages.loadMoreButton.addEventListener('click', searchImages.loadMore);