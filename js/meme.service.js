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
            y: 60
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
        y: 60 + gMeme.lines.length * 60
    })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function setSelectedLine(idx) {
    gMeme.selectedLineIdx = idx
}

function switchLine() {
    gMeme.selectedLineIdx++

    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}