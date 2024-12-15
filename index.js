import{S as f,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();function u(o){if(!o.length)console.log("error");else{const e=o.map(i=>`<li class="image-container">
                        <a class="image-link" href="${i.largeImageURL}">
                            <img class="image" width="360" height="240" src="${i.webformatURL}" alt="${i.tags}"/>
                        </a>
                        <ul class="image-description">
                            <li>
                                <h3>Likes</h3>
                                <p>${i.likes}</p>
                            </li>
                            <li>
                                <h3>Views</h3>
                                <p>${i.views}</p>
                            </li>
                            <li>
                                <h3>Comments</h3>
                                <p>${i.comments}</p>
                            </li>
                            <li>
                                <h3>Downloads</h3>
                                <p>${i.downloads}</p>
                            </li>
                        </ul>
                    </li>`).join("");s.galleryList.insertAdjacentHTML("afterbegin",e),new f(".gallery a")}}const a={noImagesAlert(){n.warning({message:"Sorry, there are no images matching your request. Please write something else.",backgroundColor:"#f54e4ed7",messageColor:"#fff",iconColor:"#fff",iconUrl:"./img/error.svg",progressBarColor:"#b51b1b",position:"topRight"})},blankNameAlert(){n.warning({message:"Please write your request",backgroundColor:"#f54e4ed7",messageColor:"#fff",iconColor:"#fff",iconUrl:"./img/error.svg",progressBarColor:"#b51b1b",position:"topRight"})},errorAlert(o){n.warning({message:`${o}`,backgroundColor:"#f54e4ed7",messageColor:"#fff",iconColor:"#fff",iconUrl:"./img/error.svg",progressBarColor:"#b51b1b",position:"topRight"})}};function g(o){return o.includes(" ")&&(o=o.split(" ").join("+")),fetch(`https://pixabay.com/api/?key=47647648-d075ef4691a544101dba04dbb&q=${o}&image_type=photo&orientation=horizontal`).then(e=>{if(e.ok)return e.json();throw new Error}).then(e=>{s.loader.classList.toggle("isActive"),e.hits.length===0?a.noImagesAlert():u(e.hits)}).catch(e=>{a.errorAlert(e)})}const s={form:document.querySelector(".searching-form"),nameInput:document.querySelector(".search-input"),submitButton:document.querySelector(".searching-form>.form-button"),loader:document.querySelector(".loader"),galleryList:document.querySelector(".gallery"),verifyName(o){o.preventDefault();const e=s.nameInput.value.trim();e==""?a.blankNameAlert():(s.galleryList.innerHTML="",s.loader.classList.toggle("isActive"),g(e))}};s.form.addEventListener("submit",s.verifyName);
//# sourceMappingURL=index.js.map
