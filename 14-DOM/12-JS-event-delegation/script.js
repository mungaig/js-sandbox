// From: https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/

const menu = document.querySelector('#menu');

menu.addEventListener('click', (e) => {
    const feedback = document.querySelector('#feedback');
    //using the target property of the event
    const target = e.target;

    switch(target.id){
        case 'home':
            feedback.textContent = 'home';
        break;
        case 'about':
            feedback.textContent = 'about';
        break;
        case 'products':
            feedback.textContent = 'products';
        break;
    }
});
