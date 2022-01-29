var array = ["Web Developer", "Programmer", "Yash Gaur"];
var width = ["65%", "67%", "60%", "55%", "70%"];

var position = 0;

const type = (num) => {
    document.querySelector(".type").innerHTML = array[num].substring(0, position);
    position++;
    if(position !== array[num].length){
        setTimeout(() => {type(num)}, 100);
    }
    else{
        setTimeout(() => {erase(num)}, 100);
    }
}

const erase = (num) => {
    document.querySelector(".type").innerHTML = array[num].substring(0, position);
    position--;
    if(position !== -1){
        setTimeout(() => {erase(num)}, 100);
    }
    else if(position === -1 && num !== array.length-1){
        setTimeout(() => {type(num+1)}, 100);
    }
    else if(position === -1 && num === array.length-1){
        setTimeout(() => {type(0)}, 100);
    }
}

window.addEventListener("load", () => {
    type(0);
});

