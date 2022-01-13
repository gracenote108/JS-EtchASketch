function createGrid(boxes){
    let grid = document.getElementById('grid')
    for (let i = 0; i < boxes; i++){
        let gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        gridColumn.style.width = `${480/boxes}px`;
        for (let x = 0; x < boxes; x++){
            let gridRow = document.createElement("div");
            gridRow.classList.add("grid-cell");
            gridRow.style.height = `${480/boxes}px`
            gridColumn.appendChild(gridRow);
        }
        grid.appendChild(gridColumn);
    }
    doEtch()
}

function destroyGrid(){
    const grid = document.getElementById('grid')
    while (grid.firstChild)
        grid.removeChild(grid.firstChild);
}

function createButton(text, id, event){
    const button = document.createElement("div");
    button.textContent = text;
    button.setAttribute("id", id);
    button.classList.add('btn-style');
    button.addEventListener('click', event)
    return button
}

function createButtonPanel(){
    const btnPanel = document.createElement("div");
    btnPanel.setAttribute("id", 'btnpanel');
    btnPanel.appendChild(createButton('Etch', 'etch', doEtch));
    btnPanel.appendChild(createButton('Clear', 'clear', clearGrid));
    btnPanel.appendChild(createButton('MultiColor', 'multi', multiColor));
    return btnPanel;
}

function sketchBox() {
    const main = document.getElementById('main')
    const sketchBox = document.createElement("div");
    main.appendChild(sketchBox)
    sketchBox.setAttribute("id", 'sketchbox');
    sketchBox.appendChild(addTitleBox())

    const grid = document.createElement('div')
    grid.setAttribute('id', 'grid')
    sketchBox.appendChild(grid)
    createGrid(50)

    sketchBox.appendChild(createButtonPanel())

}

function addTitleBox(){
    const newTitle = document.createElement("div");
    newTitle.textContent = "Etch-A-Sketch";
    newTitle.setAttribute("id", "title");

    return newTitle;
}

function doEtch() {
    let mouseDownToggle = false;

    document.querySelectorAll(".grid-cell").forEach( (row) => {
        row.addEventListener("mouseover", () => {
            if (mouseDownToggle)
                row.style.background = "black"
        });
    })

    document.querySelectorAll(".grid-cell").forEach( (row) => {
        row.addEventListener("mousedown", (e) => mouseDownToggle = true);
    })

    document.querySelectorAll(".grid-cell").forEach( (row) => {
        row.addEventListener("mouseup", (e) => mouseDownToggle = false);
    })
};

function clearGrid(){
    let newBoxes = prompt("How many boxes do you want? Min 16, max 100", '16');
    if (newBoxes >= 16 && newBoxes <= 100) {
        destroyGrid();
        createGrid(newBoxes);
    }
    else if (newBoxes === null)
        return;
    else {
        alert('Invalid entry, using default of 16')
        destroyGrid();
        createGrid(16);
    }
}

function multiColor(){
    let mouseDownToggle = false;

    document.querySelectorAll(".grid-cell").forEach( (row) => {
        row.addEventListener("mouseover", () => {
            if (mouseDownToggle)
                row.style.background = getRandomColor();
        });
    })

    document.querySelectorAll(".grid-cell").forEach( (row) => {
        row.addEventListener("mousedown", (e) => mouseDownToggle = true);
    })

    document.querySelectorAll(".grid-cell").forEach( (row) => {
        row.addEventListener("mouseup", (e) => mouseDownToggle = false);
    })
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

sketchBox()