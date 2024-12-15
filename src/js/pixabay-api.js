'use strict'

import renderImages from './render-functions.js';
import alerts from './alerts.js'

import { searchImages } from '../main';

export default function imagesRequest(name) {
    if (name.includes(' ')) {
        name = name.split(' ').join('+');
    };

    return fetch(`https://pixabay.com/api/?key=47647648-d075ef4691a544101dba04dbb&q=${name}&image_type=photo&orientation=horizontal`)
        .then((responce) => {           
            if(!responce.ok){
                throw new Error();
            } else {
                return responce.json();
            }
        })
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
        })
}