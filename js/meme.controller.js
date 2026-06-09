'use strict'

var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('.canvas-editor')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()

}

function renderMeme() {
    const meme = getMeme()
    const elImg = new Image()
    elImg.src = 'images/5.jpg'
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

        const line = meme.lines[0]
        gCtx.font = `${line.size}px Impact`
           gCtx.fillStyle = line.color
            gCtx.textAlign = 'center'
        gCtx.fillText(line.txt, gElCanvas.width / 2, 60)

    }
}