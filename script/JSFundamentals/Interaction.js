// Interaction: Alerts, Prompts and Confirms

// Alerts and Prompt combine


/*
  Here I'm using an interactive button where I use an event listener
  to activate a prompt question whenever the hero button is click, 
  then it alerts the user of how old they are.
*/
/*
  The function prompt accepts two functions:
  Title and the prompt as shown below
  "prompt(title, [...])"
*/
const heroButton = document.querySelector('.hero-button');
heroButton.addEventListener('click', function() {

  let name = prompt('What is your name?', []);

  alert(`Hi ${name}, welcome back to coding!`)
});
//  Last is confirm
// "confirm("Press "Okay" if you are ready to code.")"
