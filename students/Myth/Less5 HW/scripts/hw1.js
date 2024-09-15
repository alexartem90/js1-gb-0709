function createChessDesk() {

    let mainTable = document.createElement("div")
    mainTable.className = 'mainTable'
    mainTable.style.height = '850px'
    mainTable.style.width = '850px'
    mainTable.style.display = 'grid'
    mainTable.style.gridTemplateColumns = 'repeat(9, 1fr)'
    mainTable.style.gridTemplateRows = 'repeat(9, 1fr)'
    document.body.appendChild(mainTable)

    function createBlock(text = ' ', background = 'white', border = 'thin solid black') {
        let block = document.createElement("div")
        block.className = 'block'
        block.style.border = `${border}`
        block.innerHTML = `${text}`
        block.style.background =`${background}`
        block.style.display = 'grid'
        block.style.justifyContent = 'center'
        block.style.alignContent = 'center'
        mainTable.appendChild(block)
    }


    for (let i = 0; i <=8; i++){
        if (i === 0){
            createBlock('','white', '')
            for (let i = 65; i <=72; i++){
                createBlock(String.fromCodePoint(i),'white', '')
            }
        }
        else if (i % 2 === 0) {
            createBlock(i, 'white', '')
            for (let i = 0; i < 4; i++) {
                createBlock()
                createBlock(' ', 'black')
            }
        }
        else {
            createBlock(i, 'white', '')
            for (let i = 0; i < 4; i++){
                createBlock(' ', 'black')
                createBlock()
            }
        }
    }
}

createChessDesk()
