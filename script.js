let button = document.querySelector("header > div > div:last-child > div");
let buttonCircle = document.querySelector("header > div > div:last-child > div > div");
let article = document.querySelectorAll("section article");
let body = document.querySelector("body");
let title = document.querySelectorAll("h1, h2");
let number = document.querySelectorAll("section:nth-child(3) article div:last-child > p:first-child, section:nth-child(2)> div article > p:nth-child(2)");
let other = document.querySelectorAll("section:nth-child(2) > div article div:first-child p, header p, section:nth-child(3) article div:first-child > p, section:nth-child(2) > div article > p:nth-child(3), a");
let header = document.querySelector("header");

let darkMode = false;

button.addEventListener("click", () => {
    if(!darkMode){
        darkMode = true;
        for(let i = 0; i < article.length; i++){
            article[i].style.backgroundColor = "hsl(228, 28%, 20%)";
        }
        body.style.backgroundColor =  "hsl(230, 17%, 14%)";
        for(let i = 0; i < title.length; i++){
            title[i].style.color = "hsl(0, 0%, 100%)";
        }
        for(let i = 0; i < number.length; i++){
            number[i].style.color = "hsl(0, 0%, 100%";
        }
        button.style.background = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        buttonCircle.style.background = "hsl(232, 19%, 15%)";
        buttonCircle.style.marginLeft = "3px";
        for(let i = 0; i < other.length; i++){
            other[i].style.color = "hsl(228, 34%, 66%)";
        }
        header.style.backgroundColor = "hsl(232, 19%, 15%)";
    } else if(darkMode){
        darkMode = false;
        for(let i = 0; i < article.length; i++){
            article[i].style.backgroundColor = "hsl(227, 47%, 96%)";
        }
        body.style.backgroundColor =  "hsl(0, 0%, 100%)";
        for(let i = 0; i < title.length; i++){
            title[i].style.color = "hsl(230, 17%, 14%)";
        }
        for(let i = 0; i < number.length; i++){
            number[i].style.color = "hsl(230, 17%, 14%)";
        }
        button.style.background = "hsl(230, 22%, 74%)";
        buttonCircle.style.background = "hsl(225, 100%, 98%)";
        buttonCircle.style.marginLeft = "26px";
        for(let i = 0; i < other.length; i++){
            other[i].style.color = "hsl(228, 12%, 44%)";
        }
        header.style.backgroundColor = "hsl(225, 100%, 98%)";
    }
}, false);

for(let i = 0; i < article.length; i++){
    article[i].addEventListener("mouseover", () => {
        if(!darkMode){
            article[i].style.backgroundColor = "hsl(232, 33%, 91%)";
        } else if (darkMode){
            article[i].style.backgroundColor = "hsl(228, 41%, 34%)";
        }
    })
}

for(let i = 0; i < article.length; i++){
    article[i].addEventListener("mouseout", () => {
        if(!darkMode){
            article[i].style.backgroundColor = "hsl(227, 47%, 96%)";
        } else if (darkMode){
            article[i].style.backgroundColor = "hsl(228, 28%, 20%)";
        }
    })
}