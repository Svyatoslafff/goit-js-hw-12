'use strict'

export default function imagesRequest(name) {
    return fetch(`https://pixabay.com/api/?key=47647648-d075ef4691a544101dba04dbb&q=${name}&image_type=photo&orientation=horizontal`)
        .then((responce) => {           
            if(!responce.ok){
                throw new Error();
            } else {
                return responce.json();
            }
        })
}