const loader = document.querySelector('#loader');
const main = document.querySelector('.loaderWrap');

function init() {
    setTimeout(()=> {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'initial';
        setTimeout(()=> (main.style.opacity = 1), 50 );
        
    }, 4000);
}

init();