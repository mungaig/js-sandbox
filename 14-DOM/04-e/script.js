
//e.target
const btn = document.querySelector('#btn');
    btn.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e.type);
});

//e.target styling
const btn1 = document.querySelector('#btn1')
    btn1.addEventListener('click', function(e){
        e.target.style.background = 'green';
    });
