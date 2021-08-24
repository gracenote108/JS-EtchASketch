const btnObjectMap = new WeakMap();
export class Button{
    constructor(text, identifier, ...cssClass){
        let btnObject = document.createElement("div");
        btnObject.textContent = text;
        btnObject.setAttribute("id", identifier);
        for (let c of cssClass)
            btnObject.classList.add(c);
        btnObjectMap.set(this, btnObject);
    }
    getInstance(){
        return btnObjectMap.get(this);
    }
    addEvent(func){
        let obj = btnObjectMap.get(this);
        obj.addEventListener("click", func);
        btnObjectMap.set(this, obj);
    }
}