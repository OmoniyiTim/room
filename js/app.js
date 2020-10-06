var hambuger = document.querySelector('.hambug');
var close   =  document.querySelector('.hambug-close');
var navContainer =document.querySelector('.nav-list');
var hambugerStatus = 1;



hambuger.addEventListener('click',function(){
    if(hambugerStatus == 1){
        navContainer.style.display = 'flex';
        close.style.display ='block';
     
    }
});

close.addEventListener('click',function(){
    navContainer.style.display = 'none';
    hambugerStatus = 1;
});



const reVerse = document.querySelector('.side-next-left');
const forWard = document.querySelector('.side-next-right');
const slides =  document.querySelectorAll('.slide');



let index = 0;

display(index);
function display(index){

    slides.forEach((slide)=>{
        slide.style.display = 'none';
    });
    slides[index].style.display ='block';
}

function nextSlide(){
    index++;
    if(index > slides.length - 1){
        index = 0;
    }
    display(index);
  
};

function prevSlide(){
    index--;
    if(index < 0){
        index = slides.length-1;
    }
    display(index);


};

forWard.addEventListener('click',nextSlide);
reVerse.addEventListener('click',prevSlide);