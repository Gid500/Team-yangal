(function(){
    const spanEl = document.querySelector("main h2 span");

    const txtArr =['Web Publisher', 'Front-End-Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];

    let index = 0;

    let currentTxt = txtArr[index].split("");

    function writeTxt(){
        spanEl.textContent += currentTxt.shift(); //1
        if(currentTxt.length !== 0){ //2
            setTimeout(writeTxt, Math.floor(Math.random() * 100));

        } else{ //3
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }
    function deleteTxt(){ //1
        currentTxt.pop();
        spanEl.textContent = currentTxt.join(""); //2
        if(currentTxt.length !== 0){ //3
            setTimeout(deleteTxt, Math.floor(Math.random()*100));
        }else{ //4
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
    writeTxt();
})();
/*-------------------------------------------------*/
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browerScrollY > 0){
        headerEl.classList.add("active");
    }else{
        headerEl.classList.remove("active");
    }
}
const animationMove = function(selector){
    const targetEl = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetEl.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({top: targetScrollY, behavior: 'smooth'});
}
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}
    



