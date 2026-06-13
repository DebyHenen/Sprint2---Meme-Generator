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

        // const line = meme.lines[meme.selectedLineIdx]
        meme.lines.forEach((line, idx) => {
            gCtx.font = `${line.size}px Impact`
            gCtx.fillStyle = line.color
            gCtx.lineWidth = 2
            gCtx.strokeStyle = '#000000'
            gCtx.textAlign = 'center'

            // const y = idx === 0 ? 60 : gElCanvas.height - 40
            gCtx.fillText(line.txt, line.x, line.y)
            gCtx.strokeText(line.txt, line.x, line.y)

            if (idx === meme.selectedLineIdx) {
                const textWidth = gCtx.measureText(line.txt).width
                const x = line.x - textWidth / 2 - 10
                const y = line.y - line.size
                const width = textWidth + 20
                const height = line.size + 10

                gCtx.fillStyle = 'rgba(255, 255, 255, 0.2)'
                gCtx.fillRect(x, y, width, height)

                gCtx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
                gCtx.lineWidth = 1

                gCtx.strokeRect(x, y, width, height)
            }

        })
    }
}

function onTxtChange(event) {
    const txt = event.target.value
    setLineTxt(txt)
    renderMeme()
}

function onSetColor(color) {
    setColor(color)
    renderMeme()
}

function onSetFontSize(diff) {
    setFontSize(diff)
    renderMeme()
}

function onAddLine() {
    addLine()
    updateCurrInput()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
    updateCurrInput()
    renderMeme()
}

function updateCurrInput() {
    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]

    document.querySelector('.txt-input').value = line.txt
}




function onDownloadMeme(elLink) {
    elLink.href = gElCanvas.toDataURL()
    elLink.download = 'my-meme'

}