var myInput = document.querySelector(".input"),
    progress = document.querySelector(".progress"),
    count = document.querySelector(".count"),
    maxLength = myInput.getAttribute("maxlength");

count.innerHTML = maxLength;
myInput.oninput = function(){
    count.innerHTML = maxLength - this.value.length;
    if(count.innerHTML == 0){
        count.classList.add("zero");
    }else{
        count.classList.remove("zero");
    }
    progress.style.width = `${(this.value.length * 100 ) / maxLength}%`;
    if(progress.style.width == 100 +"%"){
        progress.style.backgroundColor = "red";
        progress.style.height = 5 +"px";
    }else{
        progress.style.backgroundColor = "rgb(46, 238, 29)";
        progress.style.height = 5 +"px";
    }
}
