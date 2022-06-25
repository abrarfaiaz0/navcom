const layoutButton1 = document.getElementById("layout-button-1");
const layoutButton2 = document.getElementById("layout-button-2");
const layoutButton3 = document.getElementById("layout-button-3");
const cards = document.getElementById("cards-container");

layoutButton1.onclick = function(){activateLayout1();}
layoutButton2.onclick = function(){activateLayout2();}
layoutButton3.onclick = function(){activateLayout3();}

function clearActive(){
    layoutButton1.classList.remove("layout-button-active");
    layoutButton2.classList.remove("layout-button-active");
    layoutButton3.classList.remove("layout-button-active");
    layoutButton1.classList.add("layout-button-inactive");
    layoutButton2.classList.add("layout-button-inactive");
    layoutButton3.classList.add("layout-button-inactive");
}

function clearLayout(){
    cards.classList.remove("layout-1");
    cards.classList.remove("layout-2");
    cards.classList.remove("layout-3");
}

function activateGrid1(){
    clearLayout();
    cards.classList.add("layout-1");
}
function activateGrid2(){
    clearLayout();
    cards.classList.add("layout-2");
}
function activateGrid3(){
    clearLayout();
    cards.classList.add("layout-3");
}


function activateLayout1(){
    clearActive();
    layoutButton1.classList.add("layout-button-active");
    activateGrid1();
}
function activateLayout2(){
    clearActive();
    layoutButton2.classList.add("layout-button-active");
    activateGrid2();
}
function activateLayout3(){
    clearActive();
    layoutButton3.classList.add("layout-button-active");
    activateGrid3();
}