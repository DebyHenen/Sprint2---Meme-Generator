'use strict'

var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('.canvas-editor')
    gCtx = gElCanvas.getContext('2d')
    gElCanvas.addEventListener('click', onCanvasClick)
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
            gCtx.font = `${line.size}px ${line.fontFamily}`
            gCtx.fillStyle = line.color
            gCtx.lineWidth = 1
            gCtx.strokeStyle = '#000000'
            gCtx.textAlign = line.align

            // const y = idx === 0 ? 60 : gElCanvas.height - 40
            gCtx.fillText(line.txt, line.x, line.y)
            gCtx.strokeText(line.txt, line.x, line.y)

            const textWidth = gCtx.measureText(line.txt).width
            line.width = textWidth
            line.height = line.size
            console.log(line)

            if (idx === meme.selectedLineIdx) {
                let x
            
                if (line.align === 'left') {
                    x = line.x - 10
                } 
                else if (line.align === 'right') {
                    x = line.x - textWidth - 10
                } 
                else {
                    x = line.x - textWidth / 2 - 10
                }

                // const x = line.x - textWidth / 2 - 10
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

function onOpenClrPicker() {
    document.querySelector('.color-picker').click()
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

function onSetFontFamily(fontFamily) {
    setFontFamily(fontFamily)
    renderMeme()
}

function onSetTextAlign(align) {
    setTextAlign(align, gElCanvas.width)
    renderMeme()
}

function onMoveLine(diff){
moveLine(diff, gElCanvas.height)
renderMeme()
}

function updateCurrInput() {
    const meme = getMeme()
    const line = meme.lines[meme.selectedLineIdx]

    document.querySelector('.txt-input').value = line.txt
}

function getEvPos(ev) {
    const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }

    if (TOUCH_EVS.includes(ev.type)) {
        // Prevent triggering the mouse ev
        ev.preventDefault()
        // Gets the first touch point
        ev = ev.changedTouches[0]
        // Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function onCanvasClick(ev) {
    console.log('clicked')
    const pos = getEvPos(ev)
    console.log(pos)
    const meme = getMeme()

    const clickedLineIdx = meme.lines.findIndex(line => {
        const left = line.x - line.width / 2
        const right = left + line.width
        const top = line.y - line.height
        const bottom = line.y
        return (
            pos.x >= left && pos.x <= right && pos.y >= top && pos.y <= bottom
        )
    })

    if (clickedLineIdx === -1) return
    setSelectedLine(clickedLineIdx)
    updateCurrInput()
    renderMeme()
}


function onDownloadMeme(elLink) {
    elLink.href = gElCanvas.toDataURL()
    elLink.download = 'my-meme'

}