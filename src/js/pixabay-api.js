'use strict'

import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const params = {
    key: '47647648-d075ef4691a544101dba04dbb',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 15,
}

function createURL() {
    return new URLSearchParams(params);
} 

export async function imagesRequest(name) {
    params.q = name;
    params.page = 1;

    const responce = await axios.get(`?${createURL()}`);
    return ({data: responce.data.hits, totalHits:responce.data.totalHits});
}

export async function loadMoreRequest(page) {
    params.page = page

    return (await axios.get(`?${createURL()}`))
        .data
        .hits;
}