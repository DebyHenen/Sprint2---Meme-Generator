'use strict'

function renderGallery(){
const imgs = getImgs()
const imgHTML = imgs.map(img =>`
    <img src="${img.url}" onclick="onImgSelect(${img.id})">
    `)

document.querySelector('.images').innerHTML = imgHTML.join('')
}

function onImgSelect(imgId){
setImg(imgId)
document.querySelector('.section-gallery').classList.add('hidden')
document.querySelector('.section-editor').classList.remove('hidden')

renderMeme()
}