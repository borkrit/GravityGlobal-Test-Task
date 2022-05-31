let popup = document.querySelector('.popup');
let overlay = document.querySelector('.dark');
let btnOpen = document.querySelector('.block__btn');
let reload = document.querySelector('.reload');
let close = document.querySelector('.close');
let popUpText = document.querySelector('.popup__number');


localStorage.setItem('count', '0')


function count(){
    let number = Number(localStorage.getItem('count'));

    
    number+=1
    

    displayText(number)
    if(number==5){
        reload.style.display='block'
    }
    openModal();

   localStorage.setItem('count', number)
}

function refCount(){
    localStorage.setItem('count', '0')
    let number = Number(localStorage.getItem('count'));
    reload.style.display='none'
    displayText(number)
    
}

function displayText(element){
    
    popUpText.innerHTML=`${element} times`
}


function openModal(){
    popup.classList.remove('popup-display')
    overlay.style.display='block'
}

function closeModal(){
    popup.classList.add('popup-display');
    overlay.style.display='none'
}




btnOpen.addEventListener('click',count);
reload.addEventListener('click',refCount);

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);