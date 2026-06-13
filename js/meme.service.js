'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Add Top Text Here',
            size: 40,
            color: '#ffffff'
        },
        {
            txt: 'Add bottom Text Here',
            size: 40,
            color: '#ffffff'
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

