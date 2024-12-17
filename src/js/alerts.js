`use strict`
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css";
import errorIconUrl from '../img/error.svg'

const alerts = {
    noImagesAlert() {
        iziToast.warning({
            message: 'Sorry, there are no images matching your request. Please write something else.',
            backgroundColor: '#f54e4ed7',
            messageColor: '#fff',
            iconColor: '#fff',
            iconUrl: `${errorIconUrl}`, 
            progressBarColor: '#b51b1b',
            position: "topRight",
        });
    },
    blankNameAlert() {
        iziToast.warning({
            message: 'Please write your request',
            backgroundColor: '#f54e4ed7',
            messageColor: '#fff',
            iconColor: '#fff',
            iconUrl: `${errorIconUrl}`, 
            progressBarColor: '#b51b1b',
            position: "topRight",
        });
    },
    errorAlert(error) {
        iziToast.warning({
            message: `${error}`,
            backgroundColor: '#f54e4ed7',
            messageColor: '#fff',
            iconColor: '#fff',
            iconUrl: `${errorIconUrl}`, 
            progressBarColor: '#b51b1b',
            position: "topRight",
        });
    },
    lastPageAlert() {
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results.",
            position: "topRight",
        })
    }
}
export default alerts;