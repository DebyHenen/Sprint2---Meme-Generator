'use strict'

function renderGallery() {
    const imgs = getImgs()
    const imgHTML = imgs.map(img => `
    <img src="${img.url}" onclick="onImgSelect(${img.id})">
    `)

    document.querySelector('.images').innerHTML = imgHTML.join('')
}

function showEditor() {
    document.querySelector('.section-gallery').classList.add('hidden')
    document.querySelector('.section-editor').classList.remove('hidden')
    document.querySelector('.nav-gallery').classList.remove('active')
    document.querySelector('.nav-editor').classList.add('active')
    updateCurrInput()
    renderMeme()
}

function onImgSelect(imgId) {
    resetMeme()
    setImg(imgId)
    showEditor()
}

function showGallery() {
    document.querySelector('.section-editor').classList.add('hidden')
    document.querySelector('.section-gallery').classList.remove('hidden')
    document.querySelector('.nav-editor').classList.remove('active')
    document.querySelector('.nav-gallery').classList.add('active')
}