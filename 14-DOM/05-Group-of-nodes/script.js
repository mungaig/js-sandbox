//select all buttons
const buttons = document.querySelectorAll('button');

//use forEach to iterate through the buttons
buttons.forEach((button) => {
    //add a 'click' listener for each button
    button.addEventListener('click', () => {
        alert(button.id)
    });
});