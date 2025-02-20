//function
function alertFunction(){
 alert('You did it!');
}

//Method 2
const btn2 = document.querySelector('#btn2');
btn2.onclick = alertFunction;
//get type of event using a callback function
btn2.addEventListener('click', function(e){
    console.log(e);
})


//Method 3 - preferred method
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', alertFunction);

//get type of event using a callback function
btn3.addEventListener('click', function(e){
    console.log(e);
})

//get type of event using a callback function
btn1.addEventListener('click', function(e){
    console.log(e);
})