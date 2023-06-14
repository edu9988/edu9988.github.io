window.addEventListener('scroll', reveal);
window.addEventListener('load', revealTitle);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

function revealTitle(){
    var revealTitle = document.querySelector('.revealTitle');

    revealTitle.classList.add('active');
    setTimeout(function revealSubTitle(){
        var revealSubT = document.querySelector('.revealSubT');
        var revealButton = document.querySelector('.revealButton');
        
        revealSubT.classList.add('active');
        revealButton.classList.add('active');
    }, 500);
}

