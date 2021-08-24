import {SketchBox} from './SketchBox.js';
import {Button} from './Button.js';
import {Container} from './Container.js';
import {Grid} from './Grid.js';

const mainBody = document.getElementsByTagName("body");
const sketchBox = new SketchBox("sketchbox");

const grid = new Grid("grid", 16);
sketchBox.addGrid(grid.getInstance());

const btnContainer = new Container("buttoncontainer");
const etchBtn = new Button("Etch", "etchbutton", "btn-style");
const clearBtn = new Button("Clear", "clearbutton", "btn-style");
const multiBtn = new Button("MultiColor", "multibutton", "btn-style");
btnContainer.addChild(etchBtn.getInstance(), clearBtn.getInstance(), multiBtn.getInstance());
sketchBox.addButtonContainer(btnContainer.getInstance());

mainBody[0].appendChild(sketchBox.getInstance());

etchBtn.addEvent(colorChange)

function colorChange() {
    document.querySelectorAll(".grid-row").forEach( (row) => {
        row.addEventListener("mouseover", (e) => e.target.style.background = "pink");
    })
};

function newGrid(){
    grid.destroyGrid();
    let newBoxes = prompt("How many boxes do you want? Default 16", 16);
    grid.createGrid(newBoxes);
}

function multiColor(){
    document.querySelectorAll(".grid-row")
    .forEach((row) => {
        row.addEventListener("mouseover", ()=>{
            row.style.background = getRandomColor();
        })
    })
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

clearBtn.addEvent(newGrid);
multiBtn.addEvent(multiColor);