'use strict'

var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('.canvas-editor')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()

}

function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = `images/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        const line = meme.lines[meme.selectedLineIdx]
        gCtx.font = `${line.size}px Impact`
           gCtx.fillStyle = line.color
            gCtx.textAlign = 'center'
        gCtx.fillText(line.txt, gElCanvas.width / 2, 60)

    }
}

function onTxtChange(event){
    const txt = event.target.value
    setLineTxt(txt)
    renderMeme()
}

function onSetColor(color){
    setColor(color)
    renderMeme()
}

function onSetFontSize(diff){
    setFontSize(diff)
    renderMeme()
}

function onDownloadMeme(elLink){
elLink.href = gElCanvas.toDataURL()
elLink.download = 'my-meme'

}