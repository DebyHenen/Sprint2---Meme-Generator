'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Add Text Here',
            size: 40,
            color: '#ffffff',
            x: 250,
            y: 60,
            fontFamily: 'Impact',
            align: 'center'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setFontSize(diff) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    if (line.size + diff < 10) return
    line.size += diff
    console.log(line.size)
}

function addLine() {
    gMeme.lines.push({
        txt: 'Add Text Here',
        size: 40,
        color: '#ffffff',
        x: 250,
        y: 60 + gMeme.lines.length * 60,
        fontFamily: 'Impact',
        align: 'center'
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function setFontFamily(fontFamily) {
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = fontFamily
}

function setTextAlign(align, canvasWidth) {
    const line = gMeme.lines[gMeme.selectedLineIdx]
    line.align = align

    switch (align) {
        case 'left':
            line.x = 20
            break

        case 'center':
            line.x = canvasWidth / 2
            break

        case 'right':
            line.x = canvasWidth - 20
            break
    }

}

function setSelectedLine(idx) {
    gMeme.selectedLineIdx = idx
}

function switchLine() {
    gMeme.selectedLineIdx++

    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function resetMeme() {
    gMeme.selectedLineIdx = 0
    gMeme.lines = [
        {
            txt: 'Add Text Here',
            size: 40,
            color: '#ffffff',
            x: 250,
            y: 60,
            fontFamily: 'Impact',
            align: 'center'
        }
    ]
}