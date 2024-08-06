var scrolling = 0

function presentImage(location){
    y = window.scrollY;
    var x = document.createElement("div");
    x.style.backgroundColor = "rgba(0, 0, 0, 0.80)";
    x.style.height = "110%";
    x.style.width = "100%";
    x.style.zIndex = "100";
    x.style.position = "absolute";
    x.style.margin = "-21px -10px";
    x.style.justifyContent = "center";
    x.style.alignItems = "center";
    x.style.display = "flex";
    x.style.objectFit = "fill";
    x.id = "greyBackground";
    x.style.top = x.getBoundingClientRect().top + window.scrollY + "px";

    document.getElementById("fullScreen").appendChild(x);
    scrolling = 1;

    var img = new Image();
    img.src = "images/" + location;
    img.id = "fullQuality";
    if(window.innerWidth > window.innerHeight){
        img.style.height = "90%";
    }
    else{
        img.style.width = "90%";
    }
    
    img.style.opacity = "100% !important";

    document.getElementById("greyBackground").appendChild(img);
    
    var cancelImg = new Image();
    cancelImg.src = "icons/x.png";
    cancelImg.style.height = "100%";

    var cancel = document.createElement("button");
    cancel.style.backgroundColor = "transparent";
    cancel.style.border = "0";
    cancel.style.padding = "0px";
    cancel.style.height = "50px";
    cancel.style.width = "50px";
    cancel.style.position = "absolute";
    cancel.style.zIndex = "101";
    cancel.style.top = cancel.getBoundingClientRect().top + window.scrollY + 25 + "px";
    cancel.style.right = "5%";
    cancel.id = "cancelButton";
    cancel.onclick = function(){cancelButton()};

    document.getElementById("fullScreen").appendChild(cancel);
    document.getElementById("cancelButton").appendChild(cancelImg);
}

function cancelButton(){
    var elem = document.getElementById("greyBackground");
    elem.remove();
    elem = document.getElementById("cancelButton");
    elem.remove();
    scrolling = 0;
}

function updateCloseup(){
    var cancel = document.getElementById("cancelButton");

    var img = document.getElementById("fullQuality");

    if(window.innerWidth > window.innerHeight){
        img.style.height = "90%";
        img.style.width = ''; 
    }
    else{
        img.style.width = "90%";
        img.style.height = '';
    }
}

function update(){
    if(scrolling){
        updateCloseup();
    }
}

function scrollFun(){
    if(scrolling){
        window.scrollTo(0,y);
    }
}

window.addEventListener("resize", update);

document.addEventListener("scroll", scrollFun);

screen.orientation.addEventListener("change", update);