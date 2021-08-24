const containerMap = new WeakMap();
export class Container{
    constructor(identifier, ...cssClasses){
        let conObject = document.createElement("div");
        conObject.setAttribute("id", identifier);
        for (let c of cssClasses)
            conObject.classList.add(c);
        containerMap.set(this, conObject);
    }
    addChild(...children){
        let conObj = containerMap.get(this);
        for (let c of children)
            conObj.appendChild(c);
        containerMap.set(this, conObj);
    }
    getInstance(){
        return containerMap.get(this);
    }
}