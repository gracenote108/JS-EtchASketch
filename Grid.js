const gridMap = new WeakMap();
export class Grid{
    constructor(identifier, boxes){
        let grid = document.createElement("div");
        grid.setAttribute("id", identifier);
        gridMap.set(this, grid);
        this.createGrid(boxes);
    }
    createGrid(boxes){
        let grid = gridMap.get(this);
        console.log(grid);
        for (let i = 0; i < boxes; i++){
            let gridColumn = document.createElement("div");
            gridColumn.classList.add("grid-cell");
            gridColumn.classList.add("grid-column");
            gridColumn.style.width = `${480/boxes}px`;
            for (let x = 0; x < boxes; x++){
                let gridRow = document.createElement("div");
                gridRow.classList.add("grid-cell");
                gridRow.classList.add("grid-row");
                gridRow.style.height = `${480/boxes}px`
                gridRow.addEventListener("mouseover", (e) => e.target.style.background = "black");
                gridColumn.appendChild(gridRow);
            }
            grid.appendChild(gridColumn);
        }
        gridMap.set(this, grid);
    }
    destroyGrid(){
        let grid = gridMap.get(this);
        while (grid.firstChild)
            grid.removeChild(grid.firstChild);
    }
    getInstance(){
        return gridMap.get(this);
    }
}