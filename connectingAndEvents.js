/* hello today i will talk about my progress about JS and HTML, CSS, first what i want write it is about function, finally i got what's the difference betweeen 
function and function(), when you calling function with () it's getting immediately, and when you call function it's getting activate when you need this.
Today i was working with addEventListerenrs (adding keypressed and clicked) first function which i want to show you is that */

document.addEventListener("/* you can add here keyup, keydown, keypress */", function(e) {
  if (e.key === "Escape") 
  {
  // do something
  }
})

// you can see that i add argument E, you can add whatever you want, we need to add this to get object from which key was pressed. and you can see that i created function
// directly from document, not from document.querySelecetor()... , that's because when you using keyboard event you have to do this in document. something else i learned is that
// i can cut off one string from class HTML like this "modal hidden", hidden in css :

.hidden {display:none};

// and strategy in this project was that when you click on button, you .remove("hidden") from class and function looks like this :

btnsCloseModal.addEventListener("click", function() {
  document.querySelector(".modal").classList.remove("hidden"); // you can instead .remove do .add (adds "hidden" to class name), and you can .contains("hidden") it checks 
  // if name is in class name
  
  // that's all for today CY@
