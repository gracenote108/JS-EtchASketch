const titleMap = new WeakMap();
const gridContainerMap = new WeakMap();
const btnContainerMap = new WeakMap();
const boxObjectMap = new WeakMap();

export class SketchBox{
    constructor(identifier, ...cssClasses) {
        let boxObject = document.createElement("div");
        boxObject.setAttribute("id", identifier);
        for (let c of cssClasses)
            boxObject.classList.add(c);
        this.addTitleBox();
        boxObjectMap.set(this, boxObject);
    }
    addTitleBox(){
        let newTitle = document.createElement("div");
        newTitle.textContent = "Etch-A-Sketch";
        newTitle.setAttribute("id", "title");
        titleMap.set(this, newTitle);
    }
    addGrid(grid){
        gridContainerMap.set(this, grid);
    }
    addButtonContainer(btnContainer){
        btnContainerMap.set(this, btnContainer);
    }
    getInstance(){
        let boxObj = boxObjectMap.get(this);
        boxObj.appendChild(titleMap.get(this));
        boxObj.appendChild(gridContainerMap.get(this));
        boxObj.appendChild(btnContainerMap.get(this));
        return boxObj;
    }
}