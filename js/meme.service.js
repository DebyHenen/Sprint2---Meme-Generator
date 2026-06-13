'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Add Text Here',
            size: 20,
            color: '#ffffff'
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt){
gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setImg(imgId){
    gMeme.selectedImgId= imgId
}

function setColor(color){
    gMeme.lines[gMeme.selectedLineIdx].color = color
}